// // capturar eventos individuales de elementos anidados

const padre = document.querySelector(".padre");
const hijo = document.querySelector(".hijo");
const nieto = document.querySelector(".nieto")
// // requerimos el formulario
// const formulario = document.querySelector("form")

// // evento del elemento padre
// padre.addEventListener("click" , ()=>{
//     console.log("diste click en el padre");
// })
// hijo.addEventListener("click" , ()=>{
//     console.log("diste click en el hijo");
// })
// nieto.addEventListener("click" , ()=>{
//     console.log("diste click en el nieto");
    
// })

/* ============================ */
    /*  capturar eventos utilizando el data  y matches*/
/* ============================ */
// padre.addEventListener("click", (e)=>{
//     // con el metodo matches
//     const elemento = e.target.matches(".padre")
//     console.log(elemento, "con el metodo matches");
// })
padre.addEventListener("click", (e)=>{
    // con la propiedad data
    const elemento = e.target.dataset.div

    if(elemento === "divPadre"){
        console.log(`este el el elemento ${elemento}`)
    }
})





/* ============================ */

// para evitar la propagacion de evento podemos usar la propiedad stopPropagation
/* EJEMPLO */
const padre1 = document.querySelector(".padre1");
const hijo1 = document.querySelector(".hijo1");
const nieto1 = document.querySelector(".nieto1")

nieto1.addEventListener("click" , (e)=>{
    // utilizamos la propiedad stopPropagation para evitar la propagacion de eventos
    e.stopPropagation
    console.log("este evento es desde el nieto pero evitando la propagacion");
})


formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const elemento = entrada.value
    const id = entrada.id
    console.log(`el contenido del elemento es:  ${elemento} y el id es: ${id} `);
    console.log("Me diste click en el formulario");
})
