// console.log("Hello World from landingPage")

// Step 1: Create all my buttons using DOM

// Buttons: "Start"
const startBtn = document.createElement('button');
startBtn.setAttribute('id', 'startQuiz')

startBtn.innerText = 'START';

// Use the appendChild method to add the startBtn to the HTML body
document.body.appendChild(startBtn);

// Write a function that when the start button is clicked will load up Level 1

function beginQuiz (event){
    event.preventdefault
    window.location.href = "level1.html"
}

startBtn.addEventListener('click', beginQuiz);