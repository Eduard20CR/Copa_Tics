var Item = require('./partidos');
module.exports = class _añadirpartidos {
   constructor( ) {

   }
Guardar(req,res) {
	Item.create(//crea todos esos datos y los almacena
			{
    FECHA: req.body.FECHA,
    EQUIPO1: req.body.EQUIPO1,
    EQUIPO2: req.body.EQUIPO2,
    MARCADOR: req.body.MARCADOR

            }, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}//Envia el error
				
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);//
				});
                
                
          }
               	
			});
    
    
    
}
    
 Modificar(req,res) {
		Item.update( {_id : req.body._id},//modifica el guardado anterior
					{$set://y lo setea
			{
    FECHA: req.body.FECHA,
    EQUIPO1: req.body.EQUIPO1,
    EQUIPO2: req.body.EQUIPO2,
    MARCADOR: req.body.MARCADOR
            }}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}   


    Seleccionarporid(req,res) {
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
}


    Seleccionarporfecha(req,res) { //elige basado en la fecha
	Item.find({FECHA:req.body.FECHA}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}


    
}