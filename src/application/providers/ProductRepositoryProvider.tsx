import { createLocalProductDataSource } from '@/data/local/DexieProductDataSource';
import { createRemoteProductDataSource } from '@/data/remote/ApiProductDataSource';
import { createProductRepository } from '@/data/repositories/ProductRepositoryImpl';
import { ProductRepository } from '@/domain/repositories/ProductRepository';
import { createContext, useContext } from 'react';

const productRepo = createProductRepository(
  createLocalProductDataSource(),
  createRemoteProductDataSource(),
);

const ProductRepoContext = createContext<ProductRepository>(productRepo);

export const ProductRepositoryProvider = ({ children }: any) => {
  <ProductRepoContext.Provider value={productRepo}>{children}</ProductRepoContext.Provider>;
};

export function useProductRepository() {
  return useContext(ProductRepoContext);
}
