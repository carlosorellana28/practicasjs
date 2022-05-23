const cardDinamicas = document.getElementById("card-dinamicas");
const template = document.getElementById("template");
const fracment = document.createDocumentFragment();


// verificamos que el dom este totalmente cargado

document.addEventListener("DOMContentLoaded", ()=>{
    // ejecutamos las funciones

    fetchData();
 

})

 const fetchData =  async ()=>{
    try {
      loadingData(false)
        
      const res = await fetch("https://rickandmortyapi.com/api/character")
      const data = await res.json()

      mostrarData(data);

    //   loadingData(true)

    } catch (error) {
        
        
    }finally{
        
    }

 };


 const mostrarData = data=>{
    console.log(data) 
    
    data.results.forEach(item => {
        const clone = template.content.cloneNode(true);
        console.log(item) 
        clone.querySelector("img").setAttribute("src", item.image);
        clone.querySelector("h5").textContent= item.name
        clone.querySelector("p").textContent= item.species

        fracment.appendChild(clone)
    });


    cardDinamicas.appendChild(fracment)

}



const loadingData = estado =>{
    // requerimos el elemento
    const loading = document.getElementById("loading")
     if(estado){
         loading.classList.remove("d-none");
     }else{
        loading.classList.add("d-none");
     }
}






