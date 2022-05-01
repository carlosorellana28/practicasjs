const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

/* 
* creando un calbar con fetch para traer elementos de un archivo json
 */

// fetch('http://127.0.0.1:5501/json/clientes.json')
//     .then(response =>{
//         return response.json();
//     })
//     .then(users=>{
//         const findPostById=(id, callback)=>{

//             const user = users.find((item)=> {
//                 return  item.id ===id
//             });

//             if(user){
//                 callback(null, user)

//             }else{
//                 callback("no se cencuentra el susuario con id: " + id )
//             }

//         }

//         findPostById(2,(error,user)=>{
//             if(error){
//                 return  console.log(error)
//             }else{
//                     const arrayUser=[];
//                 const usuario = {
//                     [user.firstName]:  {
//                         id: user.id,
//                         name: user.firstName,
//                         lastName: user.lastName,
//                         age: user.age,
//                         city:user.city.nameCity,
//                         street: user.city.street
//                     }
//                 }
//                 arrayUser.push(usuario)
//                 console.log(arrayUser)
//                 // console.log(arra)
//             }
//         })
//     })


/* 
*callback con un objeto interno 
*/

//  creamos la funcion principal

// const findPostById = (id,callback) => {
//     // verificamos si existe el elemento el cual pasamos por parametro

//     const userPost = posts.find(item => item.id ===id);


//     if(userPost){

//         callback(null, userPost)
//     }else{
//         callback("no se encontro el id que usted a especificado")
//     }


// }

// findPostById(3,(error, post)=>{

//     if(error) return console.log(error);

//     console.log(post)
   
// })



/* 
 * PROMESAS
 */

    

