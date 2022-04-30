// reqieromos los elementos de formulario

const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");


// creamos el evento para el formulario
formulario.addEventListener("submit", e =>{
    // cancelamos el evento por defecto del formulario
    e.preventDefault()

    // validar el formulario en js con expreciones regurares
    // creamos las expreciones

    const expUserName =  /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const expUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    // verificamos las expreciones con los valores del usuario

    if(!expUserName.test(userName.value)){
       return console.log("favor ingresar nombre de usuario valido");

    }
    if(!expUserEmail.test(userEmail.value)){
        return console.log("favor ingresar direccion de correo valida");

    }


    console.log("formulario enviado correctamente")
    
    // console.log(userName.value);
    // console.log(userEmail.value);
    

})