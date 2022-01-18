const alert = document.querySelector(".alert");
const formulario = document.querySelector("#formulario");
const pintarTodo = document.querySelector("#pintarTodo");
const templateTodo = document.querySelector("#templateTodo").content;

let todos = [12321];

formulario.addEventListener('submit',(e) => {
  e.preventDefault();
  alert.classList.add('d-none');

  // console.log('funcionando');
  const data = new FormData(formulario);
  const [todo] = [...data.values()];
  // console.log(!todo.trim());
  if(!todo.trim()){
    console.log('No se permiten espacios vacios'); 
    alert.classList.remove('d-none');
    return;
  }
  
  
});

const pintarTodos = () => {
  pintarTodo.textContent = "";
}
