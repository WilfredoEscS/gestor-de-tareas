const btn = document.querySelector("[data-form-btn]");
const createTask = (e) => {
  e.preventDefault();
  const input = document.querySelector("[data-form-input]");
  console.log(input.value);
};

console.log(btn);

//Muestra el mensaje en la consola al hacer clic en el boton
btn.addEventListener("click", createTask);
