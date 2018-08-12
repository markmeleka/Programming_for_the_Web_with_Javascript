var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');


app.use((req, res, next) => {
	console.log("It's on");
	next();
    });

app.get('/', (req, res) => {
	res.json({msg : 'It works!'});
})

app.get('/findToy', (req, res) => {
	var query = {};

	if(req.query.id){
		query.id = req.query.id;
	} else {
		res.json({});
	}

	Toy.findOne(query, function(err, toy){
		if(err){
			console.log('ERROR' + err + '/ERROR');
		} else if(toy){
			res.json(toy);
		} else {
			res.json({});
		}
		// console.log(res);
	});
});

app.get('/findAnimals', (req, res) => {
	var query = {};

	if(req.query.species){
		query.species = req.query.species;
	} 
	if(req.query.trait){
		query.traits = req.query.trait;
	} 
	if(req.query.gender){
		query.gender = req.query.gender;
	} 
	if(Object.keys(query).length === 0){
		res.json({});
	}

	Animal.find(query, function(err, animal){
		if(err){
			console.log('ERROR' + err + '/ERROR');
		} else if(animal){
			res.json(animal);
		} else {
			res.json({});
		}
		// console.log(animal);
	}).select('-_id -traits');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
    });



// Please do not delete the following line; we need it for testing!
module.exports = app;