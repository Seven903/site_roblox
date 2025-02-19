import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/sign", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index2.html"));
});

app.post("/sign",(req,res)=>{
  console.log(req.body)
})

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index3.html"));
});

app.listen(port, () => {
  console.log("Servidor rodando em: http:127.0.0.1:" + port);
});
