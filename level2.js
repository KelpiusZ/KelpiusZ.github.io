//////////////////////////////////////////////Level Two//////////////////////////

// console.log("Hello World from Level Two")

// Create the ojects that will hold the array of questions and answers
questions = [
    'Question 1: What is the original cladding material used on the ancient pyramids?',
    'Question 2: What is the original name of the Florence Cathedral?',
    'Question 3: Which of the following architects had a dual career as an architect and a poltician?',
    "Question 4: What was the Hagia Sophia originally built as?",
    'Question 5: Who ordered the construction of the Taj Mahal?',
]

answers = [
    [
        "A: Marble",
        "B: Limestone",
        "C: Granite",
        "D: Gold",
    ],

     [
        "A: Milano Cathedral",
        "B: St. Peter's Basilica",
        "C: Notre Dame Cathedral",
        "D: Santa Maria Del Fiore",
    ],

    [
        "A: Harvey Bernad Gantt",
        "B: Jean Nouvel",
        "C: Moshe Safdie",
        "D: Bjarke Ingles",
    ],

    [
        "A: Mosque",
        "B: Orthodox Christian Cathedral",
        "C: Museum",
        "D: Mausoleum",
    ],

    [
        "A: Mumtaz Mahal",
        "B: Akbar the Great",
        "C: Shah Jahan",
        "D: Khan Jahan Lodi",
    ]
]


// Create a paragraph that will hold the text of the question.
const questionOne = document.createElement('p');
const questionTwo = document.createElement('p');
const questionThree = document.createElement('p');
const questionFour = document.createElement('p');
const questionFive = document.createElement('p');

questionOne.innerText = `${questions[0]}`;
questionTwo.innerText = `${questions[1]}`;
questionThree.innerText = `${questions[2]}`;
questionFour.innerText = `${questions[3]}`;
questionFive.innerText = `${questions[4]}`;

questionOne.setAttribute('id', 'levelOneQOne');
questionTwo.setAttribute('id', 'levelOneQTwo');
questionThree.setAttribute('id', 'levelOneQThree');
questionFour.setAttribute('id', 'levelOneQFour');
questionFive.setAttribute('id', 'levelOneQFive');

// console.log(questionOne);
// console.log(questionTwo);
// console.log(questionThree);
// console.log(questionFour);
// console.log(questionFive);


// Create Buttons: "Choice A"; "Choice B"; "Choice C"; "Choice D"
const choiceA = document.createElement('button');
const choiceB = document.createElement('button');
const choiceC = document.createElement('button');
const choiceD = document.createElement('button');

// choiceA.innerText = `${answers.ansToQuestOne[0]}`;
// choiceB.innerText = `${answers.ansToQuestOne[1]}`;
// choiceC.innerText = `${answers.ansToQuestOne[2]}`;
// choiceD.innerText = `${answers.ansToQuestOne[3]}`;

choiceA.setAttribute('class', 'wrongAns');
choiceB.setAttribute('class', 'wrongAns');
choiceC.setAttribute('class', 'rightAns');
choiceD.setAttribute('class', 'wrongAns');

document.body.appendChild(choiceA);
document.body.appendChild(choiceB);
document.body.appendChild(choiceC);
document.body.appendChild(choiceD);

// console.log(choiceA);
// console.log(choiceB);
// console.log(choiceC);
// console.log(choiceD);

// Use the appendChild method to add to the HTML body

// document.body.appendChild(questionOne);
// document.body.appendChild(questionTwo);
// document.body.appendChild(questionThree);
// document.body.appendChild(questionFour);
// document.body.appendChild(questionFour);

//If user clicks on the "next" button it will load the next set of questions and choices
// create a button that will load up the next question

const nextBtn = document.createElement('button');
nextBtn.setAttribute('class', 'nextQuestion');
nextBtn.innerText = "Next";
document.body.appendChild(nextBtn);

// create a loop that goes thru the array of question.

let nextSetOfQuest = 0

nextQuest = () => {
    let divQuestion = document.querySelector(".currentQuestion");
    let newQuest =  questions[nextSetOfQuest];
    divQuestion.innerText = newQuest;
    
    let ansChoice = answers[nextSetOfQuest];
    choiceA.innerText = ansChoice[0];
    choiceB.innerText = ansChoice[1];
    choiceC.innerText = ansChoice[2];
    choiceD.innerText = ansChoice[3];

    nextSetOfQuest++
};

nextBtn.addEventListener('click', nextQuest)

// Create a tag for the level and the score.

const levelScore = document.createElement('h2');
const currentLevel = document.createElement('h2');

levelScore.setAttribute('class', 'lvlScore');
currentLevel.setAttribute('class', 'currentLvl')

levelScore.innerText = 'SCORE: 000';
currentLevel.innerText = 'LEVEL: 2';

document.body.appendChild(levelScore);
document.body.appendChild(currentLevel);


// Write a function that will increment the score when the correct answer is clicked.

let scoreCounter = 0;
const increaseScore = () => {
    scoreCounter += 10;
    if(scoreCounter < 50) {
        levelScore.innerHTML = `SCORE: 00${scoreCounter}`;
    } else if (scoreCounter < 100) {
        levelScore.innerHTML = `SCORE: 0${scoreCounter}`;
        window.location.href = 'level3.html';
    }
}



// Write a function that when turns the correct button choice to a question green and red if incorrect. Also the green button must add 10 points to the score when clicked.

let correctAns = document.querySelector('.rightAns');
let incorrectAns = document.querySelectorAll('.wrongAns');

correctAns.addEventListener('click', () => 
correctAns.style.background= "green",
// console.log("green")
);

correctAns.addEventListener('click', increaseScore)

for (let i = 0; i <incorrectAns.length; i++) {
incorrectAns[i].addEventListener('click', () => 
        incorrectAns[i].style.background = "red",
        // console.log("red"),
        // console.log(incorrectAns)
)}