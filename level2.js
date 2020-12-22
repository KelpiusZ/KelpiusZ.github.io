//////////////////////////////////////////////Level Two//////////////////////////

// console.log("Hello World from Level Two")

// Create the ojects that will hold the array of questions and answers

questionsArray = [
    {
        question: 'Question 1: What is the original cladding material used on the ancient pyramids?',
        answers:[
            "A: Marble",
            "B: Limestone",
            "C: Granite",
            "D: Gold",
        ],
        correctAns: "B: Limestone",
    },

    {
        question: 'Question 2: What is the original name of the Florence Cathedral?',
        answers: [
            "A: Milano Cathedral",
            "B: St. Peter's Basilica",
            "C: Notre Dame Cathedral",
            "D: Santa Maria Del Fiore",
        ],
        correctAns: "D: Santa Maria Del Fiore",
    },

    {
        question: 'Question 3: Which of the following architects had a dual career as an architect and a poltician?',
        answers: [
            "A: Harvey Bernad Gantt",
            "B: Jean Nouvel",
            "C: Moshe Safdie",
            "D: Bjarke Ingles",
        ],
        correctAns: "A: Harvey Bernad Gantt",
    },

    {
        question: "Question 4: What was the Hagia Sophia originally built as?",
        answers: [
            "A: Mosque",
            "B: Orthodox Christian Cathedral",
            "C: Museum",
            "D: Mausoleum",
        ],
        correctAns: "B: Orthodox Christian Cathedral",
    },

    {
        question: 'Question 5: Who ordered the construction of the Taj Mahal?',
        answers: [
            "A: Mumtaz Mahal",
            "B: Akbar the Great",
            "C: Shah Jahan",
            "D: Khan Jahan Lodi",
        ],
        correctAns:"C: Shah Jahan"
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
currentLevel.innerText = 'LEVEL: 2';

document.body.appendChild(levelScore);
document.body.appendChild(currentLevel);


// Write a function that will increment the score when the correct answer is clicked.

let scoreCounter = 0;
const increaseScore = () => {
    scoreCounter += 10;
    if(scoreCounter < 50) {
        levelScore.innerHTML = `SCORE: 00${scoreCounter}`;
    } else if (scoreCounter < 80) {
        levelScore.innerHTML = `SCORE: 0${scoreCounter}`;
        window.location.href = 'level3.html';
    }
}