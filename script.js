const btn = document.querySelectorAll(".btn-compleated");
const taskAssigned = document.getElementById("taskAssigned");
const taskCompleated = document.getElementById("taskCompleated");
const activityContainer = document.getElementById("activityContainer");
const changeColor = document.getElementById("changeColor");

let totalTasks = btn.length;
// console.log(totalTasks);

// assign task dynamically
taskAssigned.innerText = totalTasks;
let completedTaskCount = 0;
// console.log(btn);

for (let i = 0; i < btn.length; i++) {
  const element = btn[i];
  // console.log(element);

  element.addEventListener("click", function (event) {
    // console.log(event.target.innerText);

    completedTaskCount++;

    // Check if it's the last task
    if (completedTaskCount === totalTasks) {
      alert("Board updated sucessfully");
      alert("congrates!!! You have completed all the current tasks");
    } else {
      alert("Board updated sucessfully");
    }
    event.target.disabled = true;
    event.target.classList.add("opacity-50");

    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;
    taskCompleated.innerText = parseInt(taskCompleated.innerText) + 1;

    let now = new Date();
    let hours = now.getHours();
    // console.log(hours);

    let minutes = now.getMinutes();
    // console.log(minutes);
    let seconds = now.getSeconds();
    // console.log(seconds);
    let ampmFormate = hours >= 12 ? "PM" : "AM";
    // console.log(ampmFormate);
    hours = hours % 12 || 12;
    // console.log(hours);
    let activityTime = `${hours}:${minutes}:${seconds} ${ampmFormate}`;
    // console.log(time);
    let parentTask = event.target.parentNode.parentNode;
    // console.log(parentTask);

    let taskTitle = parentTask.querySelector(".task-title").innerText;
    // console.log(taskTitle);

    // Create actuvity div
    let activityDiv = document.createElement("div");
    activityDiv.className = "bg-[#F4F7FF] rounded-lg p-4 m-2";
    activityDiv.innerHTML = `<p class="text-sm opacity-70">You have completed the task <strong>${taskTitle}</strong> at ${activityTime}</p>`;

    activityContainer.appendChild(activityDiv);
  });
}

// Randon color
function getRandomColor() {
  let Red = Math.floor(Math.random() * 256);
  let Green = Math.floor(Math.random() * 256);
  let Blue = Math.floor(Math.random() * 256);

  return `rgb(${Red}, ${Green}, ${Blue})`;
}
// add event to change color
changeColor.addEventListener("click", function (event) {
  let randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

// show current date
let currentDate = new Date();

let formattedDate = currentDate.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
let weekDay = currentDate.toLocaleDateString("en-US", {
  weekday: "short",
});
// console.log(weekDay);

document.getElementById("localWeekday").innerText = weekDay + " ,";
document.getElementById("localDate").innerText = formattedDate;

// Clear history
const clearHistory = document.getElementById("clearHistory");

clearHistory.addEventListener("click", function (e) {
  activityContainer.innerHTML = "";
});
