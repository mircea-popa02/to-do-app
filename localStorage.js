let task = ``
let ids = []
let taskList = window.localStorage.getItem('myTaskList');
var arr = JSON.parse(taskList);

for (let i = 0; i < arr.length; i++) {
    let aux = "d_" + i;
    ids.push(aux);
    if (arr[i].comments == "") {
        task +=
        `<div class="task" id = ${ids[i]}>
            ${i + 1}. ${arr[i].input}
            <div class="delete" onclick="deleteTask(${arr[i].id})">
            Done
            <div class="check">
            <img src="./images/check.png"  alt="some" /> 
            </div>
            </div>
        </div>`;
    } else {
    task +=
    `<div class="task" id = ${ids[i]}>
        ${i + 1}. ${arr[i].input}
        <div class="comments">
            ${arr[i].comments}
        </div>
        <div class="delete" onclick="deleteTask(${arr[i].id})">
            Done
            <div class="check">
            <img src="./images/check.png"  alt="some" /> 
            </div>
        </div>
        
    </div>`;
    }
}
document.addEventListener("DOMContentLoaded", function(event) { 
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            document.getElementsByClassName("task")[i].style.backgroundColor = "#0b111c";
        }
    }
  });

document.getElementById(`msg`).innerHTML = task;

function deleteTask(id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            arr.splice(i, 1);
            localStorage.setItem('myTaskList', JSON.stringify(arr));
            location.reload();
        }
    }
}