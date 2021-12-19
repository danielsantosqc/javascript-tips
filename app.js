

document.addEventListener("DOMContentLoaded",() =>{
  fetchData();
});

const fetchData = async() => {
  
  try {
    console.log("Obteniendo Datos");
    loadingData(true);
    let res =  await fetch ("https://rickandmortyapi.com/api/character");  
    const data = await res.json();
    // console.log(data);
    pintarCards(data);

    // window.setTimeout(function (){
    //   console.log("Holaaaaa.....");
    // },2000);
    
  } catch (error) {
    console.log(error);
  }finally{
    loadingData(false);
    console.log("fin");
  }
}

const pintarCards = (data) => {
  // console.log(data);
  const cards = document.getElementById("card-dinamicas");
  const templateCard = document.getElementById("template-card").content;
  const fragment = document.createDocumentFragment();
  data.results.forEach((item) => {  
    console.log(item);

    const clone = templateCard.cloneNode(true);
    clone.querySelector("h5").textContent  = item.name
    clone.querySelector("p").textContent = item.species;
    clone.querySelector(".card-img-top").setAttribute("src", item.image);

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