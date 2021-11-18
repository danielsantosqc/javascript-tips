// console.log("😎😎😎");

// document.addEventListener("DOMContentLoaded", () => {  
//  contenido
  // })

// console.log(document.getElementById("tituloWeb"));
// console.log(document.getElementById("tituloWeb").textContent);

const h1 = document.getElementById("tituloWeb");
console.log(h1.className);
console.log(h1.id);
console.log(h1.textContent);
console.log(h1.tagName);
console.log(h1.style);
h1.textContent = "Nuevo texto desde JS";
h1.style.backgroundColor = "green"; 
h1.style.color = "white";

// ------
const tituloWeb = document.getElementById("tituloWeb");
const botonR = document.getElementById("btn-color-red");
const botonB = document.getElementById("btn-color-green");

botonR.addEventListener("click", () => {
  console.log("hiciste click");
  tituloWeb.style.color = "red";
})

botonB.addEventListener("click", () =>{
  tituloWeb.style.color = "black";
})