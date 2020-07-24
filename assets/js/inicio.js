var usuario = document.getElementById("UsuarioNombre");
var contraseña = document.getElementById("ContraseñaUser");
var btnLogin = document.getElementById("form");
var NombreAdmin, ContraAdmin
NombreAdmin = 'administrador';
ContraAdmin = '12345';



btnLogin.addEventListener ('submit', function(event){
    event.preventDefault();
   
     if (usuario.value === NombreAdmin && contraseña.value === ContraAdmin) {
      alert("Sesion iniciada como Administrador");
      location.href="AdministrarCitas.html";
     } 
      else if (usuario.value != NombreAdmin){
        alert("Sesion iniciada como cliente");
        location.href="index.html";
      }
     else {
       alert("Datos Incorrectos al iniciar como Administrador");
     }
    
    });
    
   