// console.log("Provando");
const formulario = document.querySelector('#formulario');
const cardsEstudiantes = document.querySelector('#cardsEstudiantes');
const cardsProfesores = document.querySelector('#cardsProfesores');
const templateEstudiante = document.querySelector('#templateEstudiante').content;
const templateProfesor = document.querySelector('#templateProfesor').content;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = new FormData (formulario);
  // console.log(datos);
  // console.log([...datos.values()]);
  const [nombre, edad, opcion] = [...datos.values()];
  console.log(nombre, edad, opcion);
});