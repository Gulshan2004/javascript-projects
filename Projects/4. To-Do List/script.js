let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);

// ➡️ “When the user presses Enter while typing in the taskInput field, automatically add the task.”
taskInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if(text === "") return;

  tasks.push(text);
  saveToStorage();//data is saved ✅ saves updated array into localStorage
  renderTasks();//UI is updated ✅ redraws the task list on screen

  taskInput.value = "";//clears the input box
  taskInput.focus(); //Put cursor back in the input (focus) for smoother UX.
}

function renderTasks() {
  taskList.innerHTML = ""; //Clear existing HTML list (so we don't duplicate items) , We will rebuild the list based on tasks array.

  tasks.forEach((task, index) => {//Loop through the tasks array.
    const li = document.createElement("li");//Create a new <li> element → one list item for one task.

    const span = document.createElement("span");//Create <span> to hold text of the task
    span.textContent = task;//Put the task text inside it.

    const delBtn = document.createElement("button");//Create Delete button for each task
    delBtn.className = "deleteBtn";//Add a CSS class 'deleteBtn' for styling.
    delBtn.textContent = "X";//Text "X" appears on the button.
    delBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(span);//Adds the text (inside span) to the list item <li>
    li.appendChild(delBtn);//Adds the delete button to the same <li>

    taskList.appendChild(li);//✔ Inserts the completed list item into the whole task list (<ul>) i.e taskList
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveToStorage();
  renderTasks();
}

function saveToStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Show tasks on page load
renderTasks();
