import { PageLayout } from 'layouts/PageLayout/PageLayout';
import { useNavigate } from 'react-router-dom';
import { CategoryForm } from './CategoryForm/CategoryForm';

export const NewCategoryPage = () => {
  const navigate = useNavigate();

  const goToCategories = () => {
    navigate('/management/categories');
  };

  return (
    <PageLayout>
      <div className="p-4 h-full flex flex-col justify-between">
        <div className="">
          <CategoryForm />
        </div>
        <div className="">
          <button
            className="py-2 px-3 w-full rounded-lg bg-pink-300 text-white"
            onClick={goToCategories}
          >
            Regresar
          </button>
        </div>
      </div>
    </PageLayout>
  );
};
