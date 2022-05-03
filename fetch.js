// importamos los paquetesnvm
import fetch from 'node-fetch';

const  urlFetch = "https://jsonplaceholder.typicode.com/photos/";

// fetch(urlFetch)
//         .then((response)=>{
//             return response.json()
//         })
//         .then((photos)=>{
//             console.log(photos[0].title);
//         })
//         .catch((err)=>{
//             console.log(err)
//         })




// resolviendo con callback

const findPhotosById = async (id)=>{
    
    try {
        const resp = await fetch(urlFetch + id);
        const photos = await resp.json();
        setTimeout(()=>{
    
           
                console.log(photos)
        },2000)
    } catch (error) {
        console.log(error)
    }
   

}

findPhotosById(5000)


// promesa 
// const ReturnPhotos = (photoUser)=>{
//     const promesa = new Promise(resolve, reject)
// }