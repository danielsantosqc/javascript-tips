// const regExp = /daniel/i;
// const regExpObjeto = new RegExp("daniel", "i");
// console.log(regExp.test("dan dan"));

const regExpName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regExpEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const alertName = document.getElementById('alertName');
const alertEmail = document.getElementById('alertEmail');
const alertSuccess = document.getElementById('alertSuccess');


const pintarMensajeExito = () =>{
  alertSuccess.classList.remove("d-none");
  alertSuccess.textContent = "Sent Successfully"
  console.log("formulario enviado success");
};

const pintarMensajeError = (errores) =>{
  errores.forEach(item => {
    item.tipo.classList.remove("d-none");
    item.tipo.textContent = item.msg;
    item.tipo.classList.add("is-invalid");
  });
};

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(userName.value);
  console.log(userEmail.value);
  alertSuccess.classList.add("d-none");
  const errores = [];

  // esto devuelve true si solo existe espacios
  // console.log(!userName.value.trim());

  // userName
  if(!regExpName.test(userName.value) || !userName.value.trim()){
    console.log("Formato de nombre no valido");
    userName.classList.add('is-invalid')
    errores.push({
      tipo: alertName,
      msg: "Formato no valido en el campo nombre, solo letras"
    });
  }else{
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    alertName.classList.add("d-none");
  }


  // userEmail
  if(!regExpEmail.test(userEmail.value) || !userEmail.value.trim()){
    console.log("Formato de email no valido");
    userEmail.classList.add("is-invalid");
    errores.push({
      tipo: alertEmail,
      msg: "Escriba un correo valido"
    });
  }else{
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    alertEmail.classList.add("d-none");
  }

  if (errores.length !== 0){
    pintarMensajeError(errores);
    return;
  }
  console.log("formulario enviado");
  pintarMensajeExito();
});