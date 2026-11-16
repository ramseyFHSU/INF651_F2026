"use strict";

// The browser keeps a copy of the tasks so they are still here after a refresh.
const STORAGE_KEY = "fhsu-study-planner-tasks";

// Find the HTML elements that JavaScript needs to read or update.
const taskForm = document.querySelector("#task-entry-form");
const taskTitleInput = document.querySelector("#task-title");
const taskCourseInput = document.querySelector("#task-course");
const taskDateInput = document.querySelector("#task-date");
const taskPriorityInput = document.querySelector("#task-priority");
const taskFilter = document.querySelector("#task-filter");
const taskList = document.querySelector("#task-list");
const taskTemplate = document.querySelector("#task-template");
const emptyMessage = document.querySelector("#empty-message");
const totalCount = document.querySelector("#total-count");
const dueTodayCount = document.querySelector("#due-today-count");
const completedCount = document.querySelector("#completed-count");

// Turn a Date into the YYYY-MM-DD format used by date inputs.
function dateToInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return year + "-" + month + "-" + day;
}

// Starting tasks make it easier to see the planner before adding your own.
function createSampleTasks() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return [
    {
      id: 1,
      title: "Review promises and fetch notes",
      course: "JavaScript",
      dueDate: dateToInputValue(today),
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Complete statistics worksheet",
      course: "Research Methods",
      dueDate: dateToInputValue(tomorrow),
      priority: "Medium",
      completed: false,
    },
    {
      id: 3,
      title: "Read the chapter on arrays",
      course: "JavaScript",
      dueDate: dateToInputValue(today),
      priority: "Low",
      completed: true,
    },
  ];
}

// Read saved tasks. If there are none, use the three starting tasks.
function loadTasks() {
  try {
    const savedText = localStorage.getItem(STORAGE_KEY);

    if (savedText) {
      const savedTasks = JSON.parse(savedText);

      if (Array.isArray(savedTasks)) {
        return savedTasks;
      }
    }
  } catch (error) {
    console.warn(
      "Saved tasks could not be loaded. Starting with sample tasks.",
      error,
    );
  }

  return createSampleTasks();
}

// Keep the task data in an array while the page is open.
let tasks = loadTasks();

// Save the array as text in the browser's local storage.
function saveTasks() {
  try {
    const taskText = JSON.stringify(tasks);
    localStorage.setItem(STORAGE_KEY, taskText);
  } catch (error) {
    console.warn(
      "Tasks are available until the page is closed, but could not be saved.",
      error,
    );
  }
}

// Turn YYYY-MM-DD into a shorter date for the task card.
function formatDueDate(dateValue) {
  const parts = dateValue.split("-");
  const date = new Date(parts[0], parts[1] - 1, parts[2]);

  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

// Pick the CSS badge class that matches a task's priority.
function getPriorityClass(priority) {
  if (priority === "High") {
    return "priority-high";
  }

  if (priority === "Low") {
    return "priority-low";
  }

  return "priority-medium";
}

// Recalculate the three numbers at the top of the page.
function updateSummary() {
  const today = dateToInputValue(new Date());

  const tasksDueToday = tasks.filter(function (task) {
    return task.dueDate === today && task.completed === false;
  });

  const completedTasks = tasks.filter(function (task) {
    return task.completed === true;
  });

  totalCount.textContent = tasks.length;
  dueTodayCount.textContent = tasksDueToday.length;
  completedCount.textContent = completedTasks.length;
}

// Draw task cards from the data in the tasks array.
function renderTasks() {
  taskList.textContent = "";

  const selectedFilter = taskFilter.value;
  const visibleTasks = tasks.filter(function (task) {
    if (selectedFilter === "pending") {
      return task.completed === false;
    }

    if (selectedFilter === "completed") {
      return task.completed === true;
    }

    return true;
  });

  visibleTasks.forEach(function (task) {
    // Clone the HTML template, then fill its empty spots with this task's data.
    const taskCard = taskTemplate.content.firstElementChild.cloneNode(true);
    const title = taskCard.querySelector(".task-title");
    const course = taskCard.querySelector(".task-course");
    const dueDate = taskCard.querySelector(".task-due-date");
    const badge = taskCard.querySelector(".priority-badge");
    const toggleButton = taskCard.querySelector(".task-toggle");

    title.textContent = task.title;
    course.textContent = task.course;
    dueDate.textContent = "Due " + formatDueDate(task.dueDate);

    if (task.completed) {
      taskCard.classList.add("completed-task");
      badge.classList.add("priority-complete");
      badge.textContent = "Completed";
      toggleButton.textContent = "Mark pending";
    } else {
      badge.classList.add(getPriorityClass(task.priority));
      badge.textContent = task.priority;
      toggleButton.textContent = "Mark complete";
    }

    toggleButton.setAttribute("aria-pressed", String(task.completed));

    // Clicking the button changes the task, saves it, and redraws the list.
    toggleButton.addEventListener("click", function () {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    taskList.appendChild(taskCard);
  });

  if (visibleTasks.length === 0) {
    if (tasks.length === 0) {
      emptyMessage.textContent =
        "No study tasks yet. Add one using the form above.";
    } else {
      emptyMessage.textContent = "No tasks match this filter.";
    }
    emptyMessage.classList.remove("d-none");
  } else {
    emptyMessage.classList.add("d-none");
  }

  updateSummary();
}

// Add a task when the form is submitted.
taskForm.addEventListener("submit", function (event) {
  // Stop the browser from refreshing the page after a form submission.
  event.preventDefault();

  const taskName = taskTitleInput.value.trim();

  if (taskName === "") {
    taskTitleInput.value = "";
    taskTitleInput.focus();
    taskForm.reportValidity();
    return;
  }

  const newTask = {
    id: Date.now(),
    title: taskName,
    course: taskCourseInput.value,
    dueDate: taskDateInput.value,
    priority: taskPriorityInput.value,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();

  taskForm.reset();
  taskFilter.value = "all";
  renderTasks();
  taskTitleInput.focus();
});

// Re-render the list when the user picks a different filter.
taskFilter.addEventListener("change", renderTasks);

// Save the starting or previously saved tasks, then show them on the page.
saveTasks();
renderTasks();
