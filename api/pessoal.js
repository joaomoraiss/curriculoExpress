const express = require('express');
const router = express.Router();
const { inserirDadosPessoais, obterDadosPessoais } = require('../db');

router.post('/', async (req, res) => {
  const { nome, email, telefone } = req.body;
  try {
    const dadosPessoais = await inserirDadosPessoais(nome, email, telefone);
    res.json(dadosPessoais);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

router.get('/', async (req, res) => {
  try {
    const dadosPessoais = await obterDadosPessoais();
    res.json(dadosPessoais);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});



module.exports = router;
