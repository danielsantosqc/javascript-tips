// console.log("Funcionando");

// const url = "https://jsonplaceholder.typicode.com/posts/";
const url = "https://jsonplaceholder.typicode.com/users/";

// primera forma
// fetch(url)
//   .then((res) => res.json())
//   .then(data => {
//     // Object.entries(data).forEach(([key, value]) =>{
//     //   console.log(key);
//     //   Object.entries(value).forEach(([llave, valor]) => {
//     //     console.log(llave+ " => " +valor);
//     //   });
//     //   console.log("---------------");
//     // });
//      console.log(data)
//   })
//   .catch(e =>console.log(e))
//   .finally(()=> console.log("Finalizo"));



// segunda forma 
 const findPostById = async (id) =>{
   try {
     const res = await fetch(url + id);
     const post = await res.json();
     console.log(post);
   } catch (error) {
     console.log(error);
   }
 }

 findPostById(3);