var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var equipo = new Schema
({
	NOMBRE: String,
	COMPLETO: Number,
	IMAGEN: String,

	
	JUGADORES:{
		
		A1:{
			NOMBREESTUDIANTE:String,
			SECCION:String,
			ESPECIALIDAD:String
		},
		A2:{
			NOMBREESTUDIANTE:String,
			SECCION:String,
			ESPECIALIDAD:String
		},
		A3:{
			NOMBREESTUDIANTE:String,
			SECCION:String,
			ESPECIALIDAD:String
		},
		A4:{
			NOMBREESTUDIANTE:String,
			SECCION:String,
			ESPECIALIDAD:String
		},
		A5:{
			NOMBREESTUDIANTE:String,
			SECCION:String,
			ESPECIALIDAD:String
		},
		A6:{
			NOMBREESTUDIANTE:String,
			SECCION:String,
			ESPECIALIDAD:String
		},
		A7:{
			NOMBREESTUDIANTE:String,
			SECCION:String,
			ESPECIALIDAD:String
		},
		A8:{
			NOMBREESTUDIANTE:String,
			SECCION:String,
			ESPECIALIDAD:String
		}

	}



});

module.exports = mongoose.model('datos_de_equipo',equipo);