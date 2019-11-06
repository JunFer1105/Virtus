const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('links/login');
});

router.get('/', (req, res) => {
    res.render('links/home');
});

router.get('/profile', (req, res) => {
    res.render('links/profile');
});

router.get('/encuesta', (req, res) => {
    res.render('links/encuesta');
});

router.post('/add', (req, res) => {
    res.send('received');
});

module.exports = router;