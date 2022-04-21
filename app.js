const formAddTodo = document.querySelector('[data-add]')
const inputSearchTodo = document.querySelector('[data-search]')
const todosContainer = document.querySelector('[data-todos]')

const addTodo = event => {
  event.preventDefault()
  
  const inputValue = event.target.add.value.trim()

  if (inputValue.length) {
    todosContainer.innerHTML += `
      <li data-todo="${inputValue}" class="list-group-item d-flex justify-content-between align-items-center">
        <span class="span">${inputValue}</span>
        <i data-delete="${inputValue}" class="far fa-trash-alt delete"></i>
      </li>`

    event.target.reset()
  }
}

const removeTodo = event => {
  const clickedElement = event.target
  const trashWasClicked = clickedElement.dataset.delete
  
  if (trashWasClicked) {
    const todo = document.querySelector(`[data-todo="${trashWasClicked}"]`)
    todo.remove()
  }
}


const searchTodo =  event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const todos = Array.from(todosContainer.children).map(todo => ({
    todo,
    shouldBeVisible: todo.textContent.toLowerCase().includes(inputValue)
  }))

  todos.forEach(todo => {
    todo.todo.classList.remove(todo.shouldBeVisible ? 'hidden' : 'd-flex')
    todo.todo.classList.add(todo.shouldBeVisible ? 'd-flex' : 'hidden' )
  })
}

formAddTodo.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', removeTodo)
inputSearchTodo.addEventListener('input', searchTodo)
