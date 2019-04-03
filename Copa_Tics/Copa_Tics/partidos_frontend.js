  class _Partido {
   constructor(_id, 
    FECHA,
    EQUIPO1,
    EQUIPO2,
    MARCADOR
            ) {
       this._id=_id;
       this.FECHA =FECHA;
       this.EQUIPO1 =EQUIPO1;
       this.EQUIPO2 =EQUIPO2;
       this.MARCADOR =MARCADOR;

   }
Guardar() {
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/nuevopartido');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
}
    
 Modificar() {
  
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/modificarpartido');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}  
Seleccionarporid() {
  
      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarpeliculaporid');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
} 

peliculaspormesyanno(mes,anno)
            {
            var objetoaenviar = this;
            var vectordepeliculasfiltradas = [];
        //Return a new promise.
        return new Promise(function(resolve, reject){
         try{
            var xhr = new XMLHttpRequest();
xhr.open('POST','http://localhost:8080/api/seleccionapelicula');
xhr.setRequestHeader('Content-Type','application/json');
xhr.onload = function(){
    if(xhr.status === 200){
        var peliculas =JSON.parse(xhr.responseText);
        
        for(var elemento in peliculas)
            {
                var fechadelapelicula = new Date(peliculas[elemento].FECHA);
                if((fechadelapelicula.getMonth()+1 == mes) && (fechadelapelicula.getFullYear() == anno))
                    {
                        vectordepeliculasfiltradas.push(peliculas[elemento]);
                    }
            }
        resolve(vectordepeliculasfiltradas);
    }
    else{
        reject(xhr);
    }
};
xhr.send(JSON.stringify(objetoaenviar));    
                    }
catch(err){
    reject(err.message);
}
                });
            }

}
          
      function botondepartido() //esta funcionlle na el formulario de pelicula y lo almacena tomando el html y las variables
            {
              
                var partidoinstanciada = new _Partido(0,
                document.getElementById("dia").value,
                document.getElementById("estado1").value,
                document.getElementById("estado2").value,
                0
                );
                partidoinstanciada.Guardar().then(function(response) { //almacena los datos y lanza un alert que indica un guardado exitoso
  console.log("Success!", response);
            alert("Guardado con exito");
              
}, function(error) {
  console.error("Failed!", error); // indica un fallo en el proceso
             alert("Error " + error);
           
});                                       
                                                        
            }