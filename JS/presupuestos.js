let miBoton = document.getElementById("enviar")
let miForm = document.querySelector("form")
let producto = document.getElementById("producto");
let plazo = document.getElementById("plazo");
let extras = document.querySelectorAll(".extra");

miBoton.addEventListener("click",(evento)=>{
    evento.preventDefault();
    valido = validar();
    if(valido == true){
        miForm.submit();
    }

})
//funcion para validar los formularios
function validar(){
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let telefono = document.getElementById("telefono");
    let correo = document.getElementById("correo");
    let correcto = true

    if(nombre.value == null || nombre.value == ""){
         setError(nombre,"El campo nombre no puede estar en blanco");
        correcto = false;
    }else{
        let name_re = /^[a-zA-Z]{3,40}$/;
        if(!name_re.exec(nombre.value)){
        setError(nombre,"El campo nombre solo puede contener letras");
        correcto = false;
        }
        else{
        setSucces(nombre);
        }
    }
    if(apellidos.value == null || apellidos.value == ""){
        setError(apellidos,"El campo no puede quedar en blanco ");
        correcto=false;
    }else{
        let apellidos_re = /^[a-zA-Z]{4,60}$/;
        if(!apellidos_re.exec(apellidos.value)){
            setError(apellidos,"El campo apellidos solo puede contener letras");
            correcto = false;
        }else{
            setSucces(apellidos);
        }
    }
    let telefono_re = /^[0-9]{9}$/;
    if (telefono.value == null || telefono.value == "") {
        setError(telefono, "El campo teléfono no puede estar en blanco");
        correcto = false;
    } else if (!telefono_re.exec(telefono.value)) {
        setError(telefono, "Formato de teléfono inválido");
        correcto = false;
    } else {
        setSucces(telefono);
    }

    let email_re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (correo.value == null || correo.value == "") {
        setError(correo, "El campo correo no puede estar en blanco");
        correcto = false;
    } else if (!email_re.exec(correo.value)) {
        setError(correo, "Formato de correo inválido");
        correcto = false;
    } else {
        setSucces(correo);
    }
    if (correcto==true){
        return true;
    }else{
        
        return false;
    }
    
}


function setError(input, mensaje){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "cuadro error";
    small.innerText = mensaje;
}
function setSucces(input){
    const formControl = input.parentElement;
    formControl.className = "cuadro succes";
}
// Funcion para reestablecer los formularios
let resetButton = document.getElementById("borrar");
resetButton.addEventListener("click", resetForm);

function resetForm() {
  
    let formElements = document.querySelectorAll(".cuadro input, .cuadro textarea");

    formElements.forEach((element) => {
        
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            // Restablece el valor del campo
            element.value = "";

            // Elimina las clases de error y éxito
            removeClasses(element.parentElement);

            // Limpia el texto de los mensajes de error
            clearErrorMessage(element.parentElement);
        }
    });

    
    let privacidad = document.getElementById("privacidad");
    privacidad.checked = false;

    removeClasses(privacidad.parentElement);

    clearErrorMessage(privacidad.parentElement);
}

miBoton.addEventListener("click", (evento) => {
    evento.preventDefault();
    let valido = validar();
    if (valido) {
        miForm.submit();
    }
});

function removeClasses(element) {
    element.classList.remove("cuadro", "error", "succes");
}

function clearErrorMessage(element) {
    let small = element.querySelector("small");
    small.innerText = "";
}

miForm.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Evita que el formulario se envíe automáticamente
    let valido = validar(); // Validar los campos del formulario
    if (valido) {
        miForm.submit(); // Envía el formulario si la validación es exitosa
    }
});
