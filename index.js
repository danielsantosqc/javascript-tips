// const regExp = /daniel/i;
// const regExpObjeto = new RegExp("daniel", "i");
// console.log(regExp.test("dan dan"));

const regExpName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regExpEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");




formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(userName.value);
  console.log(userEmail.value);

  if(!regExpName.test(userName.value)){
    console.log("Formato de nombre no valido");
  }
  if(!regExpEmail.test(userEmail.value)){
    console.log("Formato de email no valido");
  }

});