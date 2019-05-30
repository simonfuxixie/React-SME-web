// load npm packages
const createError = require('http-errors'),
      express = require('express'),
      favicon = require('serve-favicon'),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      logger = require('morgan'),
      bodyParser = require("body-parser"),
      passport = require("passport"),
      bcrypt = require('bcrypt'),
      mongoose = require('mongoose'),
      session	=	require('express-session'),
      flash	=	require('connect-flash'),
      expressValidator = require('express-validator');
const LocalStrategy	=	require('passport-local').Strategy;
const exphbs = require('express-handlebars');
const hbsFormHelper = require('handlebars-form-helper');
const Handlebars = require('handlebars');
const HandlebarsIntl = require('handlebars-intl');

Handlebars.registerHelper('assign', function (varName, varValue, options) {
    if (!options.data.root) {
        options.data.root = {};
    }
    options.data.root[varName] = varValue;
});

var app = express();

// view engine
const hbs = exphbs.create({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: `${__dirname}/views/layouts/`,
  partialsDir: `${__dirname}/views/partials/`,
});
// Call the registerHelper and pass in the handlebars object
hbsFormHelper.registerHelpers(hbs.handlebars, { namespace: 'form' });
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// connect to mongodb
var dbs = require('./dbconnection/dbconnection.js');
dbs.mongodbConnection();

//Handle EXpress Sessions
app.use(session({
	secret:'WestApps secret008' ,
	saveUninitialized: false,
	resave: false,
  // connect-flash will be disabled if use cookie
  // cookie: {
  //   path: '/',
  //   secure: false,
  //   maxAge: null,
  // },
}));



// express messages middleware
app.use(flash());
app.use(function(req,res,next) {
	res.locals.messages = require('express-messages')(req,res);
	next();
});


// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());
var User = require('./models/users_model');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Validator
app.use(expressValidator({
	errorFormator: function(param,msg,value) {
		var namespace = param.split('.'),
		    root = namespace.shift(),
		    formParam = root;

		while(namespace.length) {
			formParam += '[' + namespace.shift() + ']';
		}

		return {
			param 	: formParam,
			msg 	: msg,
			value	: value
		};
	}
}));


// routes
const router = express.Router();
// route middleware that will happen on every request
router.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next();
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});
app.get('/ar_services', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/ai_services', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/website_app', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/e_commerce', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/about', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/careers', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/contact', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


const usersRouter	=	require('./routes/users');
const adminRouter = require('./routes/admin');
const apiRouter = require('./routes/api');
const frontendRouter = require('./routes/frontend_router');
app.use('/users',usersRouter);
app.use('/admin',adminRouter);
app.use('/api', apiRouter);
app.use('/frontenddata', frontendRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Path or File Not Found!');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


// configuration for development environment
// if(process.env.NODE_ENV === 'development') {
//   console.log("in development environment");
//   app.use(express.errorHandler());
// }


// configuration for production environment (NODE_ENV=production)
// if(process.env.NODE_ENV === 'production') {
//   console.log("in production environment");
//   // configure a generic 500 error message
//   app.use(function(err, req, res, next) {
//       res.status(500).send("An error has occurred");
//   });
// }


module.exports = app;
