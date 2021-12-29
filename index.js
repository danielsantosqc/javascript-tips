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
  constructor(nombre){
    this._nombre = nombre;
  }

  get nombre () {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }


  saludar(){
    return `${this.nombre} dice holaaaa...`
  }
}

const juanito = new Persona ("Juanito");
juanito.nombre = "Juan";
console.log(juanito.saludar());