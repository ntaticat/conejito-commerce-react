import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useProductRepository } from '@/application/providers/ProductRepositoryProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// Importa la interfaz completa del dominio si es necesario para el repo.create

// 1. Define el esquema Zod solo para los datos de entrada del formulario
const formInputSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  description: z.string().optional(),
  cost: z.number().min(0, 'El costo no puede ser negativo'),
  price: z.number().min(0, 'El precio no puede ser negativo'),
  imgUrl: z.string().nullable().optional(),
  taxId: z.string().nullable().optional(),
});

// 2. Infiere el tipo de TypeScript a partir del esquema
type FormInputs = z.infer<typeof formInputSchema>;

export const ProductForm = () => {
  const navigate = useNavigate();
  const repo = useProductRepository();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInputs>({
    resolver: zodResolver(formInputSchema),
    defaultValues: {
      name: '',
      description: '',
      cost: 0,
      price: 0,
      imgUrl: null,
      taxId: null,
    },
  });

  // 3. Define la función de envío (misma lógica)
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    await repo.create(data);
    toast.success('Producto guardado localmente', {
      position: 'top-right', // Puedes personalizar la posición
      autoClose: 3000, // Se cierra automáticamente en 3 segundos
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    reset();
  };

  // Componente Input reutilizable con clases Tailwind
  const InputField = ({
    label,
    id,
    error,
    ...props
  }: {
    label: string;
    id: keyof FormInputs;
    error: string | undefined;
  } & React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        {...register(id, { valueAsNumber: props.type === 'number' })}
        {...props}
        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <span className="mt-1 text-sm text-red-600">{error}</span>}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Crear Nuevo Producto</h2>

      <InputField
        label="Nombre del Producto"
        id="name"
        placeholder="Ej: Camiseta básica"
        error={errors.name?.message}
      />

      <InputField
        label="Descripción"
        id="description"
        placeholder="Descripción opcional"
        error={errors.description?.message}
      />

      <InputField
        label="Costo ($)"
        id="cost"
        type="number"
        step="0.01"
        error={errors.cost?.message}
      />

      <InputField
        label="Precio de Venta ($)"
        id="price"
        type="number"
        step="0.01"
        error={errors.price?.message}
      />

      {/* Los campos imgUrl y taxId no tienen inputs visibles aquí, pero se mantienen en el esquema si son necesarios */}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
      >
        {isSubmitting ? 'Guardando...' : 'Guardar Producto'}
      </button>
    </form>
  );
};
