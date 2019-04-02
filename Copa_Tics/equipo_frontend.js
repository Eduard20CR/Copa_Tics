        class _Equipo {
   constructor(_id, 
    NOMBRE,
    COMPLETO,
    IMAGEN,
    JUGADORES,
    SELECTDEPARTIDO
            ) {
       this._id=_id;
       this.NOMBRE =NOMBRE;
       this.COMPLETO =COMPLETO;
       this.IMAGEN =IMAGEN;
       this.JUGADORES =JUGADORES;
       this.SELECTDEPARTIDO = SELECTDEPARTIDO;

   }
Guardar() {
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/nuevoequipo');
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
xhr.open('POST', 'http://localhost:8080/api/modificaequipo');
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
xhr.open('POST', 'http://localhost:8080/api/eliminaequipo');
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
xhr.open('POST', 'http://localhost:8080/api/Seleccionartodos');
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
xhr.open('POST', 'http://localhost:8080/api/seleccionarequipoporfecha');
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
xhr.open('POST', 'http://localhost:8080/api/seleccionarequipoporid');
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
xhr.open('POST', 'http://localhost:8080/api/seleccionarequipopornombre');
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
xhr.open('POST','http://localhost:8080/api/seleccionaequipo');
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
    
    
            
            
           


            
        function botonguardarclick() //esta funcionlle na el formulario de pelicula y lo almacena tomando el html y las variables
            {
              var jugador = new Object();
            var jugadorA1 = new Object();
            jugadorA1.NOMBREESTUDIANTE = document.getElementById("nombre_jugador1").value;
            jugadorA1.SECCION=document.getElementById("seccion1").value;
            jugadorA1.ESPECIALIDAD=document.getElementById("epecialidad1").value;
            jugador.A1= jugadorA1;
            
             var jugadorA2 = new Object();
            jugadorA2.NOMBREESTUDIANTE = document.getElementById("nombre_jugador2").value;
            jugadorA2.SECCION=document.getElementById("seccion2").value;
            jugadorA2.ESPECIALIDAD=document.getElementById("epecialidad2").value;
            jugador.A2= jugadorA2;

            var jugadorA3 = new Object();
            jugadorA3.NOMBREESTUDIANTE = document.getElementById("nombre_jugador3").value;
            jugadorA3.SECCION=document.getElementById("seccion3").value;
            jugadorA3.ESPECIALIDAD=document.getElementById("epecialidad3").value;
            jugador.A3= jugadorA3;

            var jugadorA4 = new Object();
            jugadorA4.NOMBREESTUDIANTE = document.getElementById("nombre_jugador4").value;
            jugadorA4.SECCION=document.getElementById("seccion4").value;
            jugadorA4.ESPECIALIDAD=document.getElementById("epecialidad4").value;
            jugador.A4= jugadorA4;

            var jugadorA5 = new Object();
            jugadorA5.NOMBREESTUDIANTE = document.getElementById("nombre_jugador5").value;
            jugadorA5.SECCION=document.getElementById("seccion5").value;
            jugadorA5.ESPECIALIDAD=document.getElementById("epecialidad5").value;
            jugador.A5= jugadorA5;

            var jugadorA6 = new Object();
            jugadorA6.NOMBREESTUDIANTE = document.getElementById("nombre_jugador6").value;
            jugadorA6.SECCION=document.getElementById("seccion6").value;
            jugadorA6.ESPECIALIDAD=document.getElementById("epecialidad6").value;
            jugador.A6= jugadorA6;

            var jugadorA7 = new Object();
            jugadorA7.NOMBREESTUDIANTE = document.getElementById("nombre_jugador7").value;
            jugadorA7.SECCION=document.getElementById("seccion7").value;
            jugadorA7.ESPECIALIDAD=document.getElementById("epecialidad7").value;
            jugador.A7= jugadorA7;

            var jugadorA8 = new Object();
            jugadorA8.NOMBREESTUDIANTE = document.getElementById("nombre_jugador8").value;
            jugadorA8.SECCION=document.getElementById("seccion8").value;
            jugadorA8.ESPECIALIDAD=document.getElementById("epecialidad8").value;
            jugador.A8= jugadorA8;
                var equipoinstanciada = new _Equipo(0,
                document.getElementById("nombre").value,
                document.getElementById("completo").value,
                imagenenbase64,
                jugador
                );
                equipoinstanciada.Guardar().then(function(response) { //almacena los datos y lanza un alert que indica un guardado exitoso
  console.log("Success!", response);
            alert("Guardado con exito");
              
}, function(error) {
  console.error("Failed!", error); // indica un fallo en el proceso
             alert("Error " + error);
           
});                                       
                                                        
            }
