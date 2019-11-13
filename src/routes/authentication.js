const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/signup', (req, res) => {
    res.render('auth/signup');
});

router.post('/signup', passport.authenticate('local.signup', {
        successRedirect: '/perfil/editar',
        failureRedirect: '/signup',
        failureFlash: true  
}));

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local.login', {
        successRedirect: '/links',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

module.exports = router;