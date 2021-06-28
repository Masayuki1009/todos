const form = document.querySelector('.add-form')
const todoContainer = document.querySelector('.todoContainer')
const add = document.querySelector('.add')
const todosInput = document.querySelector('.todosInput')


renderTodos();

function addItem(e) {
    e.preventDefault();
    const title = todosInput.value;
    if(title === '') {
        return
    }
    const option = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({ title }),
    }
    fetch('http://localhost:5000/todos', option)
          .then((response) => response.json())
          .then(() => {
            todosInput.value = "";
            renderTodos();
          });
}
//クリック時の反応をどう実装するか
function createTodoEl(todo) {
    const todoEl = document.createElement('li');
    todoEl.innerHTML = `Title: ${todo.title}`;
    todoEl.classList = `${todo.title}`;

    const editInput = document.createElement("input")
    editInput.value = `${todo.title}`;
    editInput.id = todo.id;
    editInput.maxLength = "15";
    editInput.style.display = "none";

    const deleteEL = document.createElement('button');
    deleteEL.classList = "delete";
    deleteEL.innerHTML = "delete";
    deleteEL.style.display = "inline-block";
    deleteEL.id = todo.id;
    const id = deleteEL.id
    deleteEL.addEventListener('click', deleteTodos);

    const editEL = document.createElement('button');
    editEL.innerHTML = "edit";
    editEL.addEventListener('click', () => {
      //テキスト変更
      todoEl.innerHTML = "";
      todoEl.appendChild(editInput)
      todoEl.appendChild(deleteEL)
      todoEl.appendChild(editEL)
      todoEl.appendChild(saveEL)
      todoEl.appendChild(cancelEL)

      editInput.style.display = "inline-block";
      deleteEL.style.display = "none";
      editEL.style.display = "none";
      saveEL.style.display = "inline-block";
      cancelEL.style.display = "inline-block";
      cancelEL.addEventListener('click', () => {
        todoEl.innerHTML = `Title: ${todo.title}`;
        todoEl.appendChild(editInput)
        todoEl.appendChild(deleteEL)
        todoEl.appendChild(editEL)
        todoEl.appendChild(saveEL)
        todoEl.appendChild(cancelEL)

        editInput.style.display = "none";
        cancelEL.style.display = "none";
        editEL.style.display = "inline-block";
        deleteEL.style.display = "inline";
        saveEL.style.display = "none";
      })

    })

    const saveEL = document.createElement('button');
    saveEL.classList = "delete";
    saveEL.innerHTML = "save";
    saveEL.style.display = "none";
    saveEL.addEventListener('click', () => {
      todoEl.innerHTML = `Title: ${todo.title}`;
        todoEl.appendChild(editInput)
        todoEl.appendChild(deleteEL)
        todoEl.appendChild(editEL)
        todoEl.appendChild(saveEL)
        todoEl.appendChild(cancelEL)
      editInput.style.display = "none";
      saveEL.style.display = "none";
      cancelEL.style.display = "none"
      editEL.style.display = "inline-block";
      deleteEL.style.display = "inline-block";
      editText = editInput.value
      editId = editInput.id
      editTodos(editText, editId);
    })

    const cancelEL = document.createElement('button');
    cancelEL.innerHTML = "cancel";
    cancelEL.style.display = "none";
    
    todoEl.appendChild(editInput)
    todoEl.appendChild(deleteEL)
    todoEl.appendChild(editEL)
    todoEl.appendChild(saveEL)
    todoEl.appendChild(cancelEL)

    console.log(todoEl)
    return todoEl;
}



function editTodos(editText, editId) {
  const option = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({ editText }),
}
fetch(`http://localhost:5000/todos/${editId}`, option)
      .then((response) => response.json())
      .then(() => {
        todoContainer.innerHTML = "";
        renderTodos();
})
}

function deleteTodos() {
  const id = this.id;
  const option = {
    method: 'DELETE',
    headers: {}
}
fetch(`http://localhost:5000/todos/${id}`, option)
      .then((response) => response.json())
      .then(() => {
        todoContainer.innerHTML = "";
        renderTodos();
})
}

function renderTodos() {
    //   reset all todos
    todoContainer.innerHTML = '';

    // prepare http request
    const option = {
      method: 'GET',
      headers: {},
    };

    fetch('http://localhost:5000/todos', option)
      .then((response) => response.json())
      .then((todos) => {
        todos.forEach((todo) => {
          todoContainer.appendChild(createTodoEl(todo));
        });
      });
  }


//edit


form.addEventListener('submit', addItem)
