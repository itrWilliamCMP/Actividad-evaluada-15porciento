import express from "express";
const router = express.Router();

import clientsController from "../controllers/clientsController.js";

// GET y POST (crear)
router.route("/")
  .get(clientsController.getClients)
  .post(clientsController.createClient);

// GET, PUT, DELETE por ID
router.route("/:id")
  .get(clientsController.getClient)
  .put(clientsController.updateClients)
  .delete(clientsController.deleteClients);

export default router;
