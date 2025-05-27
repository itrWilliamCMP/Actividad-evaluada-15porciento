import React from "react";

const ListModels = ({ models, loading, deleteModel, updateModels }) => {
  if (loading) return <p>Cargando modelos...</p>;
  if (!models.length) return <p>No hay modelos registrados.</p>;

  return (
    <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Nombre</th>
          <th className="border border-gray-300 px-4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {models.map((model) => (
          <tr key={model._id} className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">{model.name}</td>
            <td className="border border-gray-300 px-4 py-2 space-x-2">
              <button
                onClick={() => updateModels(model)}
                className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
              >
                Editar
              </button>
              <button
                onClick={() => deleteModel(model._id)}
                className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListModels;
