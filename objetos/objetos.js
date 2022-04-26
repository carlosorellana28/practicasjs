const template = document.querySelector(".template");
const items = document.querySelector(".items");
const botones = document.querySelectorAll(".card .btn");
const fracmet = document.createDocumentFragment();


// creamos el objeto bacio para rellenarlo con la funcion agregarProducto

const objetoProducto = {};

// funcion para agregar el producto al objeto
 const agregarProducto = (e) =>{
    // console.log(e.target.dataset.producto)
    // console.log(e.target.dataset.id)
    const nombreProducto = e.target.dataset.producto;
    const id = e.target.dataset.id

    const producto= {
        nombre: nombreProducto,
        id: id,
        cantidad: 1
    };


    // verificar si existe el objeto

    if(objetoProducto.hasOwnProperty(producto.nombre)){
        /* al objeto producto de la propiedad cantidad le aumentamos uno en el campo nombre del objetoProducto 
        *** objeto producto esta anidado en el objetoProducto
        */
        producto.cantidad = objetoProducto[producto.nombre].cantidad + 1;
    }

    // agregamos el producto al objeto producto
    objetoProducto[producto.nombre]= producto;
    // console.log(objetoProducto);

    mostrarProducto();


 }

//  ya que tenemos el objeto rellenado procedemos a mostrar en el documento html el resultado

/* FUNCION PARA MOSTRAR EL RESULTADO */

const mostrarProducto = ()=>{
    // inicializa en la lista  basio para que pinte solo una vez

    items.textContent = "";

    // recorremos los valores del objeto 

    Object.values(objetoProducto).forEach((item) => {
        // se clona el template
         const clone = template.content.firstElementChild.cloneNode(true);
         clone.querySelector(".id").textContent = item.id;
         clone.querySelector(".producto").textContent = item.nombre;
         clone.querySelector(".cantidad").textContent = item.cantidad;

        /* lo agregamos al fracmento */

        fracmet.appendChild(clone);

    });
    
    items.appendChild(fracmet);
    console.log(items)







}





botones.forEach((boton)=>boton.addEventListener("click", agregarProducto));
