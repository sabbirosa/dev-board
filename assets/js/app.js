const completedButtons = document.querySelectorAll('.completed-btn');
const clearHistoryButton = document.querySelector('.clear-history-btn');
const colorWheelButton = document.querySelector('.color-wheel-btn');
const taskCount = document.querySelector('.task-count');
const taskCompleted = document.querySelector('.task-completed');

clearHistoryButton.addEventListener('click', clearHistory);
colorWheelButton.addEventListener('click', changeColor);

completedButtons.forEach(button => {
  button.addEventListener('click', function() {

    alert('Board updated Successfully');

    const taskCountNumber = parseInt(taskCount.textContent);
    const completedCountNumber = parseInt(taskCompleted.textContent);

    taskCount.textContent = taskCountNumber - 1 < 10 ? `0${taskCountNumber - 1}` : taskCountNumber - 1;
    taskCompleted.textContent = completedCountNumber + 1;

    const button = this;
    button.disabled = true;

    const taskCard = this.closest('.task-card');
    const taskTitle = taskCard.querySelector('h3').textContent;
    addActivity(taskTitle);

  });
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
    console.log('Change color');
}