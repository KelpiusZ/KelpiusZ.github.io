// console.log("Hello To You World from scarp")

//////////////////////////////////////////////Landing Page//////////////////////////

// Step 1: Create all my buttons using DOM

// Buttons: "Start"; "Choice A"; "Choice B"; "Choice C"; "Choice D"
// const startBtn = document.createElement('button');
// startBtn.innerText = 'START';

// Use the appendChild method to add the startBtn to the HTML body
// document.body.appendChild(startBtn);

//////////////////////////////////////////////Level One//////////////////////////

// console.log("Hello World from Level One")

// Create the ojects that will hold the array of questions and answers



// Create a paragraph that will hold the text of the question.
const questionOne = document.createElement('p');
const questionTwo = document.createElement('p');
const questionThree = document.createElement('p');
const questionFour = document.createElement('p');
const questionFive = document.createElement('p');

questionOne.innerText = 'Random question about architecture?';
questionTwo.innerText = 'Random question about architecture?';
questionThree.innerText = 'Random question about architecture?';
questionFour.innerText = 'Random question about architecture?';
questionFive.innerText = 'Random question about architecture?';

// Create Buttons: "Choice A"; "Choice B"; "Choice C"; "Choice D"
const choiceA = document.createElement('button');
const choiceB = document.createElement('button');
const choiceC = document.createElement('button');
const choiceD = document.createElement('button');

choiceA.innerText = 'A:';
choiceB.innerText = 'B:';
choiceC.innerText = 'C:';
choiceD.innerText = 'D:';

// Use the appendChild method to add to the HTML body
document.body.appendChild(questionOne);
document.body.appendChild(questionTwo);
document.body.appendChild(questionThree);
document.body.appendChild(questionFour);
document.body.appendChild(questionFour);

document.body.appendChild(choiceA);
document.body.appendChild(choiceB);
document.body.appendChild(choiceC);
document.body.appendChild(choiceD);
