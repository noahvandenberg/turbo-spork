var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');

var usersRouter = require('./routes/users');
var eventsRouter = require('./routes/events');
var usersEventsRouter = require('./routes/users_events');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/users', usersRouter);
app.use('/events', eventsRouter);
app.use('/users_events', usersEventsRouter);

module.exports = app;
