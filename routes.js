var controllerequipo = require('./controllerequipo.js');
var controllerAdministrador = require('./controlleratministrador.js');
var controllerpartidos = require('./controllerpartidos.js');


module.exports = function(app) {
	var clasepartido = new controllerequipo();
	app.post('/api/nuevoequipo', clasepartido.Guardar);
	app.post('/api/modificaequipo', clasepartido.Modificar);
	app.post('/api/eliminaequipo', clasepartido.Eliminar);
	app.post('/api/Seleccionartodos', clasepartido.Seleccionartodos);
	app.post('/api/seleccionarequipoporfecha', clasepartido.Seleccionarporfecha);
	app.post('/api/seleccionarequipoporid', clasepartido.Seleccionarporid);
	app.post('/api/seleccionarequipopornombre', clasepartido.Seleccionarpornombre);

	var claseequipo = new controllerpartidos();
	app.post('/api/nuevopartido', claseequipo.Guardar);
	app.post('/api/modificarpartido', claseequipo.Modificar);
	app.post('/api/seleccionaconsulta', claseequipo.Seleccionartodos);
	app.post('/api/seleccionarpeliculaporid', claseequipo.Seleccionarporid);
	app.post('/api/Seleccionartodospartidos', claseequipo.Seleccionartodos);


	var claseadm = new controllerAdministrador();
	app.post('/api/nuevoadm', claseadm.Guardar);
	app.post('/api/loginadm', claseadm.Login);
	app.post('/api/todoslosadministradores',claseadm.Seleccionartodos);



	app.get('*', function(req,res) {//localhost:8080
		res.sendfile('./login.html');//Carga unica de la vista
	});
};