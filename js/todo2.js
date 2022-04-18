const todoform = document.getElementById("todoform")
const todolist = document.querySelector("#todolist")
const todoInput = document.querySelector("input")

const TODOS_KEY = "todos"

let toDos = []

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) // change to string from whatever
}

function paintTodo(newTodo) { // object
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    li.id = newTodo.id
    span.innerText = newTodo.text
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    todolist.appendChild(li)
}

function deleteTodo(event) {
    const li = event.target.parentElement // which is <li>
    console.log(li)
    li.remove()
    console.log(toDos)
    toDos = toDos.filter((item)=>{
        return item.id !== parseInt(li.id)
    })
    saveTodos()
}

function onTodoSubmit(event) {
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodos()
}

todoform.addEventListener("submit", onTodoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos) { // if todo array is not empty (sth is saved in localStorage)
    const parsedTodos = JSON.parse(savedTodos)
    toDos = parsedTodos
    parsedTodos.forEach(item => {
        paintTodo(item)
    });
}

