var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var Python = document.getElementById("Python");
var Java = document.getElementById("Java");
var TypeScript = document.getElementById("TypeScript");
var PHP = document.getElementById("PHP");
var Cgato = document.getElementById("Cgato");
var Cmas = document.getElementById("Cmas");
var lenguaje = document.getElementById("lenguaje");
var nivel = document.getElementById("valor");
var anho = document.getElementsByName("tiempo");
var descripcion = document.getElementById("descripcion");
var mensaje = document.getElementById("mensaje");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    /*Validar el rut*/
    if (rut.value.length < 9) {
        alert("Ingrese un rut valido");
        rut.preventDefault();
    }
    else {
        if (rut.value.length == 9) {
            for (var index = 0; index < rut.value.length; index++) {
                var digito = rut.value[index];
                if (index == 7 && rut.value[index] == "-") {
                    index++;
                    if (rut.value[index] == "k" || rut.value[index] == "K" || (!isNaN(rut.value[index]))) {
                        break;
                    }
                }
                else if (index == 7 && rut.value[index] != "-") {
                    alert("Ingrese un RUT valido");
                    rut.preventDefault();
                }
                if (isNaN(digito)) {
                    alert("Ingrese un RUT valido");
                    rut.preventDefault();
                }
            }
        }
        else {
            for (var index = 0; index < rut.value.length; index++) {
                var digito = rut.value[index];
                if (index == 8 && rut.value[index] == "-") {
                    index++;
                    if (rut.value[index] == "k" || rut.value[index] == "K" || (!isNaN(rut.value[index]))) {
                        break;
                    }
                }
                else if (index == 8 && rut.value[index] != "-") {
                    alert("Ingrese un RUT valido");
                    rut.preventDefault();
                }
                if (isNaN(digito)) {
                    alert("Ingrese un RUT valido");
                    rut.preventDefault();
                }
            }
        }
    }
    /*validar teléfono */
    if (telefono.value.length != 9 || telefono.value[0] != 9) {
        alert("Ingrese 9 digitos en teléfono móvil iniciando con el número 9");
        telefono.preventDefault();
    }
    /*validar checkbox de lenguaje */
    if ((Python.checked == false) && (Java.checked == false) && (PHP.checked == false) && (TypeScript.checked == false) && (Cgato.checked == false) && (Cmas.checked == false)) {
        alert("Seleccione al menos un lenguaje de programación");
        lenguaje.preventDefault();
    }
    /*validar radio de años */
    if ((uno.checked == false) && (dos.checked == false) && (tres.checked == false) && (cuatro.checked == false) && (cinco.checked == false)) {
        alert("Seleccione su año de experiencia");
        anho.preventDefault();
    }
    /*validar largo de descripción */
    if (descripcion.value.length > 300) {
        alert("Su descripción debe contener a lo más 300 caracteres");
        descripcion.preventDefault();
    }
    if (onclick)
        formulario.style.display = "none";
    mensaje.style.display = "block";
    mensaje.innerHTML = "Hemos  recibido  sus  datos,  pronto  nos estaremos comunicando con usted";
    mensaje.style.color = "blue";
});
/*función para el boton limpiar */
function limpiarDatos() {
    nombre.value = "";
    apellidos.value = "";
    rut.value = "";
    correo.value = "";
    telefono.value = "";
    Python.checked = false;
    Java.checked = false;
    TypeScript.checked = false;
    PHP.checked = false;
    Cgato.checked = false;
    Cmas.checked = false;
    nivel.value = 5;
    uno.checked = false;
    dos.checked = false;
    tres.checked = false;
    cuatro.checked = false;
    cinco.checked = false;
    descripcion.value = "";
}
