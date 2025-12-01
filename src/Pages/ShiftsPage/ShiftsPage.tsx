import { Fragment } from "react";
import { PageLayout } from "../../layouts/PageLayout/PageLayout";

function ShiftStatePreparation() {
  return (
    <Fragment>
      <button className="mt-4 w-full py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-xl">
        Registrar jornada
      </button>
    </Fragment>
  );
}

function ShiftStateActive() {
  return (
    <Fragment>
      <p className="text-sm leading-tight">
        Tienes una jornada registrada <br /> ¿Deseas empezar la jornada?
      </p>

      {/* Botón */}
      <button className="mt-4 w-full py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-xl">
        Empezar jornada
      </button>
    </Fragment>
  );
}

function ShiftStateTerminated() {
  return (
    <Fragment>
      <p className="text-sm leading-tight">
        Tienes una jornada activa <br /> ¿Deseas terminar la jornada?
      </p>

      {/* Botón */}
      <button className="mt-4 w-full py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-xl">
        Terminar jornada
      </button>
    </Fragment>
  );
}

interface IShiftStateRenderComponent {
  state: string;
}

function ShiftStateRender({ state }: IShiftStateRenderComponent) {
  switch (state) {
    case "preparation":
      return <ShiftStatePreparation />;
    case "active":
      return <ShiftStateActive />;
    case "terminated":
      return <ShiftStateTerminated />;
    default:
      return <ShiftStatePreparation />;
  }
}

export const ShiftsPage = () => {
  return (
    <PageLayout>
      <div className="box-border px-4 pb-4">
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Jornada de ventas</h2>
          <ShiftStateRender state="active" />
        </div>

        {/* Datos importantes */}
        <div className="mt-6 border border-gray-300 rounded-xl p-4 text-center">
          <p className="font-medium">
            Datos importantes de la jornada registrada
          </p>
        </div>

        {/* Record de ventas */}
        <div className="mt-6">
          <p className="font-medium">Jornadas pasadas</p>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm">Mostrar datos confidenciales</span>
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-400"
            />
          </div>

          {/* Caja de detalles */}
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="mt-3 border border-gray-300 rounded-xl p-4 text-sm"
            >
              <p className="mt-2 text-sm text-gray-700">
                27 de noviembre del 2025
              </p>
              <p>
                <strong>Jornada id:</strong> 2
              </p>
              <p>
                <strong>Productos:</strong> 5
              </p>
              <p>
                <strong>Vendido:</strong> 34
              </p>
              <p>
                <strong>Estatus:</strong> Cerrada
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
