/* se crean los array de objetos para proceder a recorrerlos */

const users=[
    {id: 1, nombre: "carlos", age: 25},
    {id: 2, nombre: "Eduardo", age: 50},
    {id: 3, nombre: "Orellana", age: 45},
    {id: 4, nombre: "Rapalo", age: 55},
    {id: 5, nombre: "Gutierrez", age: 30}
];
const users2=[
    {id: 1, nombre: "jose", age: 25},
    {id: 2, nombre: "mario", age: 50},
    {id: 3, nombre: "paty", age: 45},
    {id: 4, nombre: "marcelina", age: 55},
    {id: 5, nombre: "josefina", age: 30}
];

/* generamos el otro array inmutable */
const names = users.map((user)=> console.log(user));
const namesUser = users.map((user) => {
   return (user.id)
});

console.log("=====================")
console.log(namesUser)

/* filtramos los datos de un array */

const arrayFilter = users.filter(user => user.nombre === "Gutierrez");
console.log(arrayFilter);

/* busamos el primer elemento que concuerde  del array con el metodo find */

const userFind =  users.find((user)=> user.id === 1);
console.log(userFind)

/* verificar si existe un elemento en el objeto o array */

const userExist = users.some((usuario) =>  usuario.nombre === "Orellana");

if(userExist){
    console.log("existe")
}
console.log(userExist)

/* DEVOLVE la copia DE UN ELEMENTO  ARRAY*/

const copiaArray = users.slice(0,3);
console.log(copiaArray);

const newObject= users.concat(users2);
console.log(newObject)