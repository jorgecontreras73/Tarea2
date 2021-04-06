let nombre:any=document.getElementById("nombre");
let apellidos:any=document.getElementById("apellidos");
let rut:any=document.getElementById("rut");
let correo:any=document.getElementById("correo");
let telefono:any=document.getElementById("telefono");

let Python:any=document.getElementById("Python");
let Java:any=document.getElementById("Java");
let TypeScript:any=document.getElementById("TypeScript");
let PHP:any=document.getElementById("PHP");
let Cgato:any=document.getElementById("Cgato");
let Cmas:any=document.getElementById("Cmas");

let lenguaje:any=document.getElementById("lenguaje");
let nivel:any=document.getElementById("valor");
let anho:any=document.getElementsByName("tiempo")
let descripcion:any=document.getElementById("descripcion");
let mensaje:any=document.getElementById("mensaje");

let uno:any=document.getElementById("1");
let dos:any=document.getElementById("2");
let tres:any=document.getElementById("3");
let cuatro:any=document.getElementById("4");
let cinco:any=document.getElementById("5");

let formulario=document.getElementById("formulario");
formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    

    /*Validar el rut*/ 
    if (rut.value.length < 9) {
        alert("Ingrese un rut valido")
        rut.preventDefault();
    } else{
        if (rut.value.length == 9){
            for (let index = 0; index < rut.value.length; index++) {
                let digito = rut.value[index];
                if (index == 7 && rut.value[index] == "-") {
                    index++;
                    if (rut.value[index] == "k" || rut.value[index] == "K" || (!isNaN(rut.value[index])) ){
                        break;
                    }
                } else if(index == 7 && rut.value[index] != "-"){
                    alert("Ingrese un RUT valido")
                    rut.preventDefault();
                }
                if (isNaN(digito)) {
                    alert("Ingrese un RUT valido")
                    rut.preventDefault();
                }
            }
        } else{
            for (let index = 0; index < rut.value.length; index++) {
                let digito = rut.value[index];
                if (index == 8 && rut.value[index] == "-") {
                    index++;
                    if (rut.value[index] == "k" || rut.value[index] == "K" || (!isNaN(rut.value[index])) ){
                        break;
                    }
                } else if(index == 8 && rut.value[index] != "-"){
                    alert("Ingrese un RUT valido")
                    rut.preventDefault();
                }
                if (isNaN(digito)) {
                    alert("Ingrese un RUT valido")
                    rut.preventDefault();
                }
            }
        }
    }
    /*validar teléfono */
    if (telefono.value.length != 9 || telefono.value[0] != 9){
        alert("Ingrese 9 digitos en teléfono móvil iniciando con el número 9");
        telefono.preventDefault();
        
    }
    /*validar checkbox de lenguaje */
    if ( (Python.checked == false) && (Java.checked == false) && (PHP.checked == false) && (TypeScript.checked == false) && (Cgato.checked == false) && (Cmas.checked == false)){
        alert("Seleccione al menos un lenguaje de programación")
        lenguaje.preventDefault();
    }

    /*validar radio de años */
    if ( (uno.checked == false) && (dos.checked == false) && (tres.checked == false) && (cuatro.checked == false) && (cinco.checked == false) ){
        alert("Seleccione su año de experiencia")
        anho.preventDefault();
    }    
    /*validar largo de descripción */
    if(descripcion.value.length > 300){
        alert("Su descripción debe contener a lo más 300 caracteres");
        descripcion.preventDefault();
    }
    if(onclick)
    formulario.style.display="none";
    mensaje.style.display="block";
    mensaje.innerHTML="Hemos  recibido  sus  datos,  pronto  nos estaremos comunicando con usted";
    mensaje.style.color="blue";

});
/*función para el boton limpiar */
function limpiarDatos(){
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
