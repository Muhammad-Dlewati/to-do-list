let input = document.querySelector("#input");
let addButton = document.querySelector("#add-task");
let newTasks = document.querySelector("#new-tasks");

addButton.addEventListener("click", addTask);

function addTask() {
  if (input.value) {
    let p = document.createElement("p");
    p.textContent = input.value;

    let dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";

    let li = document.createElement("li");
    li.appendChild(p);
    li.appendChild(dltBtn);

    newTasks.appendChild(li);

    dltBtn.addEventListener("click", deleteTask);

    function deleteTask() {
      li.remove();
    }

    input.value = "";
  }
}
