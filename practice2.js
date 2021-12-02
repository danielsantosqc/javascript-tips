const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const mainFooter = document.getElementById("main-footer");
const fragment = document.createDocumentFragment();
const btnsBotones = document.querySelectorAll(".card .btn");
// console.log(carrito);
// console.log(template);
// console.log(fragment);
// console.log(btnsBotones);

document.addEventListener("click",(e) => {
  // console.log(e.target.matches(".card .btn-outline-primary"));
  if(e.target.matches(".card .btn-outline-primary")){
    console.log("Ejecutar agregar al carrito");
    agregarAlCarrito(e);
  }

  // console.log(e.target.matches("#carrito .list-group-item .btn-danger"));
  if(e.target.matches("#carrito .list-group-item .btn-danger")){
    console.log("quitar");
  }

  // console.log(e.target.matches("#carrito .list-group-item .btn-success"));
  if(e.target.matches("#carrito .list-group-item .btn-success")){
    console.log("agregar");
  }
  
})

const carritoObjeto = [];

const agregarAlCarrito = (e) => {
  // console.log(e.target.dataset.fruta);
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
  };
  // console.log(producto);

  const indice = carritoObjeto.findIndex((item) => item.id === producto.id);
  console.log(indice);
  if(indice === -1){
    carritoObjeto.push(producto);
  }else {
    carritoObjeto[indice].cantidad++;
    carritoObjeto[indice].precio = carritoObjeto[indice].cantidad * producto.precio;
  }
  console.log(carritoObjeto);
  pintarCarrito(carritoObjeto);
  // console.log(carritoObjeto);
};

const pintarCarrito = (array) =>{
  // console.log('Pintar carrito', producto);  
  carrito.textContent = "";
  array.forEach(item => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.lead').textContent = item.titulo;
    clone.querySelector('.badge').textContent = item.cantidad;
    clone.querySelector('div .lead span').textContent = item.precio;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};

// btnsBotones.forEach((btn) => {
//   btn.addEventListener("click", agregarAlCarrito)
// });