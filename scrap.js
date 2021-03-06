// console.log("Hello To You World from scarp")

//////////////////////////////////////////////Landing Page//////////////////////////

// Step 1: Create all my buttons using DOM

// Buttons: "Start"
// const startBtn = document.createElement('button');
// startBtn.innerText = 'START';

// Use the appendChild method to add the startBtn to the HTML body
// document.body.appendChild(startBtn);

//////////////////////////////////////////////Level One//////////////////////////

// console.log("Hello World from Level One")

// Create the ojects that will hold the array of questions and answers
questionsArray = [
    {
        question: 'Question 1: Which architect came up with the quote, "Less is a bore"?',
        answers: [
            "A: Zaha Hadid",
            "B: Le Corbsier",
            "C: Robert Venturi",
            "D: Frank Gehry"
        ],
        correctAns: "C: Robert Venturi"
    },

    {
        question: 'Question 2: Which building is the second tallest building in the world?',
        answers: [
            "A: Lotte World Tower",
            "B: Shanghai Tower",
            "C: Burj Khalifa",
            "D: One World Trade Center"
        ],
        correctAns: "B: Shanghai Tower"
    },

    {
        question: 'Question 3: Which female architect was the first to win the Pritzker Architecture Prize?',
        answers: [
            "A: Zaha Hadid",
            "B: Kazuyo Sejima",
            "C: Carme Pigem",
            "D: Yvonne Farrell"
        ],
        correctAns: "A: Zaha Hadid"
    },

    {
        question: "Question 4: Which of these is the world's tallest circular building?",
        answers:[
            "A: Al Dar Headquaters",
            "B: Phoenix International Media Center",
            "C: The Guangzhou Circle",
            "D: Radcliffe Camera"
        ],
        correctAns: "C: The Guangzhou Circle"
    },

    {
        question: 'Question 5: Which of these architects designed Fallingwater?',
        answers:[
            "A: Renzo Piano",
            "B: Frank Gehry",
            "C: Ole Scheeren",
            "D: Frank Lloyd Wright",
        ],
        correctAns: "D: Frank Lloyd Wright"
    }
]


// questions = [
//     'Question 1: Which architect came up with the quote, "Less is a bore"?',
//     'Question 2: Which building is the second tallest building in the world?',
//     'Question 3: Which female architect was the first to win the Pritzker Architecture Prize?',
//     "Question 4: Which of these is the world's tallest circular building?",
//     'Question 5: Which of these architects designed Fallingwater?',
// ]

// answers = [
//     [
//         "A: Zaha Hadid",
//         "B: Le Corbsier",
//         "C: Robert Venturi",
//         "D: Frank Gehry",
//     ],

//      [
//         "A: Lotte World Tower",
//         "B: Shanghai Tower",
//         "C: Burj Khalifa",
//         "D: One World Trade Center",
//     ],

//     [
//         "A: Zaha Hadid",
//         "B: Kazuyo Sejima",
//         "C: Carme Pigem",
//         "D: Yvonne Farrell",
//     ],

//     [
//         "A: Al Dar Headquaters",
//         "B: Phoenix International Media Center",
//         "C: The Guangzhou Circle",
//         "D: Radcliffe Camera",
//     ],

//     [
//         "A: Renzo Piano",
//         "B: Frank Gehry",
//         "C: Ole Scheeren",
//         "D: Frank Lloyd Wright",
//     ]
// ]


// Create a paragraph that will hold the text of the question.
const questionOne = document.createElement('p');
const questionTwo = document.createElement('p');
const questionThree = document.createElement('p');
const questionFour = document.createElement('p');
const questionFive = document.createElement('p');

questionOne.innerText = `${questionsArray[0].question}`;
questionTwo.innerText = `${questionsArray[1].question}`;
questionThree.innerText = `${questionsArray[2].question}`;
questionFour.innerText = `${questionsArray[3].question}`;
questionFive.innerText = `${questionsArray[4].question}`;

// questionOne.setAttribute('id', 'levelOneQOne');
// questionTwo.setAttribute('id', 'levelOneQTwo');
// questionThree.setAttribute('id', 'levelOneQThree');
// questionFour.setAttribute('id', 'levelOneQFour');
// questionFive.setAttribute('id', 'levelOneQFive');


