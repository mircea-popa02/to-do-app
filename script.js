let myTasks = JSON.parse(localStorage.getItem('myTaskList')) || []

const addTask = (ev) => {
    ev.preventDefault()
    let task = {
        id: Date.now(),
        input: document.getElementById('input').value,
        comments: document.getElementById('comments').value
    }
    if (task.input == "") {
        alert("Please enter a task");
        return;
    }

    myTasks.push(task)
    document.forms[0].reset()

    localStorage.setItem('myTaskList', JSON.stringify(myTasks) )
    location.reload()
}

const addTaskMobile = (ev) => {
    ev.preventDefault()
    let task = {
        id: Date.now(),
        input: document.getElementById('input-mobile').value,
        comments: document.getElementById('comments-mobile').value
    }
    if (task.input == "") {
        alert("Please enter a task");
        return;
    }

    myTasks.push(task)
    document.forms[0].reset()

    localStorage.setItem('myTaskList', JSON.stringify(myTasks) )
    location.reload()
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addTask);
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-mobile').addEventListener('click', addTaskMobile);
});


var element = document.getElementById("input");
element.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    addTask(event);
    event.preventDefault();
    }
});

var element = document.getElementById("input-mobile");
element.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    addTaskMobile(event);
    event.preventDefault();
    }
});

var element = document.getElementById("comments");
element.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    addTask(event);
    event.preventDefault();
    }
});

var element = document.getElementById("comments-mobile");
element.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    addTaskMobile(event);
    event.preventDefault();
    }
});
