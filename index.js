// LO QUE ANTES HABIA
// function Persona (nombre){
//   this.nombre = nombre,
//   this.saludar = function saludar (){
//     return ` ${nombre} dice saludar`;
//   }

// }

// // Un prototypo es un metodo que se le puede concatenar a la lesta de prototipos del objeto en cuestion
// Persona.prototype.saludarEnIngles = function(){
//   return `Hi my name is ${this.nombre}`;
// }
// const juanito = new Persona ("juanitooooo");
// const pedrito = new Persona ("Pedritoooo");

// console.log(juanito);
// console.log(pedrito);
// console.log(juanito.saludar());
// console.log(pedrito.saludar());



// ==============LO NUEVO ACTUALIZADO EN ECMAScript 2015
//solo muda la parte visual  con la palabra class, por dentro es lo mismo

class Persona{
  constructor(nombre,edad){
    this._nombre = nombre;
    this._edad = edad;
  }

  get nombre () {
    return this._nombre.toUpperCase();
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }


  saludar(){
    return `${this.nombre} dice holaaaa...`
  }

  static provarSaludo(nombre){
    return `${nombre} dice holis`;
  }
}


class Estudiente extends Persona{

  // constructor (nombre, edad, notas =[]){
  //   super(nombre, edad);
  //   this._notas = notas;
  // }

  // dejar  como privado la variable => #, solo permite el acceso con el Get
  #notas = [];

  saludar(){
    return(`${this.nombre} desde estudiante`);
  }

  get notas (){
    return this.#notas;
  }

  set notas (nota){
    this.#notas.push(nota);
  }
}

// console.log(Persona.provarSaludo("Danny"));
// const juanito = new Persona ("Juanito",25);
// juanito.nombre = "Juan";
// console.log(juanito.nombre);
// console.log(juanito.setnombre());

// -------------
const juanito = new Estudiente ("Juanito",25);
juanito.notas = 7;
juanito.notas = 4;
juanito.notas = 9;
console.log(juanito.notas);
console.log(juanito);

