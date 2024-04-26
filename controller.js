const db = require('./db');

const getCurriculo = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM curriculo');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCurriculo = async (req, res) => {
  const { nome, email, telefone, instituicao, periodo, curso, experiencia } = req.body;
  try {
    const result = await db.query('INSERT INTO curriculo (nome, email, telefone, instituicao, periodo, curso, experiencia) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [nome, email, telefone, instituicao, periodo, curso, experiencia]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCurriculo = async (req, res) => {
  const id = req.params.id;
  try {
    await db.query('DELETE FROM curriculo WHERE id = $1', [id]);
    res.json({ message: 'Currículo excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCurriculo,
  createCurriculo,
  deleteCurriculo
};
