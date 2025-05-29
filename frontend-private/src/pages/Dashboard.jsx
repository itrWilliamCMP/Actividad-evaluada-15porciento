import React, { useEffect, useState } from "react";
import CardDashboard from "../components/CardDashboard";

const Dashboard = () => {
  const [data, setData] = useState({
    employees: 0,
    brands: 0,
    models: 0,
    clients: 0,
    products: 0,
  });

  const fetchData = async () => {
    try {
      const employeesResponse = await fetch(
        "https://actividad-evaluada-15porciento.vercel.app//api/employees"
      );
      const brandsResponse = await fetch("https://actividad-evaluada-15porciento.vercel.app//api/brands");
      const modelsResponse = await fetch("https://actividad-evaluada-15porciento.vercel.app//api/models");
      const clientsResponse = await fetch(
        "https://actividad-evaluada-15porciento.vercel.app//api/clients"
      );

      const employeesData = await employeesResponse.json();
      const brandsData = await brandsResponse.json();
      const modelsData = await modelsResponse.json();
      const clientsData = await clientsResponse.json();

      setData({
        employees: employeesData.length,
        brands: brandsData.length,
        models: modelsData.length,
        clients: clientsData.length,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardDashboard label="Empleados" data={data.employees} />
          <CardDashboard label="Marcas" data={data.brands} />
          <CardDashboard label="Modelos" data={data.models} />
          <CardDashboard label="Clientes" data={data.clients} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
