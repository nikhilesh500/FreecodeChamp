/*
Closures
----------------------------------------------------------------
Closures is the combination of a function bundled together with its references to its surrounding state.
Closure gives access to an outer function's scope from an inner function
Closures allow you to create a function that can be called multiple times.
Closures are a great way to create reusable code.
*/

function TaskManager() {
  let tasks = [];

  function addTask(taskName) {
    tasks.push({ name: taskName, completed: false });
    renderTasks();
  }

  function completeTask(taskName) {
    const task = tasks.find(task => task.name === taskName);
    if (task) {
      task.completed = true;
      renderTasks();
    }
  }

  function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.name;
      if (task.completed) {
        li.classList.add('completed');
      }
      li.addEventListener('click', function() {
        completeTask(task.name);
      });
      taskList.appendChild(li);
    });
  }

  document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
      addTask(taskName);
      taskInput.value = ''; 
    }
  });

  return {
    addTask,
    completeTask
  };
}

const taskManager = TaskManager();
taskManager.addTask('Complete JavaScript closure example');
taskManager.addTask('Read a book');
taskManager.completeTask('Read a book');