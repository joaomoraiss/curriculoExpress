const { Pool } = require('pg');
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "curriculoExpress",
  password: "joao1220",
  port: 5433,
});

const inserirDadosPessoais = async (nome, email, telefone) => {
  const query =
    "INSERT INTO dados_pessoais (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *";
  const values = [nome, email, telefone];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const inserirDadosExperiencia = async (cargo, empresa, periodo) => {
  const query =
    "INSERT INTO experiencia_profissional (cargo, empresa, periodo) VALUES ($1, $2, $3) RETURNING *";
  const values = [cargo, empresa, periodo];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const inserirDadosFormacao = async (curso, instituicao, periodo) => {
  const query =
    "INSERT INTO formacao_academica (curso, instituicao, periodo) VALUES ($1, $2, $3) RETURNING *";
  const values = [curso, instituicao, periodo];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const obterDadosPessoais = async () => {
  const query = "SELECT * FROM dados_pessoais";
  const result = await pool.query(query);
  return result.rows;
};
const obterDadosFormacao = async () => {
  const query = "SELECT * FROM formacao_academica";
  const result = await pool.query(query);
  return result.rows;
};
const obterDadosExperiencia = async () => {
  const query = "SELECT * FROM experiencia_profissional";
  const result = await pool.query(query);
  return result.rows;
};

module.exports = {
  inserirDadosPessoais,
  inserirDadosExperiencia,
  inserirDadosFormacao,
  obterDadosPessoais,
  obterDadosFormacao,
  obterDadosExperiencia,
  pool,
};
