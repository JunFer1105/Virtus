const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
    res.render('links/home');
});

router.get('/profile', (req, res) => {
    res.render('links/profile');
});

router.get('/encuestaHerramientas', (req, res) => {
    res.render('links/encuestaHerramientas');
});

router.get('/encuestaCompetencias', (req, res) => {
    res.render('links/encuestaCompetencias');
});

router.post('/encuestaHerramientas', async (req, res, next) => {    
    console.log(req.body);
    
});

module.exports = router;