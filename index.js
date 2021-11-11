const gato = {
  nombre:"tom",
  duerme: true,
  edad: 5,
  enemigos: ["agua", "perros"],
  get nombreMayuscula(){
    return this.nombre.toUpperCase();
  },
  set agregaEnemigos(nuevoEnemigo){
    this.enemigos.push(nuevoEnemigo);
  },

};

console.log(gato.nombreMayuscula);
gato.agregaEnemigos = "mouse";
console.log(gato);