// const boton = document.querySelector(".enviar");
// const elemento =document.querySelector(".contenedor");

// // numero random 
// let aleatorio = ()=>{
//     let r = Math.floor(Math.random()*(10-1)+1);
//     return r
// }

// function mensajeCorrecto(){
//     const parrafo = document.createElement("p");

//     parrafo.textContent = "has asertado correctamente 'FELICIDADES!!!'";

//     elemento.appendChild(parrafo)


// }
// function mensajeError(){
//     const parrafo = document.createElement("p");

//     parrafo.textContent = "has insertado numero incorrecto";

//     elemento.appendChild(parrafo)


// }


// boton.addEventListener("click", (e) =>{
//     // const hijo = e.target
//     let entrada = document.querySelector(".entrada");
//     // numero = parseInt(entrada);
//     let numero= parseInt( entrada.value);
    
//     if(aleatorio()=== numero ){
//         mensajeCorrecto();
//     }
//     else{
//         mensajeError();
//     }


//     console.log(numero);
//     console.log(aleatorio())

// });

// carrito de compras


// const frutas = [];

// const fruta = prompt("que fruta desea comprar");

// frutas.push(fruta);



// while(confirm("desea agregar una nueva fruta")){

//         const fruta = prompt("que fruta desea comprar");

//         frutas.push(fruta);

// }
// console.log("compraste");

// for (const fruta of frutas) {
//     console.log(fruta);
    
// }

// funciones anonimas 

// const aleatorio=function(min,max){
//     return Math.floor(Math.random()*(max-min)+min);
// 
// console.log(aleatorio(10,21));

/* OBJETOS */

// const gato={
//     nombre: "firulais",
//     enemigo: ["perro", "agua"],
//     hermanos: ["gaty","misi","misingo","tilin"],
//     comer: function (comida){
//         console.log(`el gato ${this.nombre} esta comiendo ${comida}`)
//     },
//     listarEnemigos(){
//         this.enemigo.forEach((item)=> console.log(item))
//     },
//     listarHermanos(){
//         this.hermanos.forEach((item)=> console.log(item))
//     }

// };

// gato.comer("pescado");
// gato.listarEnemigos();
// gato.listarHermanos();



// /* DESTRUCTURING OBJETOS */
// // array

// const nombres=["carlos","Eduardo","Orellana","Rapalo"];
//     // console.log(nombre.forEach(item) => console.log(item))
// const[nombre1]=nombres;
// console.log(nombre1);
// const {nombre,enemigo, hermanos} = gato;
// console.log(enemigo[0]);



// console.log(gato["enemigo"][0]);
// console.log(gato["enemigo"][1]);


// const documento = document.querySelector(".contenedor").textContent;
// console.log(documento)

// documento.style.Color = "#ff0000";

const btn = document.querySelectorAll(".btn");

btn.forEach((botoncito)=>{
    botoncito.addEventListener("click", (e) => {

        let elemento = e.target;
        console.log(elemento);
    
        botoncito.style.backgroundColor = "red";
        botoncito.style.color = "blue";
        botoncito.style.borderRadius= "50px";
        botoncito.style.border= "none";
        botoncito.style.width= "100px";
        botoncito.style.height= "50px";
        botoncito.style.fontSize="18px";
        botoncito.style.fontWeight="800"
    
    
    
    });

})



// console.log(btn);

// const agregar = document.querySelector(".enviar");

// agregar.addEventListener("click",(e)=>{
    
//     let content = e.target;
    
//     const entrada = document.querySelector(".entrada");
//     let texto=entrada.value;
//     entrada.value="Tania Mi Amor";
//     entrada.style.color="#E62666";
//     entrada.style.fontSize="20px";
//     entrada.style.fontWeight="700";
//     entrada.style.fontFamily="arial";
//     entrada.style.textTransform="uppercase";
//     texto.style.boxShadow="2px 4px 5px #000000";


//     // console.log(content)

// })

const inputColor = document.getElementById("color");
const btnColor = document.getElementById("btnColor");
const textColor = document.getElementById("textColor");
const cardColor = document.getElementById("cardColor");

btnColor.addEventListener("click", ()=>{
    
    textColor.textContent = inputColor.value;
    textColor.style.color=inputColor.value;
    
    cardColor.style.backgroundColor = inputColor.value;
    
    console.log(inputColor.value);
})

const lista=document.querySelector("#lista");

const arrayPaises=["honduras","venezuela","peru","bolivia"];

arrayPaises.forEach(pais => {
    const li = document.createElement("li");
    li.textContent= `${pais}`;
    lista.appendChild(li);
})

console.log(lista)