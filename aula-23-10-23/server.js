const express = require("express");
const mysql = require("mysql");
const path = require("path");

//configurando o ambiente

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//configurando conexao mysql

const connection = mysql.createConnection({
  host: "localhost",
  port: "3360",
  user: "root",
  password: "root",
  database: "aula2310",
});

//inserção de dados

app.post("/inserir", (req, res) => {
  const { nome, idade } = req.body;

  connection.query(
    "INSERT INTO conta (nome, idade) VALUES (?, ?)",
    [nome, idade],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      res.json({ message: "inserido com sucesso", insertId: result.insertId });
    }
  );
});

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
