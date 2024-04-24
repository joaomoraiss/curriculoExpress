const express = require('express');
const router = express.Router();
const { inserirDadosExperiencia, obterDadosExperiencia } = require('../db');

router.post('/', async (req, res) => {
  const { cargo, empresa, periodo } = req.body;
  try {
    const dadosExperiencia = await inserirDadosExperiencia(cargo, empresa, periodo);
    res.json(dadosExperiencia);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

router.get('/', async (req, res) => {
  try {
    const dadosExperiencia = await obterDadosExperiencia();
    res.json(dadosExperiencia);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
