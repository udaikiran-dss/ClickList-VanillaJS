import "./styles.css";
let taskList = [];

let taskName = document.getElementById("newTask");
let addTask = document.getElementById("addTask");
let ul = document.querySelector("ul");

addTask.addEventListener("click", () => {
  if (!taskName.value) return;

  let found = false;
  for (let task of taskList) {
    if (task.toUpperCase() === taskName.value.toUpperCase()) {
      alert("already added");
      found = true;
    }
  }
  if (!found) {
    taskList.push(taskName.value);
    let listItem = document.createElement("li");
    listItem.id = taskList.length;
    listItem.textContent = taskName.value
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
    listItem.className = "task-incomplete";
    listItem.addEventListener("click", () => {
      listItem.className =
        listItem.className === "task-complete"
          ? "task-incomplete"
          : "task-complete";
    });
    ul.appendChild(listItem);
  }
});
