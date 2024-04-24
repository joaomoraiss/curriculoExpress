const express = require("express");
const pessoalRoute = require("./api/pessoal");
const experienciaRoute = require("./api/experiencia");
const formacaoRoute = require("./api/formacao");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API currículo!");
});

app.use("/api/pessoal", pessoalRoute);
app.use("/api/experiencia", experienciaRoute);
app.use("/api/formacao", formacaoRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

db.inserirDadosPessoais("João Morais", "joao@email.com", "81912345678")
  .then((dados) => {
    console.log("Dados pessoais inseridos:", dados);
  })
  .catch((err) => {
    console.error("Erro ao inserir dados pessoais:", err);
  });

db.inserirDadosExperiencia("Desenvolvedor Back-End", "Google", "Vesperino")
  .then((dados) => {
  console.log("Dados experiência inseridos:", dados);
  })
  .catch((err) => {
  console.error("Erro ao inserir dados experiência:", err);
  });
db.inserirDadosFormacao("Sistemas para Internet", "Unicap", "Noturno")
  .then((dados) => {
  console.log("Dados formação inseridos:", dados);
  })
  .catch((err) => {
  console.error("Erro ao inserir dados formação:", err);
  });