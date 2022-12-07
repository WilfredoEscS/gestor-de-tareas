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

export default checkComplete;
