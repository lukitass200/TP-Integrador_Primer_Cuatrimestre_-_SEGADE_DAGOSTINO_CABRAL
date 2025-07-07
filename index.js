import express from "express";
import cors from "cors";
import pkg from "pg";
import client from "./src/client.js";

const { Client } = pkg;
const app = express();
const PORT = 5500;
client.connect();

// Middlewares
app.use(cors());
app.use(express.json());

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
