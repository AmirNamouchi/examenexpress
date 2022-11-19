var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const  configdb =require('./databse/database.json');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');
//affichage twiiiggggg  
var twig = require('./routes/form');
const http =require('http')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
//affichage twig
app.use('/form', twig);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

mongoose.connect(
  configdb.mongo.uri,
  { userNewUrlParser: true, useUnifiedTopology: true},
  () => {
   console.log("Connected to database");
  })


 
 
 


const server = http.createServer(app) ;
// server.listen(3000,()=>console.log('App is running on port 3000...'))

