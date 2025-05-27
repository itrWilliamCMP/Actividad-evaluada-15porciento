import React, { useState, useEffect } from "react";
import RegisterClients from "../components/Customer/RegisterClients";
import ListClients from "../components/Customer/ListClients";
import toast, { Toaster } from "react-hot-toast";

const Clients = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:4000/api/clients";
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dui, setDui] = useState("");
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setClients(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const saveClient = async (e) => {
    e.preventDefault();
    const newClient = { name, lastName, email, password, telephone, dui };
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClient),
    });

    if (!res.ok) {
      toast.error("Error al registrar cliente");
      return;
    }

    toast.success("Cliente registrado");
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setDui("");
    fetchClients();
  };

  const deleteClient = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    toast.success("Cliente eliminado");
    fetchClients();
  };

  const updateClient = (data) => {
    setId(data._id);
    setName(data.name);
    setLastName(data.lastName);
    setEmail(data.email);
    setPassword(data.password);
    setTelephone(data.telephone);
    setDui(data.dui || "");
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const updatedClient = { name, lastName, email, password, telephone, dui };

    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedClient),
    });

    if (!res.ok) {
      toast.error("Error al actualizar cliente");
      return;
    }

    toast.success("Cliente actualizado");
    setId("");
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setDui("");
    setActiveTab("list");
    fetchClients();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Clientes</h1>
        <div className="flex border-b border-gray-200 mb-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800" onClick={() => setActiveTab("list")}>
            Lista de Clientes
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800" onClick={() => setActiveTab("form")}>
            Gestionar Clientes
          </button>
        </div>
        {activeTab === "list" && <ListClients clients={clients} loading={loading} deleteClient={deleteClient} updateClient={updateClient} />}
        {activeTab === "form" && (
          <RegisterClients
            id={id}
            name={name}
            lastName={lastName}
            email={email}
            password={password}
            telephone={telephone}
            dui={dui}
            setName={setName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPassword={setPassword}
            setTelephone={setTelephone}
            setDui={setDui}
            saveClient={saveClient}
            handleEdit={handleEdit}
          />
        )}
      </div>
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default Clients;
