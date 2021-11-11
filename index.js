const elemento = document.getElementById("contenido");
const botonR = document.getElementById("btn-color-red");
const botonG = document.getElementById("btn-color-green");

botonR.addEventListener("click", () => {
  console.log("hiciste click");
  elemento.style.color = "red";
})

botonG.addEventListener("click", () =>{
  elemento.style.color = "green";
})