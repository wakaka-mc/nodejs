
const mongoose = require('mongoose');
const Schema = moongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

var typeSchema = new Schema({
	name: String
	},{versionKey: false});
	
typeSchema.plugin(autoIncrement.plugin, 'type');
var type = mongoose.model('type', typeSchema);

module.exports = type;

