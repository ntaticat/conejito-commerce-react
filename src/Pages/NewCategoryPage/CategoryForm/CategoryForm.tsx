import { z } from 'zod';
import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// src/schemas/formSchema.ts
export const categorySchema = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres.' }).max(50),
  description: z
    .string()
    .min(10, { message: 'La descripción debe tener al menos 10 caracteres.' })
    .max(200),
  state: z.boolean(), // Cambiado a boolean para una mejor gestión del estado
});

export type TCategoryForm = z.infer<typeof categorySchema>;

// src/components/InputField.tsx
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  name: keyof TCategoryForm;
  register: UseFormRegister<TCategoryForm>;
  errors: FieldErrors<TCategoryForm>;
  as?: 'input' | 'textarea';
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  register,
  errors,
  as = 'input',
  ...props
}) => {
  const isError = !!errors[name];
  const baseClasses = 'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none';
  const errorClasses = isError
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500';

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={name}
          {...register(name)}
          className={`${baseClasses} ${errorClasses} h-24 resize-none`}
          {...(props as InputHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={name}
          {...register(name)}
          className={`${baseClasses} ${errorClasses}`}
          type={props.type || 'text'}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {isError && <p className="mt-1 text-sm text-red-600">{errors[name]?.message}</p>}
    </div>
  );
};

export const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCategoryForm>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: '',
      description: '',
      state: false, // El valor inicial ahora es un booleano
    },
  });

  const onSubmit: SubmitHandler<TCategoryForm> = (data) => {
    console.log('Formulario enviado:', data);
    // Aquí puedes manejar el envío de datos a tu backend
  };

  const handleReset = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <InputField
        label="Nombre"
        name="name"
        placeholder="Categoria #1"
        register={register}
        errors={errors}
      />

      <InputField
        label="Descripción"
        name="description"
        placeholder="Esta es una descripción corta"
        register={register}
        errors={errors}
        as="textarea"
      />

      <div className="mb-4">
        <div className="text-sm font-medium text-gray-700 mb-2">Estado</div>
        <div className="flex items-center space-x-6">
          <label htmlFor="state-active" className="flex items-center cursor-pointer">
            <input
              id="state-active"
              {...register('state')}
              type="radio"
              value="true" // RHF/HTML trata esto como string, pero Zod lo convierte a boolean automáticamente
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2 text-gray-700">Activo</span>
          </label>
          <label htmlFor="state-inactive" className="flex items-center cursor-pointer">
            {/* Note: RHF handles the checked status automatically if value matches default/current state */}
            <input
              id="state-inactive"
              {...register('state')}
              type="radio"
              value="false"
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2 text-gray-700">Inactivo</span>
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-3 mt-6">
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150"
        >
          Vaciar
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
        >
          Añadir
        </button>
      </div>
    </form>
  );
};
