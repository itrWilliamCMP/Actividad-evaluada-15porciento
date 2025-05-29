import express from "express";
import cors from "cors";
import clientsRoutes from "./src/routes/clients.js";
import brandsRoutes from "./src/routes/brands.js";
import modelsRoutes from "./src/routes/models.js";
import employeesRoutes from "./src/routes/employees.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://actividad-evaluada-15porciento.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/clients", clientsRoutes);
app.use("/api/brands", brandsRoutes);
app.use("/api/models", modelsRoutes);
app.use("/api/employees", employeesRoutes);

export default app;
