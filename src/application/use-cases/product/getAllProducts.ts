import { ProductRepository } from "@/domain/repositories/ProductRepository";

export function getAllProducts(repo: ProductRepository) {
    return repo.getAll();
}