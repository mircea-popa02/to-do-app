let tasks = JSON.parse(localStorage.getItem('myTaskList')) || []

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

    tasks.push(task)
    document.forms[0].reset()

    localStorage.setItem('myTaskList', JSON.stringify(tasks) )
    location.reload()
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addTask);
});

var element = document.getElementById("input");
element.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    addMovie(event);
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
