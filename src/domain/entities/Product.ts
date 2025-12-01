export interface Product {
    id: string;
    name: string;
    description?: string | null;
    cost: number;
    price: number;
    taxId?: string | null;  // para el futuro
    imgUrl?: string | null; // si la imagen se guarda como base64 o blobUrl
    updatedAt: number;
    syncStatus: "pending" | "synced";
}