const lista  = document.getElementById("lista");

const arrayPaises = ["Peru", "Bolivia", "Colombia"];

// ---whit textContent
// arrayPaises.forEach((pais) => {
//   const li = document.createElement('li');
//   li.textContent = pais;
//   lista.appendChild(li);
// });

// --- whit innerHTML - CREA REFLOW Y ES PASIVO A SCRIPT INJECTION
// arrayPaises.forEach((pais) => {
//     lista.innerHTML += `<li> ${pais}</li>`;
//   });


// ---whit Fragment - recomend
const fragment = document.createDocumentFragment();

arrayPaises.forEach((pais) => {
  const li = document.createElement('li');
  li.textContent = pais;
  fragment.appendChild(li);
});

lista.appendChild(fragment);