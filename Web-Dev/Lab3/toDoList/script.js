function addListTask() {
  let taskInput = document.getElementById("input-task");
  let taskMessage = taskInput.value.trim();
  if (taskMessage === "") {
    alert("Write a task");
    return;
  }
  let taskList = document.getElementsByClassName("task-list")[0];
  let taskLi = document.createElement("li");
  let taskCheckBox = document.createElement("input");
  let taskP = document.createElement("p");
  let deleteImg = document.createElement("img");

  taskLi.className = "task-item";

  taskCheckBox.type = "checkbox";
  taskCheckBox.className = "complete-task";
  taskCheckBox.onclick = function () {
    completeTask(this);
  };

  taskP.className = "task";
  taskP.textContent = taskMessage;

  deleteImg.className = "garbage";
  deleteImg.onclick = function () {
    deleteListTask(this);
  };
  deleteImg.src = "images/garbage.png";
  deleteImg.alt = "Delete Bin";

  taskLi.appendChild(taskCheckBox);
  taskLi.appendChild(taskP);
  taskLi.appendChild(deleteImg);

  taskList.appendChild(taskLi);

  taskInput.value = "";
}

function completeTask(checkbox) {
  let taskLi = checkbox.parentElement;
  let taskP = taskLi.querySelector(".task");

  if (checkbox.checked) {
    taskP.style.textDecoration = "line-through";
    taskP.style.color = "#524c4c";
  } else {
    taskP.style.textDecoration = "none";
    taskP.style.color = "#000";
  }
}

function deleteListTask(element) {
  element.parentElement.remove();
}
