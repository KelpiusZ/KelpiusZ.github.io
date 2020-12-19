// // console.log("Hello World from Level One")

// // Create the ojects that will hold the array of questions and answers
// questions = [
//     'Question 1: Which architect came up with the quote, "Less is a bore?"',
//     'Question 2: Random question about architecture?',
//     'Question 3: Random question about architecture?',
//     'Question 4: Random question about architecture?',
//     'Question 5: Random question about architecture?',
//     ]

// answers = {
//     ansToQuestOne: [
//         "A: Zaha Hadid",
//         "B: Le Corbsier",
//         "C: Robert Venturi",
//         "D: Frank Gehry",
//     ],

//     ansToQuestTwo: [
//         "A: ",
//         "B: ",
//         "C: ",
//         "D: ",
//     ],

//     ansToQuestThree: [
//         "A: ",
//         "B: ",
//         "C: ",
//         "D: ",
//     ],

//     ansToQuestFour: [
//         "A: ",
//         "B: ",
//         "C: ",
//         "D: ",
//     ],

//     ansToQuestFive: [
//         "A: ",
//         "B: ",
//         "C: ",
//         "D: ",
//     ],
// }

// // Create a paragraph that will hold the text of the question.
// const questionOne = document.createElement('p');
// const questionTwo = document.createElement('p');
// const questionThree = document.createElement('p');
// const questionFour = document.createElement('p');
// const questionFive = document.createElement('p');

// questionOne.innerText = `${questions[0]}`;
// questionTwo.innerText = `${questions[1]}`;
// questionThree.innerText = `${questions[2]}`;
// questionFour.innerText = `${questions[3]}`;
// questionFive.innerText = `${questions[4]}`;

// questionOne.setAttribute('id', 'levelOneQOne');
// questionTwo.setAttribute('id', 'levelOneQTwo');
// questionThree.setAttribute('id', 'levelOneQThree');
// questionFour.setAttribute('id', 'levelOneQFour');
// questionFive.setAttribute('id', 'levelOneQFive');

// // console.log(questionOne);
// // console.log(questionTwo);
// // console.log(questionThree);
// // console.log(questionFour);
// // console.log(questionFive);


// // Create Buttons: "Choice A"; "Choice B"; "Choice C"; "Choice D"
// const choiceA = document.createElement('button');
// const choiceB = document.createElement('button');
// const choiceC = document.createElement('button');
// const choiceD = document.createElement('button');

// choiceA.innerText = `${answers.ansToQuestOne[0]}`;
// choiceB.innerText = `${answers.ansToQuestOne[1]}`;
// choiceC.innerText = `${answers.ansToQuestOne[2]}`;
// choiceD.innerText = `${answers.ansToQuestOne[3]}`;

// choiceA.setAttribute('class', 'wrongAns');
// choiceB.setAttribute('class', 'wrongAns');
// choiceC.setAttribute('class', 'rightAns', 'id', 'scorePlusOne');
// choiceD.setAttribute('class', 'wrongAns');


// // console.log(choiceA);
// // console.log(choiceB);
// // console.log(choiceC);
// // console.log(choiceD);

// // Use the appendChild method to add to the HTML body
// document.body.appendChild(questionOne);
// // document.body.appendChild(questionTwo);
// // document.body.appendChild(questionThree);
// // document.body.appendChild(questionFour);
// // document.body.appendChild(questionFour);

// document.body.appendChild(choiceA);
// document.body.appendChild(choiceB);
// document.body.appendChild(choiceC);
// document.body.appendChild(choiceD);


// // Create a tag for the level and the score.

// const levelScore = document.createElement('h2');
// const currentLevel = document.createElement('h2');

// levelScore.setAttribute('class', 'lvlScore');
// currentLevel.setAttribute('class', 'currentLvl')

// levelScore.innerText = '000';
// currentLevel.innerText = 'Level: 1';

// document.body.appendChild(levelScore);
// document.body.appendChild(currentLevel);


// // Write a function that will increment the score when the correct answer is clicked.

// let scoreCounter = 0;
// const increaseScore = () => {
//     scoreCounter += 10;
//     if(scoreCounter < 10) {
//         levelScore.innerHTML = `00${scoreCounter}`;
//     } else if (scoreCounter < 100) {
//         levelScore.innerHTML = `0${scoreCounter}`;
//     }
// }



// // Write a function that when turns the correct button choice to a question green and red if incorrect. Also the green button must add 10 points to the score when clicked.

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


// // create a button that will load up the next question

// const nextBtn = document.createElement('button');
// nextBtn.setAttribute('class', 'nextQuestion');
// nextBtn.innerText = "Next";
// document.body.appendChild(nextBtn);

// nextBtn.addEventListener('click', )