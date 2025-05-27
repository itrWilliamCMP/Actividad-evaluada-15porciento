import express from "express";
const router = express.Router();

import employeesController from "../controllers/employeesController.js";

router.route("/")
  .get(employeesController.getEmployees)
  .post(employeesController.createEmployee); // <- POST agregado

router.route("/:id")
  .get(employeesController.getEmployee)
  .put(employeesController.updateEmployee) // <- Corregido a singular
  .delete(employeesController.deleteEmployee); // <- Corregido a singular

export default router;
