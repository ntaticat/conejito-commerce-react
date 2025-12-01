import { Product } from "@/domain/entities/Product";

export function toBackendProduct(p: Product) {
    return {
        id: p.id,
        name: p.name,
        description: p.description,
        cost: p.cost,
        price: p.price,
        imgUrl: p.imgUrl,      // si es base64 o blobUrl, el backend decide
        updated_at: p.updatedAt
    };
}