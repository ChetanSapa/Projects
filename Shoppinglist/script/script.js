let taskText = document.getElementById("taskText");
let addTask = document.getElementById('addTask');
let taskList = document.getElementById('taskList');

addTask.addEventListener('click', function() {
    var li = document.createElement('li');
    li.innerText = taskText.value;
    taskList.appendChild(li);
    taskText.value = '';
    li.addEventListener('click', function () {
        li.classList.add('cool')
        li.style.textDecoration = 'line-through';
    })
    li.addEventListener('dblclick', function () {
        taskList.removeChild(li);
    })
});