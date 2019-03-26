var controllerpelicula = require('./controllerequipo.js');
var controllerAdministrador = require('./controlleratministrador.js');


module.exports = function(app) {
	var clasepartido = new controllerequipo();
	app.post('/api/nuevoequipo', clasepelicula.Guardar);
	app.post('/api/modificaequipo', clasepelicula.Modificar);
	app.post('/api/eliminaequipo', clasepelicula.Eliminar);
	app.post('/api/seleccionaequipo', clasepelicula.Seleccionartodos);
	app.post('/api/seleccionarpeliculaporfecha', clasepelicula.Seleccionarporfecha);
	app.post('/api/seleccionarpeliculaporid', clasepelicula.Seleccionarporid);
	app.post('/api/seleccionarpeliculapornombre', clasepelicula.Seleccionarpornombre);


	var claseadm = new controllerAdministrador();
		app.post('/api/nuevoadm', claseadm.Guardar);
	app.post('/api/loginadm', claseadm.Login);



	app.get('*', function(req,res) {//localhost:8080
		res.sendfile('./login.html');//Carga unica de la vista
	});
};