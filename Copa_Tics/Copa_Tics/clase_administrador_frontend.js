     
            //clase
        class _Usuario {
            //objetos
   constructor(
    _id, 
    NOMBRE,
    CLAVE,
    EMAIL,
    IMAGEN,
    ESTADO,
    SALT,

            ) {
       this._id=_id;
    this.NOMBRE =NOMBRE;
    this.CLAVE =CLAVE;
    this.EMAIL =EMAIL;
    this.IMAGEN =IMAGEN;
    this.ESTADO=ESTADO;
    this.SALT =SALT;
   }
   //metodo de guardar
Guardar() {
    //tomas los datos de this.
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           //toman los datos que pusiste en el formulario y los manda a la base de datos, pero por medio del 
           //nuevoadm que esta en routes
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://cinema-cedes2.herokuapp.com/api/nuevoadm');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {//si todo sale bien dara un aviso que todo salio bien
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
    


 Login() {
  
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://cinema-cedes2.herokuapp.com/api/loginadm');
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
xhr.open('POST', 'http://localhost:8080/api/todoslosadministradores');
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
              //aqui toma todos los datos de el html y los mete en la clase
                var administradorinstanciada = new _Usuario(0,
                document.getElementById("nombre").value,
                document.getElementById("password").value,
                document.getElementById("email").value,
                imagenenbase64,1,""
                
                    
                );
                  //aqui llama al metodo de la clase _Administrador para guardar los datos y si sale exitoso
                  //te envia un alert
                administradorinstanciada.Guardar().then(function(response) { 
  console.log("Success!", response);
            alert("Guardado con exito");
            
              //si hubo algun error en el codigo el te lo indica
}, function(error) {
  console.error("Failed!", error); // indica un fallo en el proceso
             alert("Error " + error);
           
});                                       
                                                        
            }

        function botonlogin() //esta funcionlle na el formulario de pelicula y lo almacena tomando el html y las variables
            {
                var administradorinstanciada = new _Usuario(0,0,
                document.getElementById("password").value,
                document.getElementById("email").value,1," "
                    
                );
                                                        
                administradorinstanciada.Login().then(function(response) { //almacena los datos y lanza un alert que indica un guardado exitoso
                  alert("Hola bro");
                  //guarda los datos en una cookie llamada Usuariolog y luego te manda a la pestaña de menu, para que no inicies 
                  //sesion denuevo
                localStorage.setItem("Usuariolog",JSON.stringify(response));

                location.href="menu.html";
}, function(error) {
  console.error("Failed!", error); // indica un fallo en el proceso
             alert("Error " + error);
           
});                                       
                                                        
            }   


                    function botonlogout() //esta funcionlle na el formulario de pelicula y lo almacena tomando el html y las variables
            {
                var administradorinstanciada = new _Usuario(0,0,
                0,
                0,1," "
                    
                );
                                                        
                administradorinstanciada.Login().then(function(response) { //almacena los datos y lanza un alert que indica un guardado exitoso
                  alert("Hola bro");
                localStorage.setItem("Usuariolog",JSON.stringify(response));

                location.href="menu.html";
}, function(error) {
  console.error("Failed!", error); // indica un fallo en el proceso
             alert("Error " + error);
           
});                                       
                                                        
            }    