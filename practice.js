{/* <li class="list">
  <b>Pais: </b>
  <span class="text-primary">Aqui va el Pais</span>
</li>  */}


const lista  = document.getElementById("lista");
const arrayPaises = ["Peru", "Bolivia", "Colombia", "Mexico"];


// createElement-----
// const fragment = document.createDocumentFragment();

// arrayPaises.forEach(pais => {
//   const li = document.createElement('li');
//   li.className = 'list';

//   const b = document.createElement('b');
//   b.textContent = "Pais: ";

//   const span = document.createElement('span');
//   span.className = "text-primary";
//   span.textContent = pais;

//   li.appendChild(b);
//   li.appendChild(span);

//   fragment.appendChild(li);
// });
// lista.appendChild(fragment); 
// -------


// innerHTML-------- IT'S GOOOOOOOOOOOOOOODD - pero es pasivo a script injection 🤔
// let template = "";
// arrayPaises.forEach((pais) =>{
//   template += `
//     <li class="list">
//       <b>Pais: </b>
//       <span class="text-primary">${pais}</span>
//     </li>
//   `
// });
// lista.innerHTML = template;
// // =============


// ---- USDANDO TEMPLATE - ESTRUCTURA MUCHO MAS SENCILLA
// const liTemplate = document.getElementById("liTemplate");
// const clone = liTemplate.content.cloneNode(true); 
// clone.querySelector(".text-primary").textContent = "Agregue atravez de un template";
// console.log(clone);
// lista.appendChild(clone);


const fragment = document.createDocumentFragment();
const liTemplate = document.getElementById("liTemplate");

const clickPaises = () => console.log("Me diste click ");

arrayPaises.forEach((pais) => {
  // const clone = liTemplate.content.cloneNode(true);
  
  const clone = liTemplate.content.firstElementChild.cloneNode(true); //usar asi para eventos del DOM
  clone.addEventListener("click", clickPaises)

  clone.querySelector('span').textContent = pais;
  fragment.appendChild(clone);
})
lista.appendChild(fragment);