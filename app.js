const form = document.querySelector('form')
const taskInput = document.querySelector('#task')
const taskHeading =document.querySelector('#task-title')

//submit
form.addEventListener('submit', runEvent)
//keyboard
//taskInput.addEventListener('keydown', runEvent)
//taskInput.addEventListener('keyup', runEvent)
//taskInput.addEventListener('keypress', runEvent)

//focus
taskInput.addEventListener('focus', runEvent)
taskInput.addEventListener('blur', runEvent)

//input
taskInput.addEventListener('cut', runEvent)
taskInput.addEventListener('paste', runEvent)
taskInput.addEventListener('input', runEvent)

function runEvent(event){
    console.log(event.type:${event.type})
    taskHeading.innerText = event.target.value
    event.preventDefault()
}