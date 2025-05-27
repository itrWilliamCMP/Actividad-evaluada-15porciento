import express from "express";
import cors from "cors";
import clientsRoutes from "./routes/clients.js";
import brandsRoutes from "./routes/brands.js";
import modelsRoutes from "./routes/models.js";
import employeesRoutes from "./routes/employees.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
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
