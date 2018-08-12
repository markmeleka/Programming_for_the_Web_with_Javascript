var mongoose = require('mongoose');

// note: your host/port number may be different!
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase');

var Schema = mongoose.Schema;

var animalSchema = new Schema( {
	name: {type: String, required: true, unique: true},
	species: {type: String, required: true},
	breed: String,
	gender: {type: String, enum: ['male', 'female']},
	traits: [String],
	age: Number
    } );


module.exports = mongoose.model('Animal', animalSchema);

// db.animals.insert({
// 	name: "Cooper",
// 	species: "Dog",
// 	breed: "Catahoula",
// 	gender: "male",
// 	traits: ["crazy", "funny"],
// 	age: 11
//     } );

// db.animals.insert({
// 	name: "Lola",
// 	species: "Dog",
// 	breed: "Beagle",
// 	gender: "female",
// 	traits: ["loyal", "friendly"],
// 	age: 5
//     } );

// db.animals.insert({
// 	name: "Garfield",
// 	species: "Cat",
// 	breed: "Tabby",
// 	gender: "male",
// 	traits: ["lazy", "hungry"],
// 	age: 39
//     } );

// db.animals.insert({
// 	name: "Felix",
// 	species: "Cat",
// 	breed: "Tuxedo",
// 	gender: "male",
// 	traits: ["funny", "loyal"],
// 	age: 98
//     } );