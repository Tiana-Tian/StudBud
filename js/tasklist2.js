// Basic form DOM elements
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")

// Selector for the tasklist output
var tasks = document.getElementById("tasklist");

// DOM elements for the task input fields
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

// Form submission event listener
form.addEventListener("submit", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
  console.log(taskListArray);
})

// Create global array to track tasks
var taskListArray = [];

// Function to add task with user inputs as parameters
function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    taskDescription,
    dueDate,
    dateCreated,
    estimatedTime,
    completionTime,
    estimatedTime,
    priorityRating,
    completionStatus
  };
  taskListArray.push(task);
  renderTask(task);
}


// Function to display task on screen
//function renderTask(task){
  // Create HTML elements
  
  //start of lambda code
function renderTask(task){
  let item = document.createElement('li');
    item.classList.add('task');
    item.classList.add('fill');
    item.setAttribute("draggable", "true");
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);

    let taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
    taskContent.innerHTML = "<p>" + task.taskDescription +"<br>"+task.dueDate + "</p>" ;
    
    let trash = document.createElement('div');
    trash.classList.add('trash');
    trash.innerText = "X";
    trash.addEventListener('click', removeTask);

    item.appendChild(taskContent);
    item.appendChild(trash);

  // Selector for the added tasklist output 
    //let tasks = document.getElementById('tasklist');
    tasks.insertBefore(item, tasks.childNodes[0]);
}

function removeTask (event){
    let tasks = event.target.parentNode.parentNode;
    let item = event.target.parentNode;
    tasks.removeChild(item);
     // Clear the task input form
    form.reset();
}


// DRAG & DROP

let item

function dragStart (event) {
    // console.log(event.target);
    event.target.className += ' hold';
    item = event.target;
    setTimeout(() => (event.target.className = 'invisible'), 0);
}

function dragEnd (event){    
    // console.log(event.target);
    event.target.className = 'task fill';
}

const dropzones = document.querySelectorAll('.dropzone');

function dragEnter  (event) {
    // console.log("ENTER");
    event.preventDefault();
    if(event.target.className === "column dropzone") {
        event.target.className += ' hovered';   
    }
}

function dragOver  (event)  {
    // console.log("OVER");
    event.preventDefault();
}

function dragLeave  (event)  {
    // console.log("LEAVE");
    if(event.target.className === "column dropzone hovered") {
        event.target.className = "column dropzone"
    }
}

function dragDrop (event) {
    // console.log("DROP");
    if(event.target.className === "column dropzone hovered") {
        event.target.className = "column dropzone"
    }
    event.target.append(item);
}

for(const dropzone of dropzones) {
    dropzone.addEventListener('dragenter', dragEnter);
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('dragleave', dragLeave);
    dropzone.addEventListener('drop', dragDrop);
}

//end of lambda code

 