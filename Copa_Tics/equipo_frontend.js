     
            
        class _Pelicula {
   constructor(_id, 
    NOMBRE,
    COMPLETO,
    IMAGEN,
    JUGADORES
            ) {
       this._id=_id;
       this.NOMBRE =NOMBRE;
       this.COMPLETO =COMPLETO;
       this.IMAGEN =IMAGEN;
       this.JUGADORES =JUGADORES;

   }
Guardar() {
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Nuevapelicula');
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
xhr.open('POST', 'http://localhost:8080/api/Modificapelicula');
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
    
    Eliminar() {

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Eliminapelicula');
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
Seleccionartodos() {
	
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionartodos');
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
    
    Seleccionarporfecha() {

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarporfecha');
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
    
    Seleccionarpornombre() {

    
    
      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarpornombre');
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
            
             let imagenenbase64 = "";
      $("#imgpeli").change(function(){
       readURL(this);
 });
    
        function readURL(input) {

                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {

                            imagenenbase64=e.target.result;

                        
                          
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }
    
    
            
            
           var asientos = new Object();
        var asientoA1 = new Object();
            asientoA1.NOMBREESTUDIANTE = null;
            asientoA1.SECCION=null;
            asientoA1.CARNET=null;
            asientos.A1= asientoA1;
            
             var asientoA2 = new Object();
            asientoA2.NOMBREESTUDIANTE = null;
            asientoA2.SECCION=null;
            asientoA2.CARNET=null;
            asientos.A2= asientoA2;
            
             var asientoA3 = new Object();
            asientoA3.NOMBREESTUDIANTE = null;
            asientoA3.SECCION=null;
            asientoA3.CARNET=null;
            asientos.A3= asientoA3;

             var asientoA4 = new Object();
            asientoA4.NOMBREESTUDIANTE = null;
            asientoA4.SECCION=null;
            asientoA4.CARNET=null;
            asientos.A4= asientoA4;
             
             var asientoA5 = new Object();
            asientoA5.NOMBREESTUDIANTE = null;
            asientoA5.SECCION=null;
            asientoA5.CARNET=null;
            asientos.A5= asientoA5;

             var asientoA6 = new Object();
            asientoA6.NOMBREESTUDIANTE = null;
            asientoA6.SECCION=null;
            asientoA6.CARNET=null;
            asientos.A6= asientoA6;


            
        function botonguardarclick() //esta funcionlle na el formulario de pelicula y lo almacena tomando el html y las variables
            {
                var peliculainstanciada = new _Pelicula(0,
                document.getElementById("Nombre").value,
                 document.getElementById("duracion").value,
                document.getElementById("genero").value,
               document.getElementById("idiomaaudio").value,
                document.getElementById("idiomasub").value,
              document.getElementById("sinopsis").value,
              document.getElementById("clasificacion").value,
              document.getElementById("precio").value,
            document.getElementById("hora").value,
            document.getElementById("fecha").value,
           document.getElementById("minuto").value,
         asientos,
          imagenenbase64,
         document.getElementById("estado").value
                );
                                                        
                peliculainstanciada.Guardar().then(function(response) { //almacena los datos y lanza un alert que indica un guardado exitoso
  console.log("Success!", response);
            alert("Guardado con exito");
              
}, function(error) {
  console.error("Failed!", error); // indica un fallo en el proceso
             alert("Error " + error);
           
});                                       
                                                        
            }
