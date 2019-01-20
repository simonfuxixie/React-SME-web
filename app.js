var createError = require('http-errors'),
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    localStrategy	=	require('passport-local').Strategy,
    bcrypt = require('bcrypt'),
    mongoose = require('mongoose'),
    session	=	require('express-session'),
    flash	=	require('connect-flash'),
    expressValidator = require('express-validator');
const exphbs = require('express-handlebars');
const hbsFormHelper = require('handlebars-form-helper');


// 1 day for session cookie lifetime
var SESSION_COOKIE_LIFETIME = 1000 * 60 * 60 * 24;
// connect to mongodb
var dbs = require('./dbconnection/dbconnection.js');
dbs.mongodbConnection();

// var indexRouter = require('./routes/index');
var usersRouter	=	require('./routes/users');
var apiRouter = require('./routes/api');
var app = express();

// Verifies the user is authenticated, else returns unauthorized
var requireAuthentication = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    // send the error as JSON to be nice to clients
    res.send(401, {
        error: "Unauthorized",
    });
};

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

// view engine setup
// app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Handle EXpress Sessions
app.use(session({
	secret:'WestApps secret008' ,
	saveUninitialized: true,
	resave: true,  
}));



// include passport authentication
// require("./config/passport_config.js");
// app.use(passport.initialize());
// app.use(passport.session());

// express messages middleware
app.use(flash());
app.use(function(req,res,next) {
	res.locals.messages = require('express-messages')(req,res);
	next();
});


//Validator
app.use(expressValidator({
	errorFormator: function(param,msg,value) {
		var namespace = param.split('.')
		, root = namespace.shift()
		, formParam = root;

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


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});
app.get('/products', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.get('/data_services', (req,res) =>{
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



app.use('/users',usersRouter);
app.use('/api', apiRouter);



module.exports = app;
