import React, { useState, useEffect } from "react";
import RegisterModels from "../components/Models/RegisterModels";
import ListModels from "../components/Models/ListModels";
import toast, { Toaster } from "react-hot-toast";

const Models = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modelName, setModelName] = useState("");
  const [id, setId] = useState("");

  const fetchModels = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://actividad-evaluada-15porciento.vercel.app//api/models");
      if (!response.ok) throw new Error("Error al obtener los modelos");
      const data = await response.json();
      setModels(data);
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchModels();
  }, []);

  const saveModels = async (e) => {
    e.preventDefault();

    if (!modelName.trim()) {
      toast.error("El nombre del modelo es requerido");
      return;
    }

    try {
      const response = await fetch("https://actividad-evaluada-15porciento.vercel.app//api/models", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: modelName }),
      });
      if (!response.ok) throw new Error("Error al registrar el modelo");
      toast.success("Modelo registrado exitosamente");
      setModelName("");
      fetchModels();
      setActiveTab("list");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteModel = async (id) => {
    try {
      const response = await fetch(`https://actividad-evaluada-15porciento.vercel.app/api/models/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar el modelo");
      toast.success("Modelo eliminado");
      fetchModels();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateModels = (model) => {
    setId(model._id);
    setModelName(model.name);
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!modelName.trim()) {
      toast.error("El nombre del modelo es requerido");
      return;
    }
    try {
      const response = await fetch(`https://actividad-evaluada-15porciento.vercel.app/api/models/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: modelName }),
      });
      if (!response.ok) throw new Error("Error al actualizar el modelo");
      toast.success("Modelo actualizado");
      setModelName("");
      setId("");
      setActiveTab("list");
      fetchModels();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Modelos</h1>
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "list"
                ? "border-b-2 border-blue-500 text-gray-800"
                : "text-gray-600 hover:text-gray-800"
            } focus:outline-none`}
            onClick={() => setActiveTab("list")}
          >
            Lista de Modelos
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "form"
                ? "border-b-2 border-blue-500 text-gray-800"
                : "text-gray-600 hover:text-gray-800"
            } focus:outline-none`}
            onClick={() => {
              setActiveTab("form");
              setModelName("");
              setId("");
            }}
          >
            Gestionar Modelo
          </button>
        </div>
        <div>
          {activeTab === "list" && (
            <ListModels
              models={models}
              loading={loading}
              deleteModel={deleteModel}
              updateModels={updateModels}
            />
          )}
          {activeTab === "form" && (
            <RegisterModels
              modelName={modelName}
              setModelName={setModelName}
              saveModels={saveModels}
              handleEdit={handleEdit}
              id={id}
            />
          )}
        </div>
      </div>
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default Models;
