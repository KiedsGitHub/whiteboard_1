document.getElementById('task-form').addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    const priority = document.getElementById('task-priority').value;

    if (!title) {
        alert('Task title is required.');
        return;
    }

    const task = document.createElement('li');
    task.classList.add('task', priority);
    task.innerHTML = `<span>${title}: ${desc}</span>
                      <div>
                          <button onclick="completeTask(this)">Complete</button>
                          <button onclick="editTask(this)">Edit</button>
                          <button onclick="deleteTask(this)">Delete</button>
                      </div>`;
    document.getElementById('task-list').appendChild(task);

    document.getElementById('task-form').reset();
}

function completeTask(button) {
    button.parentElement.parentElement.classList.toggle('completed');
}

function editTask(button) {
    const task = button.parentElement.parentElement;
    const taskContent = task.querySelector('span').textContent.split(':');
    const title = taskContent[0].trim();
    const desc = taskContent[1].trim();

    // Pre-fill the form with the current task details
    document.getElementById('task-title').value = title;
    document.getElementById('task-desc').value = desc;
    
    // Remove the task from the list so it can be re-added after editing
    task.remove();
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}