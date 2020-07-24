var nombre = document.getElementById("txtNombres");
var cedula = document.getElementById("txtCedula");
 var fecha = document.getElementById("txtFecha");
 var hora = document.getElementById("txtHora");
var ciudad =  document.getElementById("txtCiudad");
 var mascota = document.getElementById("txtMascota");
 var btnEnviar = document.getElementById("validar");




 
btnEnviar.addEventListener ('submit', function(event){
    event.preventDefault();
    ReservarTurno();
    
  
    
    });
    

function ReservarTurno() {
    if (nombre.value === null || nombre.value === "")
    {
       alert("El campo Nombres esta vacio");
        return false;
    }
    if (cedula.value === null || cedula.value === "")
     {
        alert("El campo Cedula esta vacio");
        return false;
     } 
    if (fecha.value === null || fecha.value === "")
    {
        alert("El campo fecha esta vacio");
        return false;
    }
    if (hora.value === null || hora.value === "")
    {
        alert("El campo hora esta vacio");
        return false;
    } 
    if (ciudad.value === null || ciudad.value === "")
    {
        alert("El campo Ciudad esta vacio");
        return false;
    } 
    if (mascota.value === null || mascota.value === "")
    {
        alert("El campo tipo de mascota esta vacio");
        return false;
    } 
    else{
        alert("Enviado Correctamente");
        LimpiarDatos();
    
    }  
    
}





function LimpiarDatos() {
    document.getElementById("txtNombres").value = "";
    document.getElementById("txtCedula").value="";
   document.getElementById("txtFecha").value="";
   document.getElementById("txtHora").value="";
   document.getElementById("txtCiudad").value= "";
   document.getElementById("txtMascota").value="";
    
}




