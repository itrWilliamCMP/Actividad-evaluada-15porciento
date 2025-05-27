import React from "react";

const RegisterModels = ({
  modelName,
  setModelName,
  saveModels,
  handleEdit,
  id,
}) => {
  return (
    <form onSubmit={id ? handleEdit : saveModels} className="space-y-4">
      <div>
        <label className="block text-gray-700">Nombre del Modelo</label>
        <input
          type="text"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Ingrese nombre"
        />
      </div>
      <button
        type="submit"
        className={`px-4 py-2 rounded text-white ${
          id ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {id ? "Actualizar Modelo" : "Registrar Modelo"}
      </button>
    </form>
  );
};

export default RegisterModels;
