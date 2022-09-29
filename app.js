let val;

val = document.getElementById('task')

const taskTitle = document.getElementById('task-title')

taskTitle.style.background = '#000'
taskTitle.style.color = '#fff'
taskTitle.style.padding = '15px'

taskTitle.textContent = 'Defined Tasks'
taskTitle.innerText = 'My Tasks'
taskTitle.innerHTML ='<b>My Tasks</b>'

val = document.querySelector('#task-title')
val = document.querySelector('ul')
const task = document.querySelector('ul li')
task.style.color = 'blue'

val = document.querySelector('li:last-child')
//val = document.querySelector('li:nth-child(odd)').style.background = '#ccc'
//val = document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'

val = document.querySelectorAll('li')
oddLi = document.querySelectorAll('li:nth-child(odd)')
//val = document.querySelectorAll('li:nth-child(even)').style.background = '#f4f4f4'

oddLi.forEach((li) => {
    li.style.background = '#dddd'
})

console.log(val)