// requerimos  la lista desordenada que esta en el dom 
const lista= document.getElementById("lista")


// creamos el array de objetos de paises la cual mostraremos 
const paises= {
        Honduras: "es un pais muy violento",
        Salvador: "estan terminando con la violencia",
        EEUU:" son malos ",
        china: "son genios",
        Rusia: "Esta en Guerra",
        japon: "Esta en Guerra",
        corea: "Esta en Guerra",
        italia: "Esta en Guerra",
};

// recorremos el array de paises

/* FORMA NUMERO 1 DE HACERLO 
    
*en esta forma se corre el riesgo de sufrir un problema de recargar la pagina por cada elemento que se va creando
*/

for(const clave in paises){
    const item = document.createElement("li");
    const nombrePais = document.createElement("h1");
    const descricion = document.createElement("p");
    descricion.className= "desc"
    nombrePais.textContent=clave;
    item.className="item";
    descricion.textContent= paises[clave];
    item.appendChild(nombrePais);
    item.appendChild(descricion);
    
    
    lista.appendChild(item);
}




console.log(lista);




// creando una lista utilizando fracmentos

const lista2 = document.querySelector(".lista2");

// creamos un array 

const listaD = ["lines","martes","miercoles","jueves","viernes","Sabado","domingo"];

// se crea un fracmento 
const fracment= document.createDocumentFragment();


// rexorremos el array

listaD.forEach((dia)=>{
    // creamos el nodo
    const newNode = document.createElement("li");
    
    newNode.textContent = dia;

    fracment.appendChild(newNode)

})

lista2.appendChild(fracment);

// insertar a la inversa
listaD.forEach((dia)=>{
    // creamos el nodo
    const newNode = document.createElement("li");
    
    newNode.textContent = dia;

    const refPrimerNodo= fracment.firstChild

    fracment.insertBefore(newNode, refPrimerNodo);



})
lista2.appendChild(fracment);

console.log(lista2);


const ul =document.querySelector(".ul");
let template="";

listaD.forEach(dia=>{
    // colocamos el mas igual para concatenar
    template +=`
        <li class="itemLista">
            <b>Dia: </b>
            <span class="txtdia"> ${dia}</span>
        
        </li>
    `;
})

ul.innerHTML= template;

// en este  elemento creamos de la mejor manera posible un fracmento

const lista3=document.querySelector(".lista3");
const fracmento = document.createDocumentFragment();
// requerimos el fracmento
const litemplate= document.querySelector(".litemplate");


const click=(e)=> console.log("me distes click", e.target);

// creamos el arreglo 

const nombrespersona=["carlos","eduardo","orellana","rapalo"];

nombrespersona.forEach(persona=>{
    // clonamos el nodo

    const clon = litemplate.content.firstElementChild.cloneNode(true);

    // reemplazamos en el span

    clon.querySelector("span").textContent= persona;

    // para que ell evento funcione devemos agregar la propiedad firstElementChild al clonarlo 
    clon.addEventListener("click", click);

    //  se agrega el clon al fracmento 

    fracmento.appendChild(clon);

})

//  mostramos el gfracmento al dom

lista3.appendChild(fracmento);


