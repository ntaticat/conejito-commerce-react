import { useProductRepository } from "@/application/providers/ProductRepositoryProvider";
import { getAllProducts } from "@/application/use-cases/product/getAllProducts";
import { Product } from "@/domain/entities/Product";
import { useEffect, useState } from "react";

export function useProducts() {
    const repo = useProductRepository();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        async function load() {
            const data = await getAllProducts(repo);
            if (mounted) {
                setProducts(data);
                setLoading(false);
            }
        }

        load();
        return () => { mounted = false; };
    }, [repo]);

    return { products, loading };
}