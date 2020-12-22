//////////////////////////////////////////////Level Three//////////////////////////

// console.log("Hello World from Level Three")

// Create the ojects that will hold the array of questions and answers
questions = [
    'Question 1: Which of the following is not a part of the Jewish museum in Berlin?',
    'Question 2: Who designed the Marina Bay Sands?',
    'Question 3: Which of the following was the first licensed black female architect in N.Y.?',
    "Question 4: Which architect developed the idea of the Broadacre City?",
    'Question 5: Which of the following became the first black female architect licensed in the U.S.?',
]

answers = [
    [
        "A: Axis of Continuity",
        "B: Garden of Exile",
        "C: Staircase of Salvation",
        "D: Holocaust Tower",
    ],

     [
        "A: Bjarke Ingles",
        "B: Rem Koolhas",
        "C: Moshe Safdie",
        "D: Norman Foster",
    ],

    [
        "A: Norma Sklarek",
        "B: Beverly Loraine Greene",
        "C: Georgia Louise Harris Brown",
        "D: Ethal Furman",
    ],

    [
        "A: Peter Keating",
        "B: Federick Law Olmstead",
        "C: Frank Lloyd Wright",
        "D: Clarence A. Perry",
    ],

    [
        "A: Ethal Furman",
        "B: Beverly Loraine Greene",
        "C: Norma Sklarek",
        "D: Georgia Louise Harris Browne",
    ],
]



questionsArray = [
    {
        question: 'Question 1: Which of the following is not a part of the Jewish museum in Berlin?',
        answers: [
            "A: Axis of Continuity",
            "B: Garden of Exile",
            "C: Staircase of Salvation",
            "D: Holocaust Tower",
        ],
        correctAns: "C: Staircase of Salvation",
    },

    {
        question: 'Question 2: Who designed the Marina Bay Sands?',
        answers: [
            "A: Bjarke Ingles",
            "B: Rem Koolhas",
            "C: Moshe Safdie",
            "D: Norman Foster",
        ],
        correctAns: "C: Moshe Safdie",
    },

    {
        question: 'Question 3: Which of the following was the first licensed black female architect in N.Y.?',
        answers: [
            "A: Norma Sklarek",
            "B: Beverly Loraine Greene",
            "C: Georgia Louise Harris Brown",
            "D: Ethal Furman",
        ],
        correctAns: "A: Norma Sklarek",
    },

    {
        question: "Question 4: Which architect developed the idea of the Broadacre City?",
        answers: [
            "A: Peter Keating",
            "B: Federick Law Olmstead",
            "C: Frank Lloyd Wright",
            "D: Clarence A. Perry",
        ],
        correctAns: "C: Frank Lloyd Wright",
    },

    {
        question: 'Question 5: Which of the following became the first black female architect licensed in the U.S.?',
        answers: [
            "A: Ethal Furman",
            "B: Beverly Loraine Greene",
            "C: Norma Sklarek",
            "D: Georgia Louise Harris Browne",
        ],
        correctAns: "B: Beverly Loraine Greene"
    }
]


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

//If user clicks on the "next" button it will load the next set of questions and choices
// create a button that will load up the next question

const nextBtn = document.createElement('button');
nextBtn.setAttribute('class', 'nextQuestion');
nextBtn.innerText = "Next";
document.body.appendChild(nextBtn);

// create a loop that goes thru the array of question.

let nextSetOfQuest = 0
let currentQuest = {}

nextQuest = () => {
    currentQuest = questionsArray[nextSetOfQuest]
    let divQuestion = document.querySelector(".currentQuestion");
    let newQuest =  questionsArray[nextSetOfQuest].question;
    divQuestion.innerText = newQuest;
    
    let ansChoice = questionsArray[nextSetOfQuest].answers;
    choiceA.innerText = ansChoice[0];
    choiceB.innerText = ansChoice[1];
    choiceC.innerText = ansChoice[2];
    choiceD.innerText = ansChoice[3];

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

resetBtnColor = () => {
    let buttons =  document.querySelectorAll(".Answer");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = "lightskyblue"
    }
} 


// Create a tag for the level and the score.

const levelScore = document.createElement('h2');
const currentLevel = document.createElement('h2');

levelScore.setAttribute('class', 'lvlScore');
currentLevel.setAttribute('class', 'currentLvl')

levelScore.innerText = 'SCORE: 000';
currentLevel.innerText = 'LEVEL: 3';

document.body.appendChild(levelScore);
document.body.appendChild(currentLevel);


// Write a function that will increment the score when the correct answer is clicked.

let scoreCounter = 0;
const increaseScore = () => {
    scoreCounter += 15;
    if(scoreCounter < 75) {
        levelScore.innerHTML = `SCORE: 00${scoreCounter}`;
    } else if (scoreCounter < 80) {
        levelScore.innerHTML = `SCORE: 0${scoreCounter}`;
        window.location.href = 'landingPage.html';
    }
}