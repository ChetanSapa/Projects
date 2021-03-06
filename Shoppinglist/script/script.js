let taskText = document.getElementById("taskText");
let addTask = document.getElementById('addTask');
let taskList = document.getElementById('taskList');

let todoList = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

addTask.addEventListener('click', function () {

    let newTodo = {
        todo: taskText.value
    };

    todoList.push(newTodo);
    displayMessages();
    taskText.value = '';
    localStorage.setItem('todo', JSON.stringify(todoList));


    // let liEl = document.createElement('li');
    // liEl.innerText = taskText.value;
    // taskList.appendChild(liEl);
    // taskText.value = '';
    // liEl.addEventListener('click', function () {
    //     liEl.classList.add('cool')
    //     liEl.style.textDecoration = 'line-through';
    // })
    // liEl.addEventListener('dblclick', function () {
    //     taskList.removeChild(liEl);
    // })
});

function displayMessages() {
    let displayMessage = '';
    if (todoList.length === 0) taskList.innerHTML = '';
    todoList.forEach(function (item, i) {
        displayMessage += `
        <li id="${i}">
            ${item.todo}
        </li>
        `;
        taskList.innerHTML = displayMessage;
    });
}

taskList.addEventListener('click', function (event) {
    event.preventDefault()
    let liEl = event.target;
    liEl.classList.add('cool')
    liEl.style.textDecoration = 'line-through';
})

taskList.addEventListener("dblclick", function (event) {
        let i = event.target.id;
        todoList.splice(i, 1);
        displayMessages();
        localStorage.setItem('todo', JSON.stringify(todoList));
})
