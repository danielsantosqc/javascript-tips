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
  pintarTodo.textContent = "";
  const fragment = document.createDocumentFragment();

  arrayTodos.forEach(item => {
    const clone = templateTodo.cloneNode(true);
    clone.querySelector(".lead").textContent = item.nombre;
    fragment.appendChild(clone);
  });
  pintarTodo.appendChild(fragment);
}
