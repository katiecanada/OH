
/**
 * Module dependencies.
 */

var express = require('express');
var partials = require('express-partials');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var addQ = require('./routes/addQ');
var pickClass = require ('./routes/pickClass');
var createClass = require('./routes/createClass');
var faqPage = require('./routes/faqPage');
var queue = require('./routes/queue');
var addQ= require('./routes/addQ');
var pickSession = require('./routes/pickSession');
var people = require('./routes/people');
var tempPage = require('./routes/tempPage');
var tQueue = require('./routes/tQueue');
var analytics = require('./routes/analytics');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.use(partials());

// Add routes here
app.get('/', index.view);
app.get('/pickClass', pickClass.view);
app.post('/pickClass', pickClass.view);
app.get('/addQ', addQ.view);
app.get('/createClass', createClass.view);
app.get('/faqPage', faqPage.view);
app.get('/queue', queue.view);
app.get('/addQ', addQ.view);
app.get('/pickSession', pickSession.view);
app.get('/people', people.view);
app.get('/tempPage', tempPage.view);
app.get('/teacherQueue', tQueue.view);
app.get('/analytics', analytics.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
