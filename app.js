const formAddTodo = document.querySelector('[data-add]')
const inputSearchTodo = document.querySelector('[data-search]')
const todosContianer = document.querySelector('[data-todos]')

const addTodo = event => {
  event.preventDefault()
  
  const inputValue = event.target.add.value.trim()

  if (inputValue.length) {
    todosContianer.innerHTML += `
    <li data-todo="${inputValue}" class="list-group-item d-flex justify-content-between align-items-center">
     <span class="span">${inputValue}</span>
     <i data-delete="${inputValue}" class="far fa-trash-alt delete"></i>
    </li>`

    event.target.reset()
  }
}

const removeTodo = event => {
  const clickedElement = event.target
  const clicledDelete = clickedElement.dataset.delete

  if (clicledDelete) {
    document.querySelector(`[data-todo="${clicledDelete}"]`).remove()
  }
}

const hideTodo = (todoArray, inputValue) => {
  todoArray.
   filter(todo =>  !todo.textContent.toLowerCase().includes(inputValue))
   .forEach(todo => {
    todo.classList.remove('d-flex')
    todo.classList.add('hidden')
  })
}


const showTodo = (todoArray, inputValue) =>  {
  todoArray.
   filter(todo =>  todo.textContent.toLowerCase().includes(inputValue))
   .forEach(todo => {
    todo.classList.remove('hidden')
    todo.classList.add('d-flex')
  })
}


const searchTodo =  event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const todoArray = Array.from(todosContianer.children)

hideTodo(todoArray, inputValue)
showTodo(todoArray, inputValue)
}

formAddTodo.addEventListener('submit', addTodo)
todosContianer.addEventListener('click', removeTodo)
inputSearchTodo.addEventListener('input', searchTodo)

