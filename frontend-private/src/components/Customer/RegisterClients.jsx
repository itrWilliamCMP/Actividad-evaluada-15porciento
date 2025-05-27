import React from 'react';

const RegisterClients = ({ setName, name, setLastName, lastName, setEmail, email, setPassword, password, setTelephone, telephone, setDui, dui, saveClient, id, handleEdit }) => {
  return (
    <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Nombre</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Nombre" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Apellido</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Apellido" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Correo electrónico" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Contraseña" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Teléfono</label>
        <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Teléfono" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">DUI</label>
        <input type="text" value={dui} onChange={(e) => setDui(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="DUI (opcional)" />
      </div>

      {!id ? (
        <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={saveClient}>
          Guardar
        </button>
      ) : (
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600" onClick={handleEdit}>
          Editar
        </button>
      )}
    </form>
  );
};

export default RegisterClients;
