const express = require('express');
const router = express.Router();
const { inserirDadosFormacao, obterDadosFormacao } = require('../db');

router.post('/', async (req, res) => {
  const { curso, instituicao, periodo } = req.body;
  try {
    const dadosFormacao = await inserirDadosFormacao(curso, instituicao, periodo);
    res.json(dadosFormacao);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

router.get('/', async (req, res) => {
  try {
    const dadosFormacao = await obterDadosFormacao();
    res.json(dadosFormacao);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
