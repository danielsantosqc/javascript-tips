document.addEventListener("DOMContentLoaded",() =>{
  fetchData();
});
let guardaUrl = [];
let contadorDeGets = 1;
let contador = 1;

// inicio  de eventos de los botones prev y next
const botonPrev = document.querySelector('.btn-outline-secondary');
const contadorDePagina = document.querySelector('.contador');
const botonNext = document.querySelector('.btn-outline-primary');

botonPrev.addEventListener("click", (e) =>{
  if(guardaUrl.info.prev){
    console.log(guardaUrl.info.prev);
    fetchData(guardaUrl.info.prev);
    contador --;
    contadorDePagina.textContent = contador;
  }
  // alert("Atras");
});
botonNext.addEventListener("click", (e) =>{
  if(guardaUrl.info.next){
    console.log(guardaUrl.info.next);
    fetchData(guardaUrl.info.next);
    contador++;
    contadorDePagina.textContent = contador;
  }
  // alert("Siguiente");
});
// fin de eventos


const fetchData = async(url = "https://rickandmortyapi.com/api/character" ) => {
  
  try {
    console.log("Obteniendo Datos "+ contadorDeGets +"⁰ vez");
    contadorDeGets ++;

    loadingData(true);
    const res =  await fetch ( url);  
    const data = await res.json();
    // console.log(data);
    guardaUrl = data;
    pintarPaginacion(data);
    pintarCards(data);

  } catch (error) {
    console.log(error);
  }finally{
    loadingData(false);
    console.log("fin");
  }
}


const pintarPaginacion = (data) =>{
  // console.log(data.info);
  const botonPrev = document.querySelector('.btn-outline-secondary');
  const botonNext = document.querySelector('.btn-outline-primary');

  if (!data.info.prev){
    botonPrev.disabled = true;
  }else{
    botonPrev.style.backgroundColor = "blue";
    botonPrev.disabled = false;
    // console.log("preview: ", data.info.prev);
  }

  if(!data.info.next){
    botonNext.disabled = true;
  }else{
    botonNext.style.backgroundColor = "blue";
    botonNext.disabled = false;
    // console.log("next: ", data.info.next);

  }
} 

const pintarCards = (data) => {
  console.log(data.results);
  const cards = document.getElementById("card-dinamicas");
  cards.textContent = ""
  const templateCard = document.getElementById("template-card").content;
  const fragment = document.createDocumentFragment();
  data.results.forEach((item) => {  
    // console.log(item.name);
    const clone = templateCard.cloneNode(true);
    clone.querySelector("h5").textContent  = item.name
    clone.querySelector("p").textContent = item.species;
    clone.querySelector(".card-img-top").setAttribute("src", item.image);

    // guardamos en el fragment para evitar el reflow
    fragment.appendChild(clone);
    
  });
  cards.appendChild(fragment);
}

const loadingData = estado => {

  const loading = document.getElementById("loading");
  if(estado){
    loading.classList.remove("d-none");
  }else{
    loading.classList.add("d-none");
  }
}