const items = document.querySelector(".items");
const items2 = document.querySelector(".items2");
const fracment1 = document.createDocumentFragment();
const fracment2 = document.createDocumentFragment();

// alert("esto es desde array inmutables");

const users= [
    {name:"Carlos", age: 30},
    {name:"Orellana", age: 25},
    {name:"Eduardo", age: 15}
];
// recorremos el array con map

const names= users.map((user, age) => user.name);
const ages=users.map((user, age) => user.age);
users.forEach((nombre,edadu)=> {
    const item=document.createElement("li");
    const b=document.createElement("b");
    const edad=document.createElement("b");
    const nombreitem=document.createElement("span");
    const edaditem=document.createElement("b");
    b.textContent="Nombre: ";
    nombreitem.textContent =nombre.name;
    edad.textContent="Edad: ";
    edaditem.textContent= edadu.age;

    item.appendChild(b);
    item.appendChild(nombreitem);
    item.appendChild(edad);
    item.appendChild(edaditem);

    fracment1.appendChild(item);


});

items.appendChild(fracment1);
console.log(items);






const numeros =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const newNumeros=numeros.map((numero)=> numero*2 );

newNumeros.push(21);
console.log(numeros);

console.log(newNumeros);


