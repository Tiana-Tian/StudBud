// Basic form DOM elements
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")

// Selector for the tasklist output
var tasks = document.getElementById("tasklist");

// DOM elements for the task input fields
var subjectInput = document.getElementById("subjectInput");
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
// var completionTimeInput = document.getElementById("completionTimeInput");
// var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

// Form submission event listener
form.addEventListener("submit", function(event){
  event.preventDefault();
  let subject = subjectInput.value;
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  // let completionTime = completionTimeInput.value;
  // let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  addTask(subject, task, dueDate, false,false, priorityRating, false);// removed the completion time and estimated time as design project normally require longe time commitment and hard to narrow to hours and mins
  console.log(taskListArray);
})

// Create global array to track tasks
var taskListArray = [];

// Function to add task with user inputs as parameters
function addTask(subjectName, taskDescription, dueDate, completionTime, estimatedTime, priorityRating, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    subjectName,
    taskDescription,
    dueDate,
    dateCreated,
    completionTime,
    estimatedTime,
    priorityRating,
    completionStatus
  };
  taskListArray.push(task);
  console.log(taskListArray);
  renderTask(task);
  // Clear the task input form
  form.reset();
}


// Function to display and remove task on screen
// Create HTML elements
function renderTask(task){
  let item = document.createElement('li');
    item.classList.add('task');
    item.classList.add('fill');
    item.setAttribute("draggable", "true");
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);

    let taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
    taskContent.innerHTML = "<h4>" +task.subjectName +"</h4>" +  "<br>"+ "<p>"  +task.taskDescription + "<br>"+task.dueDate +"<br>"+ task.priorityRating + "</p>" ;
    
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

//Function to remote task on screen
function removeTask (event){
    let tasks = event.target.parentNode.parentNode;
    let item = event.target.parentNode;
    tasks.removeChild(item);
}

// DRAG & DROP Function

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


 