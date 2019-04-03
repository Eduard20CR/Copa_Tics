var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partido = new Schema
({
	FECHA: Date,
	EQUIPO1: String,
	EQUIPO2: String,
	MARCADOR: Number

});

module.exports = mongoose.model('partidos',partido);