// Create Buttons: "Choice A"; "Choice B"; "Choice C"; "Choice D"
const choiceA = document.createElement('button');
const choiceB = document.createElement('button');
const choiceC = document.createElement('button');
const choiceD = document.createElement('button');

choiceA.setAttribute('id', 'buttonA');
choiceB.setAttribute('id', 'buttonB');
choiceC.setAttribute('id', 'buttonC');
choiceD.setAttribute('id', 'buttonD');

choiceA.setAttribute('class', 'Answer');
choiceB.setAttribute('class', 'Answer');
choiceC.setAttribute('class', 'Answer');
choiceD.setAttribute('class', 'Answer');

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
let currentQuest = {}

nextQuest = (event) => {
    currentQuest = questionsArray[nextSetOfQuest]
    let divQuestion = document.querySelector(".currentQuestion");
    let newQuest =  questionsArray[nextSetOfQuest].question;
    divQuestion.innerText = newQuest;
    
    let ansChoice = questionsArray[nextSetOfQuest].answers;
    choiceA.innerText = ansChoice[0];
    choiceB.innerText = ansChoice[1];
    choiceC.innerText = ansChoice[2];
    choiceD.innerText = ansChoice[3];

    // let button = document.querySelector(`${event.target.id}`)
    // button.style.background = "lightskyblue"

    resetBtnColor()
    nextSetOfQuest++
};

nextBtn.addEventListener('click', nextQuest)


checkAns = (event) => {
    console.log(event.target.innerText)
    console.log(currentQuest)
    if (event.target.innerText === currentQuest.correctAns) {
        let button = document.querySelector(`#${event.target.id}`)
        button.style.background = "green"
        increaseScore()
    } else {
        let button = document.querySelector(`#${event.target.id}`);
        button.style.background = "red"
    }
}

choiceA.addEventListener('click', checkAns);
choiceB.addEventListener('click', checkAns);
choiceC.addEventListener('click', checkAns);
choiceD.addEventListener('click', checkAns);


//create function that will take no parameters to find all 4 buttons to loop and set background color to skyblue

// Create a tag for the level and the score.
resetBtnColor = () => {
   let buttons =  document.querySelectorAll(".Answer");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = "lightskyblue"
    }
} 



const levelScore = document.createElement('h2');
const currentLevel = document.createElement('h2');

levelScore.setAttribute('class', 'lvlScore');
currentLevel.setAttribute('class', 'currentLvl')

levelScore.innerText = 'SCORE: 000';
currentLevel.innerText = 'LEVEL: 1';

document.body.appendChild(levelScore);
document.body.appendChild(currentLevel);


// Write a function that will increment the score when the correct answer is clicked.

let scoreCounter = 0;
const increaseScore = () => {
    scoreCounter += 5;
    if(scoreCounter < 25) {
        levelScore.innerHTML = `SCORE: 00${scoreCounter}`;
    } else if (scoreCounter < 100) {
        levelScore.innerHTML = `SCORE: 0${scoreCounter}`;
        window.location.href = 'level2.html';
    }
}



// Add an event listener to the correct answer so that it increments the score when clicked

// addToScore = (event) => {
//     console.log(event.target.innerText)
//     if (event.target.innerText === currentQuest.correctAns) {
//         let button = document.querySelector(`#${event.target.id}`)
//         button.addEventListener('click', increaseScore)
//     } else {
//         let button = document.querySelector(`#${event.target.id}`);
//         button.style.background = "red"
//     }
// }






















// Write a function that when turns the correct button choice to a question green and red if incorrect. Also the green button must add 10 points to the score when clicked.


// let correctAns = document.querySelector('.rightAns');
// let incorrectAns = document.querySelectorAll('.wrongAns');

// correctAns.addEventListener('click', () => 
// correctAns.style.background= "green",
// // console.log("green")
// );

// correctAns.addEventListener('click', increaseScore)

// for (let i = 0; i <incorrectAns.length; i++) {
// incorrectAns[i].addEventListener('click', () => 
//         incorrectAns[i].style.background = "red",
//         // console.log("red"),
//         // console.log(incorrectAns)
// )}


