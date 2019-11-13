const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// Inicio de Sesion
const passport = require('passport');
//Initialization
const app = express();
require('./lib/passport');
//Configuraciones - Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//Middlewares -> Funciones que se ejecutan cada vez que un usuario hace una peticion al servidor
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());
//Global Variables
app.use((req, res, next) => {
    app.locals.user = req.user;
    next();
});


//Routes Rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/perfil', require('./routes/profile'));
app.use('/links',require('./routes/links'));
// Public
app.use(express.static(path.join(__dirname, 'public')));
// Starting server - Iniciar el Servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});