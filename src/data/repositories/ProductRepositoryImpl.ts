import { ProductRepository } from "@/domain/repositories/ProductRepository"
import { LocalProductDataSource } from "../local/DexieProductDataSource"
import { RemoteProductDataSource } from "../remote/ApiProductDataSource"
import { Product } from "@/domain/entities/Product";
import { v4 as uuid } from 'uuid';

export function createProductRepository(
    local: LocalProductDataSource,
    remote: RemoteProductDataSource
): ProductRepository {
    return {
        getAll() {
            return local.getAll();
        },

        getById(id) {
            return local.getById(id);
        },

        async create(data) {
            const product: Product = {
                ...data,
                id: uuid(),
                updatedAt: Date.now(),
                syncStatus: "pending"
            };

            await local.save(product);
        },

        async update(product) {
            await local.save({
                ...product,
                syncStatus: "pending",  // cada update genera un pending
                updatedAt: Date.now()
            });
        },

        async sync() {
            const pending = await local.getPending();

            for (const product of pending) {
                await remote.push(product);
                await local.markSynced(product.id);
            }
        }
    };
}