document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const pendingList = document.getElementById('pending-list');
    const completedList = document.getElementById('completed-list');
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        const task = createTaskElement(taskText);
        pendingList.appendChild(task);
  
        taskInput.value = '';
        taskInput.focus();
      }
    }
  
    function createTaskElement(taskText) {
      const taskElement = document.createElement('li');
      const taskDate = new Date().toLocaleString();
  
      taskElement.innerHTML = `
        <span>${taskText}</span>
        <span>${taskDate}</span>
        <div class="actions">
          <button onclick="markComplete(this)">Done</button>
          <button onclick="editTask(this)">Edit</button>
          <button onclick="deleteTask(this)">Delete</button>
        </div>
      `;
  
      return taskElement;
    }
  
    window.addTask = addTask;
    window.markComplete = markComplete;
    window.editTask = editTask;
    window.deleteTask = deleteTask;
  
    function markComplete(button) {
      const taskElement = button.closest('li');
      const taskText = taskElement.querySelector('span').textContent;
      const completedTask = createTaskElement(taskText);
      completedList.appendChild(completedTask);
      taskElement.remove();
    }
  
    function editTask(button) {
      const taskElement = button.closest('li');
      const taskTextElement = taskElement.querySelector('span');
      const newTaskText = prompt('Edit Task:', taskTextElement.textContent);
  
      if (newTaskText !== null) {
        taskTextElement.textContent = newTaskText;
      }
    }
  
    function deleteTask(button) {
      const taskElement = button.closest('li');
      taskElement.remove();
    }
  });
  