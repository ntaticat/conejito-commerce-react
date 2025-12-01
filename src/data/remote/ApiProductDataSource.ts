import { Product } from "@/domain/entities/Product";
import { toBackendProduct } from "../mappers/productMapper";

export interface RemoteProductDataSource {
    push(product: Product): Promise<any>;
}

export function createRemoteProductDataSource(): RemoteProductDataSource {
    return {
        async push(product) {
            const payload = toBackendProduct(product);

            const res = await fetch("/api/products", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-Type": "application/json" }
            });

            return res.json();
        }
    };
}

