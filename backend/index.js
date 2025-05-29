import app from "./app.js"; // Importa la configuración principal de la aplicación
import "./database.js";
import dotenv from "dotenv";

dotenv.config();

import { config } from "./config.js";

// Función principal para iniciar el servidor
async function main() {
  const port = config.server.port; // Define el puerto en el que se ejecutará el servidor, puede ser uno secreto (si existe) o el 4000
  app.listen(port); // Inicia el servidor y lo pone a escuchar en el puerto especificado
  console.log("Server on port", port); // Imprime en consola el puerto donde está corriendo el servidor (opcional)
}

// Ejecuta la función principal
main();
