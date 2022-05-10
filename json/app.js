// ? OBJETOS CON EL FORMATO JSON
/* 
  *para crear objetos en json tomamos en cuenta lo siguiente
  
  => tienen que ir encapsulados en llabes  ejemplo: {...}
  => esta compuesto por llave y valor
  => las llaves y los valores tienen que ir entre comillas dobles a ecepto de los valores que sean numeros
  => pueden cont entener objetos o arreglos dentro de la misma 
  => tienen que llebar coma al final de cada linea a ecepto de la ultima 


*/
/*  
*EJEMPLO*
*/
 

const cliente={
    "firstName": "carlos",
    "lastName": "orellana",
    "age": 30,
    "city":{
        "nameCity": "Trinidad, Santa Barbara",
        "street": "calle principal Trinidad Santa Barbara"
    }

}
console.log(cliente)

// para comvertir un objeto js a json tenemos la funcion  json.stringify()

console.log(JSON.stringify(cliente))


/* 
        *ESTE CODIGO ES PARA CONSUMIR UNA APPI CON FETCH
        *Y EXTRAER UN JSON 
*/
// consumir apy con fetch

/* 
const lista = document.querySelector(".lista");
const fracment = document.createDocumentFragment();

fetch('https://jsonplaceholder.typicode.com/posts')
// luego los extraemos para poder utilizarlos
.then(respuesta => {
    //   convertimos la resuesta a json
    return respuesta.json();
})
.then(data => {
    
    data.forEach(user => {
        const elemento = document.createElement("li")
        elemento.textContent = `id: ${user.id}_____Titulo:  ${user.title}`;
        fracment.appendChild(elemento)
    });
    // console.log(elementos)
    
    lista.appendChild(fracment);
    console.log(lista);
}) */

// ? codigo desde el ordenador 
/* 
        *ESTE CODIGO ES PARA CONSUMIR UNA APPI CON FETCH
        *Y EXTRAER UN JSON desde local
*/


const list = document.getElementById("usuarios");
// creamos el fracmento
const fracment = document.createDocumentFragment();


fetch('http://127.0.0.1:5501/json/clientes.json')
    .then(response =>{
        return response.json();
    })
    .then(users =>{

        users.forEach(user => {
            // creamos el item de la lista 
            const item = document.createElement("li");
            const id = document.createElement("b");
            const city = document.createElement("spam");
            const p = document.createElement("p");
            item.className="items";
            p.className="parrafo"
            city.className="city";
            id.textContent= user.id;
            p.textContent= `${user.firstName} ${user.lastName}`;
            city.textContent= user["city"].nameCity;
            item.appendChild(id)
            item.appendChild(p)
            item.appendChild(city)
        /* CREAMOS UN EVENO PARA PINTAR EL ELEMENTO QUE HACEMOS CLINCK */
        
        
        
        fracment.appendChild(item)
        
    });
    
    list.appendChild(fracment);
})


    