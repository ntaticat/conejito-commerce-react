import { Product } from "../entities/Product";

export interface ProductRepository {
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product | undefined>;
    create(data: Omit<Product, "id" | "syncStatus" | "updatedAt">): Promise<void>;
    update(data: Product): Promise<void>;
    sync(): Promise<void>;
}