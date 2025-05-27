import React from "react";

const CardDashboard = ({ label, data }) => {
  let className = "";

  switch (label) {
    case "Clientes":
      className =
        "bg-red-600 hover:bg-red-800 text-white p-6 rounded-lg shadow-md"; 
      break;
    case "Empleados":
      className =
        "bg-blue-600 hover:bg-blue-800 text-white p-6 rounded-lg shadow-md"; 
      break;
    case "Modelos":
      className =
        "bg-yellow-500 hover:bg-yellow-700 text-black p-6 rounded-lg shadow-md"; 
      break;
    case "Marcas":
      className =
        "bg-green-600 hover:bg-green-800 text-white p-6 rounded-lg shadow-md"; 
      break;
    default:
      className =
        "bg-black hover:bg-gray-900 text-white p-6 rounded-lg shadow-md"; 
      break;
  }

  return (
    <div className={className}>
      <h2 className="text-xl font-bold">{label}</h2>
      <p className="text-4xl font-bold mt-4">{data}</p>
    </div>
  );
};

export default CardDashboard;
