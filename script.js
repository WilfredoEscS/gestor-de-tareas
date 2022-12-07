(() => {
  const btn = document.querySelector("[data-form-btn]");
  const createTask = (e) => {
    e.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    const taskContent = document.createElement("div");
    const taskTitle = document.createElement("span");
    const value = input.value;

    task.classList.add("card");
    taskTitle.classList.add("task");
    list.appendChild(task);
    task.appendChild(taskContent);
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(taskTitle);
    taskTitle.textContent = value;
    input.value = "";
  };

  //Muestra el mensaje en la consola al hacer clic en el boton
  btn.addEventListener("click", createTask);

  //Funciones flecha
  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  };

  const completeTask = (e) => {
    const element = e.target;
    element.classList.toggle("far");
    element.classList.toggle("fa-square");
    element.classList.toggle("fas");
    element.classList.toggle("fa-check-square");
    element.classList.toggle("completeIcon");
  };
})();
