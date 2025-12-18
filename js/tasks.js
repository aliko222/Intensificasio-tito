// ============================================
// GESTIÓN DE TAREAS (TO-DO LIST)
// ============================================

const TASKS_KEY_PREFIX = "cookietap_tasks_";

/**
 * Obtiene todas las tareas del usuario actual
 */
function getUserTasks(username) {
  const key = TASKS_KEY_PREFIX + username;
  const tasks = localStorage.getItem(key);
  return tasks ? JSON.parse(tasks) : [];
}

/**
 * Guarda las tareas del usuario actual
 */
function saveUserTasks(username, tasks) {
  const key = TASKS_KEY_PREFIX + username;
  localStorage.setItem(key, JSON.stringify(tasks));
}

/**
 * Agrega una nueva tarea
 */
function addTask(username, taskText) {
  if (!taskText || taskText.trim() === "") {
    return false;
  }

  const tasks = getUserTasks(username);
  const newTask = {
    id: Date.now(), // ID único basado en timestamp
    text: taskText.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  saveUserTasks(username, tasks);
  return newTask;
}

/**
 * Elimina una tarea por ID
 */
function deleteTask(username, taskId) {
  const tasks = getUserTasks(username);
  const filteredTasks = tasks.filter(task => task.id !== taskId);
  saveUserTasks(username, filteredTasks);
}

/**
 * Marca o desmarca una tarea como completada
 */
function toggleTaskComplete(username, taskId) {
  const tasks = getUserTasks(username);
  const task = tasks.find(task => task.id === taskId);
  
  if (task) {
    task.completed = !task.completed;
    saveUserTasks(username, tasks);
    return task.completed;
  }
  
  return false;
}

/**
 * Renderiza todas las tareas en el DOM
 */
function renderTasks(username) {
  const tasks = getUserTasks(username);
  const tasksList = document.getElementById("tasksList");
  
  // Limpiar lista actual
  tasksList.innerHTML = "";
  
  // Si no hay tareas, mostrar mensaje
  if (tasks.length === 0) {
    tasksList.innerHTML = '<li class="no-tasks">No tenés tareas pendientes. ¡Agregá una nueva!</li>';
    return;
  }
  
  // Renderizar cada tarea
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task-item";
    if (task.completed) {
      li.classList.add("completed");
    }
    
    // Checkbox para marcar como completada
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      toggleTaskComplete(username, task.id);
      renderTasks(username);
    });
    
    // Texto de la tarea
    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task.text;
    taskText.addEventListener("click", () => {
      toggleTaskComplete(username, task.id);
      renderTasks(username);
    });
    
    // Botón eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "task-delete";
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.title = "Eliminar tarea";
    deleteBtn.addEventListener("click", () => {
      deleteTask(username, task.id);
      renderTasks(username);
    });
    
    // Ensamblar elementos
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    tasksList.appendChild(li);
  });
}

/**
 * Inicializa el sistema de tareas
 */
function initTasksSystem() {
  const session = getSession();
  
  if (!session || !session.isLogged) {
    return;
  }
  
  const username = session.username;
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  
  // Renderizar tareas al cargar
  renderTasks(username);
  
  // Evento click en botón agregar
  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value;
    
    if (addTask(username, taskText)) {
      taskInput.value = ""; // Limpiar input
      renderTasks(username);
    } else {
      showTaskError("No podés agregar una tarea vacía");
    }
  });
  
  // Evento Enter en el input
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });
}

/**
 * Muestra un mensaje de error
 */
function showTaskError(message) {
  const errorElement = document.getElementById("taskError");
  if (errorElement) {
    errorElement.textContent = message;
    setTimeout(() => {
      errorElement.textContent = "";
    }, 3000);
  }
}