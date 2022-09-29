const form = document.querySelector('form')
const taskInput = document.querySelector('#task')

form.addEventListener('submit', addTask)

function addTask(e){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'
    e.preventDefault()
    console.log(li)
}