// creamos funcion  constructora para poder crear un objeto 

// function Persona(nombre){

//     // inicialiamos una variable
//     this.nombre=nombre;

//     // creamos el metodo para saludar 
//     this.saludar= function(){
//         return `${this.nombre} dice hola como estas`;
//     }

//     // creamos otro metodo quwe saluda en ingles
//     /* this.saluarIngles= function(){
//         return `${this.nombre} says hi!`
//     } */

// }


// /* para evitar que todos los  objetos lleven todos los metodos podemos crear prototipos EJEMPLO */

// Persona.prototype.saluarIngles= function(){
//     return `${this.nombre} says hi!`
// }


// /* instanciamos el objeto persona  */
// const juanito = new Persona("juanito");
// const carlos = new Persona("carlos");
// const Eduardo = new Persona("Eduardo");

// // console.log(carlos.saludar())
// // console.log(juanito.saludar())


/* 
*ahora creamos la  clase persona pero con la palabra reservada class
*que nos crea una funcion constructora 

*/
class Persona{
    // instanciamos el constructor con sus respectivo parametros
    constructor(nombre){
        this.nombre= nombre;
    }

    // metodo para saludar
    saludar(){
        console.log(`${this.nombre} dice hola`);
    }




}

// instanciamos la clase persona
const orellana = new Persona("orellana");
// lamamos la clase persona
orellana.saludar();
orellana.saludarIngles = function(){
    console.log("hello");
}












