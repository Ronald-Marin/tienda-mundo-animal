function aprobar () {
    alert ("La cita ha sido aceptada");
    }
function rechazar () {
    var mensaje = confirm("¿Estas seguro de rechazar la cita medica?");
    if (mensaje) {
    alert("Cita medica Rechazada");
    }
    else {
    alert("No se rechazo la cita medica");
    }
 }
function editar(){
    var fecha = prompt("Ingresa la nueva fecha", "");
    var hora = prompt("ingresa la hora", "");
if (fecha && hora!= null){
alert("La fecha y hora se han modificado al " + fecha +""+hora);
}
else {
alert("No has ingresado los datos");
}
    
}
