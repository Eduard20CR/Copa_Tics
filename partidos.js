var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partido = new Schema
({
	FECHA: Date,
	EQUIPO1: String,
	EQUIPO2: String,
	MARCADOR: String

});

module.exports = mongoose.model('partidos',partido);