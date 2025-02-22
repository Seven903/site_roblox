import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(cors());

const usuarios = []

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/sign", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index2.html"));
});

app.post("/sign", (req, res) => {
  console.log(req.body);
});

app.get("/usuarios", (req, res) => {
  res.send(JSON.stringify(usuarios));
});

app.post("/usuarios", (req, res) => {
  const dados = req.body;
  usuarios.push(dados)
  console.log("Dados recebidos: ", dados);

  res.status(200).json({ message: "Dados recebidos com secusso",dados });
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index3.html"));
});

app.listen(port, () => {
  console.log("Servidor rodando em: http:127.0.0.1:" + port);
});
