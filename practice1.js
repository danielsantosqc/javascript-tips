const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  // console.log(e.target);
  if(e.target.id === "padre"){
    console.log("Diste click al padre");
  }

  // console.log(e.target.matches(".border-secondary"));
  if(e.target.matches(".border-secondary")){
    console.log("Diste clicl al hijo");
  }

  // console.log(e.target.dataset.div);
  if(e.target.dataset.div === "divNieto"){
    console.log("Diste click al nieto");
  }
});