const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

require('./sequelize'); //un ORM (Object-Relational Mapping) para interactuar con una base de datos relacional

const indexRouter = require('./routes/index');
const terminosRouter = require('./routes/terminos');
//const aboutRouter = require('./routes/conocenos');
const articulo_comunidad = require('./routes/articulo_comunidad');
const articulo_comunidad_editable = require('./routes/articulo_comunidad_editable');
//const concertsRouter = require('./routes/atclients');
const comunidad = require('./routes/comunidad');
//const entrada_eventoRouter = require('./routes/contacto');
//const formularioCompraRouter = require('./routes/editar_perfil');
//const adminRouter = require('./routes/ejercicios_a_validar');
//const loginRouter = require('./routes/ejerciicios_supervisar');
//const registerRouter = require('./routes/ejercicios');
const favoritos = require('./routes/favoritos');
const apiFavoritos = require('./routes/api/favoritos');
const gestionUsuariosRouter = require('./routes/gestion_usuarios');
const ejerciciosSupervisarRouter = require('./routes/ejercicios_supervisar');
const ejercicioAValidarRouter = require('./routes/ejercicio_a_validar');
//const editProfileRouter = require('./routes/gestion_usuarios');
//const myticketsRouter = require('./routes/iniciosesion');
//const foroRouter = require('./routes/perfil');
//const foroRouter2 = require('./routes/PerfilAdmin');
//const foroRouter3 = require('./routes/registro');
//const foroRouter4 = require('./routes/rutina');
//const foroRouter5 = require('./routes/terminosycondiciones');
const rutinasRouter = require('./routes/rutina');
const inicioRouter = require('./routes/iniciosesion');
const registroRouter = require('./routes/registro');
const ejerciciosRouter = require('./routes/ejercicios');
const contactoRouter = require('./routes/contacto');
const conocenosRouter = require('./routes/conocenos');
const buscarRouter = require('./routes/buscar'); // Asegúrate de que el path sea correcto
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
app.use('/rutina', rutinasRouter);
app.use('/iniciosesion', inicioRouter);
app.use('/registro', registroRouter);
app.use('/ejercicios', ejerciciosRouter);
app.use('/conocenos', conocenosRouter);
app.use('/contacto', contactoRouter);
app.use('/gestion_usuarios', gestionUsuariosRouter);
app.use('/ejercicios_supervisar', ejerciciosSupervisarRouter);
app.use('/ejercicio_a_validar', ejercicioAValidarRouter);
app.use('/publicar_ejercicio', publicarEjercicioRouter);
app.use('/', buscarRouter);
app.use('/', elegirRoutes);
app.use('/perfil', perfilRouter);  // Asegúrate de que la ruta /perfil esté registrada
app.use('/PerfilAdmin', perfiladminRouter);
//app.use('/otherevents', othereventsRouter);
//app.use('/formulario_compra', formularioCompraRouter);
//app.use('/foro', foroRouter);

//app.use('/adminsection', adminRouter);
//app.use('/login', loginRouter);
//app.use('/register', registerRouter);
//app.use('/profile', profileRouter);
//app.use('/editProfile', editProfileRouter);
//app.use('/myTickets', myticketsRouter);
//app.use('/entrada_evento', entrada_eventoRouter);
//app.use('/logout', (req,res) =>{
//  req.session.destroy();
//  res.redirect("/");
//});
function restrict(req, res, next){
  if(req.session.user){
    next();
  } else {
    req.session.error = "Unauthorized access";
    res.redirect("/iniciosesion");
  }
}
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
// render the error page
  res.status(err.status || 500);
  res.render('error', { error: err });
});
*/


module.exports = app;
