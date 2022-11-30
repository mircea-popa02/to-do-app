let task = ``
let ids = []
let taskList = window.localStorage.getItem('myTaskList') || [];
if (taskList.length > 0) {
    var tasks = JSON.parse(taskList);
} else {
    var tasks = [];
}

let completedtasks = window.localStorage.getItem('myCompletedTasks') || [];
if (window.localStorage.getItem('myCompletedTasks') == null) {
    completeTasks = [];
} else {
    var completeTasks = JSON.parse(completedtasks);
}


const changeToActive = (ev) => {
    task = ``
    if (tasks.length == 0) {
        task += `<div class="task">No active tasks</div>`
    }
    for (let i = 0; i < tasks.length; i++) {
        let aux = "d_" + i;
        ids.push(aux);
        if (tasks[i].comments == "") {
            task +=
            `<div class="task" id = ${ids[i]}>
                ${i + 1}. ${tasks[i].input}
                <button id="done" onclick="deleteTask(${tasks[i].id})">
                Done
                <div class="check">
                <img src="./images/check.png"  alt="some" /> 
                </div>
                </button>
            </div>`;
        } else {
        task +=
        `<div class="task" id = ${ids[i]}>
            ${i + 1}. ${tasks[i].input}
            <div ondblclick="this.contentEditable=true;this.className='inEdit';" onblur="this.contentEditable=false;this.className='';" contenteditable="false" id="task-details">
                ${tasks[i].comments}
            </div>
            <button id="done" onclick="deleteTask(${tasks[i].id})">
                Done
                <div class="check">
                <img src="./images/check.png"  alt="some" /> 
                </button>
            </div>
            
        </div>`;
        }
    }
    document.getElementById(`msg`).innerHTML = task;
    for (let i = 0; i < tasks.length; i++) {
        if (i % 2 == 0) {
            document.getElementsByClassName("task")[i].style.backgroundColor = "#0b111c";
        }
    }
}

const changeToAll = (ev) => {
    task = ``

    if (tasks.length == 0 && completeTasks.length == 0) {
        task += `<div class="task">New tasks will be added here</div>`
    }
    let aux;
    for (let i = 0; i < tasks.length; i++) {
        aux = "d_" + i;
        ids.push(aux);
        if (tasks[i].comments == "") {
            task +=
            `<div class="task" id = ${ids[i]}>
                ${i + 1}. ${tasks[i].input}
                <button id="done" onclick="deleteTask(${tasks[i].id})">
                Done
                <div class="check">
                <img src="./images/check.png"  alt="some" /> 
                </div>
                </button>
            </div>`;
        } else {
        task +=
        `<div class="task" id = ${ids[i]}>
            ${i + 1}. ${tasks[i].input}
            <div ondblclick="this.contentEditable=true;this.className='inEdit';" onblur="this.contentEditable=false;this.className='';" contenteditable="false" id="task-details">
                ${tasks[i].comments}
            </div>
            <button id="done" onclick="deleteTask(${tasks[i].id})">
                Done
                <div class="check">
                <img src="./images/check.png"  alt="some" /> 
                </button>
            </div>
            
        </div>`;
        }
    }

    if (completeTasks.length > 0 && tasks.length > 0) {
        task += `<div class="line"></div>`
        task += `<div class="completed">Completed</div>`
    }

    for (let i = 0; i < completeTasks.length; i++) {
        aux = "d_" + i;
        ids.push(aux);
        if (completeTasks[i].comments == "") {
            task +=
            `<div class="task" id = ${ids[i]}>
                ${i + 1}. ${completeTasks[i].input}
                <button id="delete" onclick="removeTask(${completeTasks[i].id})">
                Delete
                <div class="check">
                <img src="./images/cross.png"  alt="some" /> 
                </div>
                </button>
            </div>`;
        } else {
        task +=
        `<div class="task" id = ${ids[i]}>
            ${i + 1}. ${completeTasks[i].input}
            <div ondblclick="this.contentEditable=true;this.className='inEdit';" onblur="this.contentEditable=false;this.className='';" contenteditable="false" id="task-details-orange">
                ${completeTasks[i].comments}
            </div>
            <button id="delete" onclick="removeTask(${completeTasks[i].id})">
                Delete
                <div class="check">
                <img src="./images/cross.png"  alt="some" /> 
                </div>
            </button>
        </div>`;
        }
    }

    document.getElementById(`msg`).innerHTML = task;
    for (let i = 0; i < completeTasks.length + tasks.length; i++) {
        if (i % 2 == 0) {
            document.getElementsByClassName("task")[i].style.backgroundColor = "#0b111c";
        }
    }
}

const changeToCompleted = (ev) => {
    task = ``
    if (completeTasks.length == 0) {
        task += `<div class="task">No completed tasks</div>`
    }
    for (let i = 0; i < completeTasks.length; i++) {
        let aux = "d_" + i;
        ids.push(aux);
        if (completeTasks[i].comments == "") {
            task +=
            `<div class="task" id = ${ids[i]}>
                ${i + 1}. ${completeTasks[i].input}
                <button id="delete" onclick="removeTask(${completeTasks[i].id})">
                Delete
                <div class="check">
                <img src="./images/cross.png"  alt="some" /> 
                </div>
                </button>
            </div>`;
        } else {
        task +=
        `<div class="task" id = ${ids[i]}>
            ${i + 1}. ${completeTasks[i].input}
            <div ondblclick="this.contentEditable=true;this.className='inEdit';" onblur="this.contentEditable=false;this.className='';" contenteditable="false" id="task-details-orange">
                ${completeTasks[i].comments}
            </div>
            <button id="delete" onclick="removeTask(${completeTasks[i].id})">
                Delete
                <div class="check">
                <img src="./images/cross.png"  alt="some" /> 
                </div>
            </button>
        </div>`;
        }
    }
    
    document.getElementById(`msg`).innerHTML = task;
    for (let i = 0; i < completeTasks.length; i++) {
        if (i % 2 == 0) {
            document.getElementsByClassName("task")[i].style.backgroundColor = "#0b111c";
        }
    }
}

function deleteTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            let task = {
                id: tasks[i].id,
                input: tasks[i].input,
                comments: tasks[i].comments
            }
            completeTasks.push(task)
            localStorage.setItem('myCompletedTasks', JSON.stringify(completeTasks));
            tasks.splice(i, 1);
            localStorage.setItem('myTaskList', JSON.stringify(tasks));
            location.reload();
        }
    }
}

function removeTask(id) {
    for (let i = 0; i < completeTasks.length; i++) {
        if (completeTasks[i].id == id) {
            completeTasks.splice(i, 1);
            localStorage.setItem('myCompletedTasks', JSON.stringify(completeTasks));
            location.reload();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('completed-btn').addEventListener('click', changeToCompleted);
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('active-btn').addEventListener('click', changeToActive);
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('all-btn').addEventListener('click', changeToAll);
});

changeToAll()