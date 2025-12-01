import { Link } from 'react-router-dom';

interface ICategoriaComponent {
  categoria: any;
}

export const CategoriaItem = ({ categoria }: ICategoriaComponent) => {
  return (
    <div
      key={categoria._id}
      className="flex flex-nowrap justify-between items-center first:rounded-t-lg last:rounded-b-lg last:border-0 border-b-2 border-solid text-gray-700 border-gray-200 hover:bg-red-300 hover:text-white duration-100"
    >
      <Link to={`/categorias/${categoria._id}`}>
        <h2 className="py-2 px-3 underline">{categoria.name}</h2>
      </Link>
      <div className="py-2 px-3 text-center text-xs">
        <p className="text-sm">{categoria.products?.length || 0}</p>
        <p>productos</p>
      </div>
    </div>
  );
};
