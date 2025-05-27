import React from "react";

const ModelCard = ({ model, onDelete, onEdit }) => {
  return (
    <div className="bg-yellow-600 hover:bg-yellow-800 text-white p-4 rounded-lg shadow-md flex justify-between items-center mb-3">
      <div>
        <h3 className="text-lg font-semibold">{model.name}</h3>
        <p className="text-sm text-yellow-200">ID: {model._id}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => onEdit(model)}
          className="bg-yellow-300 text-yellow-900 px-3 py-1 rounded hover:bg-yellow-400"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(model._id)}
          className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
