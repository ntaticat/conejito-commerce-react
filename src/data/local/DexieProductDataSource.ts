import { Product } from "@/domain/entities/Product";
import { db } from "./db";
import { PromiseExtended } from "dexie";

export interface LocalProductDataSource {
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product | undefined>;
    save(product: Product): Promise<void>;
    getPending(): Promise<Product[]>;
    markSynced(id: string): PromiseExtended<number>;
}

export function createLocalProductDataSource(): LocalProductDataSource {
    return {
        getAll() {
            return db.products.toArray();
        },

        getById(id) {
            return db.products.get(id);
        },

        async save(product) {
            await db.products.put(product);
        },

        getPending() {
            return db.products.where("syncStatus").equals("pending").toArray();
        },

        markSynced(id) {
            return db.products.update(id, { syncStatus: "synced" });
        },
    };
}