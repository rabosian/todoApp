const todoform = document.getElementById("todoform")
const todolist = document.querySelector("#todolist")
const todoInput = document.querySelector("input")

function onTodoSubmit(event) {
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ""
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    span.innerText = newTodo
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    todolist.appendChild(li)
}

function deleteTodo(event) {
    const li = event.target.parentElement
    li.remove()
}

todoform.addEventListener("submit", onTodoSubmit)