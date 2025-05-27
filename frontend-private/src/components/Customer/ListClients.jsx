import React from "react";
import ClientCard from "./ClientCard";

const ListClients = ({ clients, loading, deleteClient, updateClient }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold underline text-center">Listado de Clientes</h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando...</div>}
        {clients?.map((client) => (
          <ClientCard key={client._id} client={client} deleteClient={deleteClient} updateClient={updateClient} />
        ))}
      </div>
    </div>
  );
};

export default ListClients;
