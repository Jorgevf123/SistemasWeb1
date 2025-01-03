const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const indexRouter = require('./routes/index');
const terminosRouter = require('./routes/terminos');
//const aboutRouter = require('./routes/conocenos');
const articulo_comunidad = require('./routes/articulo_comunidad');
const articulo_comunidad_editable = require('./routes/articulo_comunidad_editable');
//const concertsRouter = require('./routes/atclients');
const comunidad = require('./routes/comunidad');

const favoritos = require('./routes/favoritos');
const apiFavoritos = require('./routes/api/favoritos');
const gestionUsuariosRouter = require('./routes/gestion_usuarios');
const ejerciciosSupervisarRouter = require('./routes/ejercicios_supervisar');
const ejercicioAValidarRouter = require('./routes/ejercicio_a_validar');


const rutinasRouter = require('./routes/rutina');
const inicioRouter = require('./routes/iniciosesion');
const registroRouter = require('./routes/registro');
const ejerciciosRouter = require('./routes/ejercicios');
const contactoRouter = require('./routes/contacto');
const conocenosRouter = require('./routes/conocenos');
const buscarRouter = require('./routes/buscar'); 
const elegirRoutes = require('./routes/elegir');
const perfilRouter = require('./routes/perfil'); 
const perfiladminRouter = require('./routes/PerfilAdmin');
const publicarEjercicioRouter = require('./routes/publicar_ejercicio');
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/terminos', terminosRouter);

app.use(session({
  secret: "Hola",
  resave: false,
  saveUninitialized: true
}));

app.use((req,res,next) => {
  const message = req.session.message;
  const error = req.session.error;
  delete req.session.message;
  delete req.session.error;
  res.locals.message = "";
  res.locals.error = "";
  res.locals.imagen_perfil = req.session?.user?.imagen_perfil || '/images/avatar.webp'; // Valor por defecto
  res.locals.user = req.session?.user || null; // Asegura que user esté disponible
  if(message) res.locals.message = `<p>${message}</p>`;
  if(error) res.locals.error = `<p>${error}</p>`;
  next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/articulo_comunidad', articulo_comunidad);
app.use('/articulo_comunidad_editable', restrict, articulo_comunidad_editable);
app.use('/comunidad', comunidad);
app.use('/favoritos', restrict, favoritos);
app.use('/api/favoritos', apiFavoritos);
app.use('/rutina', restrict, rutinasRouter);
app.use('/iniciosesion', inicioRouter);
app.use('/registro', registroRouter);
app.use('/ejercicios', ejerciciosRouter);
app.use('/conocenos', conocenosRouter);
app.use('/contacto', contactoRouter);
app.use('/gestion_usuarios', restrictToAdmins, gestionUsuariosRouter);
app.use('/ejercicios_supervisar', restrictToAdmins, ejerciciosSupervisarRouter);
app.use('/ejercicio_a_validar', restrictToAdmins, ejercicioAValidarRouter);
app.use('/publicar_ejercicio', publicarEjercicioRouter);
app.use('/buscar', buscarRouter);
app.use('/', elegirRoutes);
app.use('/perfil', perfilRouter);  // Asegúrate de que la ruta /perfil esté registrada
app.use('/PerfilAdmin', perfiladminRouter);
app.use(restrictBannedUsers);


function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = "Acceso no autorizado. Por favor, inicia sesión.";
    res.redirect("/iniciosesion");
  }
}

// Middleware para restringir el acceso de usuarios baneados
function restrictBannedUsers(req, res, next) {
  if (req.session.user && req.session.user.baneado) {
      return res.status(403).send("Tu cuenta está baneada.");
  }
  next();
}

// Middleware para restringir el acceso a administradores
function restrictToAdmins(req, res, next) {
  if (req.session?.user && req.session.user.rol === 'admin') {
      return next(); // Usuario es administrador, continúa
  }
  res.status(403).send('Acceso denegado. Solo administradores pueden acceder a esta sección.');
}


module.exports = { restrict, restrictBannedUsers, restrictToAdmins };



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
