// console.log("Provando");
const formulario = document.querySelector('#formulario');
const cardsEstudiantes = document.querySelector('#cardsEstudiantes');
const cardsProfesores = document.querySelector('#cardsProfesores');
const templateEstudiante = document.querySelector('#templateEstudiante').content;
const templateProfesor = document.querySelector('#templateProfesor').content;

const estudiantes = [];
const profesores = [];

class Persona {
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

  static pintarPersonaUI (personas, tipo){
    if (tipo === 213132){
      console.log("est");
      cardsEstudiantes.textContent = "";
      const fragment = document.createDocumentFragment();
      personas.forEach(item => {
        fragment.appendChild((item).agregarNuevoEstudiante());
      });
      cardsEstudiantes.appendChild(fragment);
    }
    if(tipo === "Profesor"){
      console.log("prof");
      cardsProfesores.textContent = "";
      const fragment = document.createDocumentFragment();
      personas.forEach(item => {
        fragment.appendChild((item).agregarNuevoProfesor());
      });
      cardsProfesores.appendChild(fragment);
    }

  }

}

class Estudiante extends Persona{
  #estado = false;
  #estudiante = "Estudiante";

  set setEstado (estado){
    this.#estado = estado;
  }

  get getEstudiante(){
    return this.#estudiante;
  }

  agregarNuevoEstudiante(){
    const clone = templateEstudiante.cloneNode(true);
    clone.querySelector("h5 .text-primary").textContent = this.nombre;
    clone.querySelector("h6").textContent = this.getEstudiante;
    clone.querySelector("p").textContent = this.edad;
    return clone;
  }
}


class Profesor extends Persona{
  #profesor = "Profesor";

  get getProfesor (){
    return this.#profesor;
  }

  agregarNuevoProfesor(){
    const clone = templateProfesor.cloneNode(true);
    clone.querySelector("h5").textContent = this.nombre;
    clone.querySelector("h6").textContent = this.getProfesor;
    clone.querySelector("p").textContent = this.edad;
    return clone;
  }
}


formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = new FormData (formulario);
  // console.log(datos);
  // console.log([...datos.values()]);
  const [nombre, edad, opcion] = [...datos.values()];
  // console.log(nombre, edad, opcion);

  if(opcion === "Estudiante"){
    // console.log(estudiante);  
    const estudiante = new Estudiante(nombre, edad);
    estudiantes.push(estudiante);
    console.log(estudiantes);
    Persona.pintarPersonaUI(estudiantes, opcion);
    console.log("fim");
  }

  if(opcion === "Profesor"){
    // console.log("profesor");
    const profesor = new Profesor(nombre, edad);
    profesores.push(profesor)
    console.log(profesores);
    Persona.pintarPersonaUI(profesores, opcion)
  }
});