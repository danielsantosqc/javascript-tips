const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const mainFooter = document.getElementById("mainFooter");
const templateFooter = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();
const btnsBotones = document.querySelectorAll(".card .btn");
// console.log(carrito);
// console.log(template);
// console.log(mainFooter);
// console.log(fragment);
// console.log(btnsBotones);


// Aqui se captura los eventos del DOM para el funcionamiento del sitio
document.addEventListener("click",(e) => {
  // console.log(e.target.matches(".card .btn-outline-primary"));
  if(e.target.matches(".card .btn-outline-primary")){
    console.log("Ejecutar agregar al carrito");
    agregarAlCarrito(e);
  }

  // console.log(e.target.matches("#carrito .list-group-item .btn-danger"));
  if(e.target.matches("#carrito .list-group-item .btn-danger")){
    console.log("quitar");
    btnDisminuir(e);
  }

  // console.log(e.target.matches("#carrito .list-group-item .btn-success"));
  if(e.target.matches("#carrito .list-group-item .btn-success")){
    console.log("agregar");
    btnAumentar(e);
  }

  // bntFinalizarCompra
  if(e.target.matches("#mainFooter .card .card-body .btn")){
    console.log("Finalizar compra");
    btnFinalizarCompra(e);
  }
  
})

let carritoObjeto = [];

// agregando al carrito----------
const agregarAlCarrito = (e) => {
  // console.log(e.target.dataset.fruta);
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
    precioTotal:parseInt(e.target.dataset.precio)
  };
  // console.log(producto);

  const indice = carritoObjeto.findIndex((item) => item.id === producto.id);
  console.log(indice);
  if(indice === -1){
    carritoObjeto.push(producto);
  }else {
    carritoObjeto[indice].cantidad++;
    carritoObjeto[indice].precioTotal = carritoObjeto[indice].cantidad * producto.precio;
  }
  console.log(carritoObjeto);
  pintarCarrito(carritoObjeto);
};

// aumentar al  carrito-----------
const btnAumentar = (e)=>{
  console.log("aumentaste ",e.target.dataset.fruta);
  carritoObjeto = carritoObjeto.map(item => {
    if(item.id === e.target.dataset.fruta){
      item.cantidad ++
      item.precioTotal = item.precio * item.cantidad; 
    }
    return item;
  });
  pintarCarrito(carritoObjeto);
};

// disminuir carrito -------
const btnDisminuir = (e)=>{
  console.log("disminuiste ",e.target.dataset.fruta);
  carritoObjeto = carritoObjeto.filter(item => {
    if(item.id === e.target.dataset.fruta){
      if(item.cantidad > 0){
        item.cantidad --;
        item.precioTotal = item.precio * item.cantidad; 
        if(item.cantidad === 0) return
        return item;
      }
    }else{
      return item;
    }
  });
  pintarCarrito(carritoObjeto);
}

const pintarFooter = () =>{
  console.log("Pintarfooter");
  mainFooter.textContent = "";
  if(carritoObjeto.length !== 0){  
    const total = carritoObjeto.reduce(
      (acc, current) => acc + current.cantidad * current.precio, 0
      );  
      const clone = templateFooter.content.cloneNode(true);
      clone.querySelector('span').textContent = total;
      mainFooter.appendChild(clone);
  }else{
    mainFooter.textContent = "";
  }
};

const pintarCarrito = (array) =>{
  // console.log('Pintar carrito', producto);  
  carrito.textContent = "";
  array.forEach(item => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.lead').textContent = item.titulo;
    clone.querySelector('.badge').textContent = item.cantidad;
    clone.querySelector('div .lead span').textContent = item.precioTotal;

    // buttons---
    clone.querySelector('.btn-danger').dataset.fruta = item.id;
    clone.querySelector('.btn-success').dataset.fruta = item.id;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);

  pintarFooter();
};

const btnFinalizarCompra = () =>{
 alert(`
 Sabemos que eres pobre y no puedes comprar estos productos
 Sabemos que tu es pobre e nao podes compar estes produtos
 We know that you are poor and cannot buy these products
 `);
};

// btnsBotones.forEach((btn) => {
//   btn.addEventListener("click", agregarAlCarrito)
// });