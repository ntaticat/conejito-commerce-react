import { PageLayout } from '../../layouts/PageLayout/PageLayout';
import { ProductItem } from './ProductItem/ProductItem';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '@/application/hooks/useProducts';

export const ProductsPage = () => {
  const navigate = useNavigate();

  const { products, loading } = useProducts();

  const handleRedirectToNewProduct = () => {
    navigate('new-product');
  };

  return (
    <PageLayout>
      <div className="relative w-full h-full flex flex-nowrap flex-col justify-between">
        {/* Productos */}
        <div className="w-full p-3">
          {products.map((producto) => (
            <ProductItem key={producto.id} product={producto} />
          ))}
        </div>

        {/* Panel bottom */}
        <div className="sticky bottom-0 left-0 z-20 w-full h-auto bg-pink-200 p-3 text-center shadow-lg shadow-gray-500/50">
          <button
            className="py-2 px-3 w-full rounded-lg bg-pink-300 text-white"
            onClick={handleRedirectToNewProduct}
          >
            Añadir producto
          </button>
        </div>
      </div>
    </PageLayout>
  );
};
