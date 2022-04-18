const month_arr = ["January","February","March","April","May","June","July","August","September","October","November","December"]

const today = document.getElementById("today")
const clock = document.getElementById("clock")

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

function getToday() {
    const date = new Date()
    const month = month_arr[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    today.innerText = `${month} ${day}, ${year}`
}

getToday()
getClock()
setInterval(getClock, 1000)