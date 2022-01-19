const alert = document.querySelector(".alert");
const formulario = document.querySelector("#formulario");
const pintarTodo = document.querySelector("#pintarTodo");
const templateTodo = document.querySelector("#templateTodo").content;

let arrayTodos = [];

formulario.addEventListener('submit',(e) => {
  e.preventDefault();
  alert.classList.add('d-none');
  console.log('funcionando');
  const data = new FormData(formulario);
  const [todo] = [...data.values()];
  // console.log(!todo.trim());
  if(!todo.trim()){
    console.log('No se permiten espacios vacios'); 
    alert.classList.remove('d-none');
    return;
  }
  
  agregarTodo(todo);
  pintarTodos();
});

const agregarTodo = todo => {
  const objetoTodo = {
    nombre: todo,
    id: `${Date.now()}`
  }
  arrayTodos.push(objetoTodo);
}

const pintarTodos = () => {
  localStorage.setItem("todoLocalStorage",JSON.stringify(arrayTodos))
  pintarTodo.textContent = "";
  const fragment = document.createDocumentFragment();

  arrayTodos.forEach(item => {
    const clone = templateTodo.cloneNode(true);
    clone.querySelector(".lead").textContent = item.nombre;
    clone.querySelector(".btn").dataset.id = item.id;

    fragment.appendChild(clone);
  });
  pintarTodo.appendChild(fragment);
}

document.addEventListener('click',(e) => {
  // console.log(e.target.dataset.id);
  // console.log(e.target.matches(".btn-danger"));

  if (e.target.matches(".btn-danger")){
    arrayTodos = arrayTodos.filter(item => item.id !== e.target.dataset.id);
    pintarTodos();
  }  
});

document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("todoLocalStorage")) {
    arrayTodos = JSON.parse(localStorage.getItem("todoLocalStorage"));
    pintarTodos();
  }  
});