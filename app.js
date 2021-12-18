

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
  const templateCard = document.getElementById("template-card");
  data.results.forEach(element => {
    console.log(element);
    const clone = templateCard.cloneNode(true);
    clone.querySelector
  });
}

const loadingData = estado => {
  const loading = document.getElementById("loading");
  if(estado){
    loading.classList.remove("d-none");
  }else{
    loading.classList.add("d-none");
  }
}