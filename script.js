const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;

  const btnDiv = document.createElement('div');
  btnDiv.classList.add('task-buttons');

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');
  editBtn.onclick = () => editTask(span);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = () => li.remove();

  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnDiv);
  taskList.appendChild(li);

  taskInput.value = '';
}

function editTask(span) {
  const newText = prompt('Edit your task:', span.textContent);
  if (newText !== null && newText.trim() !== '') {
    span.textContent = newText.trim();
  }
}
