// routes.js
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => {
    res.send('Bem-vindo à API do Currículo!');
  });
router.get('/curriculo', controller.getCurriculo);
router.post('/criarCurriculo', controller.createCurriculo);

module.exports = router;
