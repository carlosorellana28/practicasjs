// reqieromos los elementos de formulario

const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

// requerimos los alertas
const alertName= document.getElementById("alertName")
const alertEmail= document.getElementById("alertEmail")
const alertMensaje= document.getElementById("alertMensaje")

 // creamos las expreciones

const expUserName =  /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const expUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;



// creamos una constante de errores

const pintarMensajeExito = ()=>{
    alertMensaje.classList.remove("d-none");
    alertMensaje.textContent = "Mensaje Enviado Correctamente"
}


// creamos una funcion donde verificamos si hay errores
const pintarMensajeErrores = errores =>{
    errores.forEach(item => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent= item.msg;
    });
   
}



// creamos el evento para el formulario
formulario.addEventListener("submit", e =>{
    // cancelamos el evento por defecto del formulario
    e.preventDefault()
    alertMensaje.classList.add("d-none")
    const errores= [];
    
    // validar el formulario en js con expreciones regurares
   
   
    // verificamos las expreciones con los valores del usuario
    // el metodo trim() nos indica si hay espacios en blanco e n un elemento

    if(!expUserName.test(userName.value) || !userName.value.trim() || userName.value.length < 4){
        userName.classList.add("is-invalid")
        // empujamos un elemento en los errores como un alerta
            errores.push({
                tipo:alertName,
                msg:"formato de usuario no valido, ingrese solo letras"
            })
    }else{
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none")
    }
    if(!expUserEmail.test(userEmail.value) || !userEmail.value.trim()){       

        userEmail.classList.add("is-invalid")
        
         errores.push({
            tipo:alertEmail,
            msg:"formato de correo no valido, ingrese solo letras"
        })
    
    }else{
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none")
    }

    if(errores.length !==0){
        pintarMensajeErrores(errores)
        return
    }
    
        pintarMensajeExito()

    
   
    

})