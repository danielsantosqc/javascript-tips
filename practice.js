const padre = document.querySelector('.border-primary');
const hijo = document.querySelector('.border-secondary');
const nieto = document.querySelector('.border-danger');

// recorreiendo unitariamente----------
// padre.addEventListener('click',() => {
//   console.log("me diste click padre");
// },true);
// hijo.addEventListener('click',() => {
//   console.log("me diste click hijo");
// },true);
// nieto.addEventListener('click',() => {
//   console.log("me diste click nieto");
// },true);


// recorriendo con un foreach----------
const cajitas = document.querySelectorAll('.border');
cajitas.forEach((caja) => {
  caja.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("me diste click");
  })
});















