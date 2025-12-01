import { PageLayout } from 'layouts/PageLayout/PageLayout';
import { ProductForm } from 'Pages/ProductPage/ProductForm/ProductForm';
import { useNavigate } from 'react-router-dom';

export const NewProductPage = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/management/products');
  };

  return (
    <PageLayout>
      <div className="p-4 h-full flex flex-col justify-between">
        <div className="">
          <ProductForm />
        </div>
        <div className="">
          <button
            className="py-2 px-3 w-full rounded-lg bg-pink-300 text-white"
            onClick={goToProducts}
          >
            Regresar
          </button>
        </div>
      </div>
    </PageLayout>
  );
};
