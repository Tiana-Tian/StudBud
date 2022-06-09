//Create array to store tasks
var taskList = []

//Define a function for dynamically creating task objects
function addTask(name, description, startDate, dueDate, estimatedCompletionTime) {

    //create the task object
    let task = {
        name, 
        description, 
        startDate, 
        dueDate, 
        estimatedCompletionTime,
        taskStarted: false,
        taskCompleted: false
    }

    //push task object to taskList array
    taskList.push(task);
}
    //call the addTask function with some test data
    addTask("Finish Tutorial Exercises", "Use the Canvas summary to finish the exercises", "13/03/2022", "13/03/2022", 30)
    addTask("Start thinking about the assessment", "...", "20/03/2022", "20/03/2022", 60)
    
// Log out the overall array
console.log(taskList);
