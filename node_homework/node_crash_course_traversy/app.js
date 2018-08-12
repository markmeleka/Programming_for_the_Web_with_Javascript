var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017/customerapp', ['users']);
var ObjectId = mongojs.ObjectId;

var app = express();

// var logger = function(req,res,next){ 
// 	console.log('logging');
// 	next();
// }

// app.use(logger);

// view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));

// Global vars
app.use(function(req,res,next){
	res.locals.errors = null;
	next();
});

// express validator middleware
app.use(expressValidator()); 

app.get('/',function(req, res){
	// find everything
	db.users.find(function (err, docs) {
	// docs is an array of all the documents in mycollection
		console.log(docs);
		res.render('index', {
			title: 'Customer',
			users: docs
		});
	})
});

app.post('/users/add', function(req,res){
	req.checkBody('first_name', 'First name is required').notEmpty();
	req.checkBody('last_name', 'Last name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		console.log('Error making new user');
		db.users.find(function(err,docs){
			res.render('index', {
			title: 'Customer',
			users: 	docs,
			errors: errors
			});
		});
	} else {
		var newUser = {
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email
		}
		db.users.insert(newUser, function(err,result){
			if(err){
				console.log(err);
			}
			res.redirect('/');
		});
	}
});

app.delete('/users/delete/:id', function(req,res){
	console.log(req.params.id);
	db.users.remove({_id: ObjectId(req.params.id)}, function(err){
		if(err){
			console.log(err);
		}
		res.redirect('/');
	});
});

app.listen(3000, function(){
	console.log('Server started on Port 3000...')
});