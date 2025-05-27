import Employee from "../models/Employees.js";

const employeesController = {};

// OBTENER TODOS LOS EMPLEADOS
employeesController.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener empleados", error: error.message });
  }
};

// OBTENER UN EMPLEADO POR ID
employeesController.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el empleado", error: error.message });
  }
};

// CREAR UN EMPLEADO NUEVO
employeesController.createEmployee = async (req, res) => {
  const { name, lastName, email, password, telephone, dui, address, birthdate, hireDate, isssNumber } = req.body;

  if (!name || !lastName || !email || !password || !telephone) {
    return res.status(400).json({ message: "Todos los campos obligatorios deben completarse" });
  }

  try {
    const newEmployee = new Employee({
      name,
      lastName,
      email,
      password,
      telephone,
      dui: dui || null,
      address,
      birthdate,
      hireDate,
      isssNumber,
    });

    await newEmployee.save();
    res.status(201).json({ message: "Empleado registrado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear empleado", error: error.message });
  }
};

// ACTUALIZAR UN EMPLEADO
employeesController.updateEmployee = async (req, res) => {
  const { name, lastName, email, password, telephone, dui, address, birthdate, hireDate, isssNumber } = req.body;

  if (!name || !lastName || !email || !password || !telephone) {
    return res.status(400).json({ message: "Todos los campos obligatorios deben completarse" });
  }

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        name,
        lastName,
        email,
        password,
        telephone,
        dui: dui || null,
        address,
        birthdate,
        hireDate,
        isssNumber,
      },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }

    res.json({ message: "Empleado actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar empleado", error: error.message });
  }
};

// ELIMINAR UN EMPLEADO
employeesController.deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.json({ message: "Empleado eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar empleado", error: error.message });
  }
};

export default employeesController;
