import { Product } from "@/domain/entities/Product";
import Dexie, { Table } from "dexie";

export class AppDB extends Dexie {
    products!: Table<Product>;

    constructor() {
        super("AppDB");
        this.version(1).stores({
            products: "id, name, updatedAt, syncStatus"
        });
    }
}

export const db = new AppDB();