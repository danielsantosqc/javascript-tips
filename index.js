const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const btnsBotones = document.querySelectorAll(".card .btn");
// console.log(carrito);
// console.log(template);
// console.log(fragment);
// console.log(btnsBotones);

const carritoObjeto = [];

const agregarAlCarrito = (e) => {
  console.log(e.target.dataset.fruta);
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };
  const indice = carritoObjeto.findIndex(
    (item) => item.id ===producto.id
  );
    console.log(indice);
    if(indice === -1){
      carritoObjeto.push(producto);
    }else {
      carritoObjeto[indice].cantidad++;
    }
    console.log(carritoObjeto);
  pintarCarrito(carritoObjeto);
  // console.log(carritoObjeto);
};

const pintarCarrito = (array) =>{
  // console.log('Pintar carrito', producto);  
  carrito.textContent = "";
  array.forEach(item => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector('.lead').textContent = item.titulo;
    clone.querySelector('.badge').textContent = item.cantidad;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};

btnsBotones.forEach((btn) => {
  btn.addEventListener("click", agregarAlCarrito)
});
