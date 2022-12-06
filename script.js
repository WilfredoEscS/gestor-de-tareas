const btn = document.querySelector("[data-form-btn]");
const createTask = (e) => {
  e.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  const value = input.value;
  const content = `
  <div>
    <i class="fas fa-check-square completedIcon icon"></i>
    <span class="task">${value}</span>
    <i class="fas fa-check-squareX"></i>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>
`;
  task.classList.add("card");
  input.value = "";
  task.innerHTML = content;
  list.appendChild(task);
  console.log(content);
};

console.log(btn);

//Muestra el mensaje en la consola al hacer clic en el boton
btn.addEventListener("click", createTask);
