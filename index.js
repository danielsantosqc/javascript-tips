localStorage.setItem("platano", "🍌"); // respectiva llave, valor
localStorage.setItem("manzana", "🍎");

if(localStorage.getItem("platano")){
  const banana = localStorage.getItem("platano")
  console.log(banana);
}


const arrayFrutas = [
  {
    nombre: "🍌",
    colo: "amarillo",
  },
  {
    nombre: "🍎",
    colo: "rojo",
  },
  {
    nombre: "🍊",
    colo: "anaranjado"
  },
];

localStorage.setItem("frutas", JSON.stringify(arrayFrutas));
if(localStorage.getItem("frutas")){
  const frutasDesdeLocal = JSON.parse(localStorage.getItem("frutas"));
  console.log(frutasDesdeLocal);
}

// localStorage.removeItem("platano");

// localStorage.clear();