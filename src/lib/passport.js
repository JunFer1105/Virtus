const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../database');
const helpers =require('../lib/helpers');

passport.use('local.login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    
    const filas = await db.query('SELECT * FROM usuario WHERE n_usuario = ?', [username]);    
    if (filas.length > 0){
        const user = filas[0];
        const validPassword = await helpers.matchPassword(password, user.n_clave);
        
        if (validPassword){
            //done(null, user, req.flash('Bienvenido'));
            done(null, user);
            console.log("EXITO LPM")
        } else {
            done(null, false);
            console.log("Contraseña Incorrecta");
        }
    }else{
        console.log("Usuario Incorrecto");
        return done(null, false);        
    }
}));



passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const newUser = {
        n_usuario : username,
        n_clave: password
    };

    // DEFINIMOS UNA NUEVA ID PARA EL NUEVO USUARIO REGISTRADO
    var auxId = 0;
    const aux = await db.query('SELECT k_id FROM usuario');
    console.log(aux.length);
    for(var i = 0; i < aux.length; i++){
        if (auxId == aux[i].k_id){
            auxId += 1;
        }else{
            break;
        }
    }
    console.log(auxId);
    //const auxId = aux[aux.length-1].id + 1;
    // POR AHORA LO DEJAREMOS ASI POSTERIORMENTE SE DISEÑARA UN MEJOR CIFRADO O DISEÑO PARA LAS IDS
    
    newUser.n_clave = await helpers.encryptPassword(password);
    console.log(newUser.n_clave);
    newUser.k_id = auxId;
    const result = await db.query('INSERT INTO usuario SET ?', [newUser]);
    
    return done(null, newUser);
}));

passport.serializeUser((user, done) =>{
    done(null, user.k_id);
});

passport.deserializeUser( async (id, done) => {
    const filas = await db.query('SELECT * Where k_id = ?', [id]);
    done(null, filas[0]);
});