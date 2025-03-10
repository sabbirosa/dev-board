const taskContainer = document.getElementById('task-container');
const clearHistoryButton = document.querySelector('.clear-history-btn');
const colorWheelButton = document.querySelector('.color-wheel-btn');
const taskCount = document.querySelector('.task-count');
const taskCompleted = document.querySelector('.task-completed');
const day = document.querySelector('.day');
const date = document.querySelector('.date');

day.textContent = new Date().toDateString().slice(0, 3);
date.textContent = new Date().toDateString().slice(4);

clearHistoryButton.addEventListener('click', clearHistory);
colorWheelButton.addEventListener('click', changeColor);


taskContainer.addEventListener('click', function(event) {

  const completedButton = event.target.closest('.completed-btn');
  
  if (completedButton && !completedButton.disabled) {
    
    alert('Board updated Successfully');

    const taskCountNumber = parseInt(taskCount.textContent);
    const completedCountNumber = parseInt(taskCompleted.textContent);

    taskCount.textContent = taskCountNumber - 1 < 10 ? `0${taskCountNumber - 1}` : taskCountNumber - 1;
    taskCompleted.textContent = completedCountNumber + 1;

    completedButton.disabled = true;

    const taskCard = completedButton.closest('.task-card');
    const taskTitle = taskCard.querySelector('h3').textContent;
    
    addActivity(taskTitle);

    if (taskCountNumber === 1) {
      alert('Congratulations! You have completed all the tasks');
    }
  }
});

function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amOrPm}`;
}

function addActivity(taskTitle) {

    const activity = `You have completed the task ${taskTitle} at ${getCurrentTime()}`;
    
    const activityElement = document.createElement('div');
    activityElement.classList.add('bg-secondary', 'p-5', 'rounded-lg');
    activityElement.textContent = activity;

    const activityContainer = document.querySelector('.activity-list');

    activityContainer.appendChild(activityElement);
}

function clearHistory() {
    const activityContainer = document.querySelector('.activity-list');
    activityContainer.innerHTML = '';
}

function changeColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}