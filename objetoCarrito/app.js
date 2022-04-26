/* requerimos los elementos a utilizar para proceder con la programacion */

const carrito = document.getElementById("carrito");
/* creamos el fracmento para rellenerlo */
 const fracment = document.createDocumentFragment();
/* extraemos los botones para capturar el evento */
const btones = document.querySelectorAll(".card .btn");
/* requerimos el template para poder ingresar los valores */
const template = document.getElementById("template");

/* Se crea el objeto para rellenarlos  */

const objetoCarrito={};

/* funcion para relenar el objeto */
 const rellenarObjeto = (e) => {
    console.log(e.target.dataset.fruta);
    const elemento = e.target.dataset;

    // se crea el objeto

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    };

    // verificamos si ya existe el objeto
    if(objetoCarrito.hasOwnProperty(producto.titulo)){
        producto.cantidad = objetoCarrito[producto.titulo].cantidad + 1;
    }

    objetoCarrito[producto.titulo]= producto;


    console.log(objetoCarrito)

    pintarCarrito();


 };

//  se crea la funcion de pintar carrito en la lista

const pintarCarrito =()=>{
        carrito.textContent=""

    // recorremos el objeto para extraer los valores

    Object.values(objetoCarrito).forEach((item) => {
        // clonamos el elemento
        const clon = template.content.firstElementChild.cloneNode(true);
        clon.querySelector(".lead").textContent= item.titulo;
        clon.querySelector(".badge").textContent= item.cantidad;

        fracment.appendChild(clon);

        // console.log(clon);


    })
    carrito.appendChild(fracment);


}

 /* creamos el evento de cada boton como es una coleccion lo hacemos con foreach */

 btones.forEach((btn) => btn.addEventListener("click",rellenarObjeto));
