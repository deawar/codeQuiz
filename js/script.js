// JavaScript Code Quiz Challenge
// Written by Dean Warren
// GT Full Stack Flex Class Winter-Spring 2020
var timer = 75;
const playerScore = 0;
var highScore; //to be defined
let runningQuestionIndex = 0; //keeps track of how many questions have been asked

const quiz = document.getElementById("quiz");
const qImg = document.getElementById("qImage");
const question = document.getElementById("question");
const timeGauge = document.getElementById("timeGauge");
let mySound;
const start = document.getElementById("startBtn");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const explination = document.getElementById("explination");
const scoreContainer = document.getElementById("scoreContainer");

let questions = [
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        imgSrc  : "assets/jsScriptTag.png",
        choiceA : "<javascript>",
        choiceB : "<scripted>",
        choiceC : "<script>",
        choiceD : "<js>",
        correct : "C",
        explination: "If we want to write a JavaScript code under HTML tag, you will have to use the “script” tag."  
    },
    {
        question: "Choose the correct JavaScript syntax to change the content of the following HTML code.",
        imgSrc  : "assets/innerHTML.png",
        choiceA : "document.getElement(“geek”).innerHTML=”I am a Geek”;",
        choiceB : "document.getElementById(“geek”).innerHTML=”I am a Geek;",
        choiceC : "document.getId(“geek”)=”I am a Geek”;",
        choiceD : "document.getElementById(“geek”).innerHTML=I am a Geek;",
        correct : "B",
        explination: "The correct syntax to access the element is document.getElementById(“geek”). Here we want to access the content written under that id, so we used .innerHTML to specify that and finally we replaced the content with whatever is written inside the quotes."  
    },
    {
        question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        imgSrc  : "assets/alertGeeks.png",
        choiceA : "alertbox(“GeeksforGeeks”);",
        choiceB : "msg(“GeeksforGeeks”);",
        choiceC : "msgbox(“GeeksforGeeks”);",
        choiceD : "alert(“GeeksforGeeks”);",
        correct : "D",
        explination: "To display any text in the alert box, you need to write it as alert(“GeeksforGeeks”);."
    },
    {
        question: "What is the correct syntax for referring to an external script called “geek.js”?",
        imgSrc  : "assets/jsScriptTag.png",
        choiceA : "<script src=”geek.js”>",
        choiceB : "<script href=”geek.js”>",
        choiceC : "<script ref=”geek.js”>",
        choiceD : "<script name=”geek.js”>",
        correct : "A",
        explination: "The “src” term is used to refer to any JavaScript file."
    },
    {
        question: "The external JavaScript file must contain <script> tag. True or False?",
        imgSrc  : "assets/jsScriptTag.png",
        choiceA : "True",
        choiceB : "False",
        choiceC : "Both",
        choiceD : "I don't know.",
        correct : "B",
        explination: "It is not necessary for any external javascript file to have <script> tag."
    },
    {
        question: "Predict the output of the following JavaScript code.",
        imgSrc  : "assets/numPlusString.png",
        choiceA : "16",
        choiceB : "Complilation Error",
        choiceC : "88",
        choiceD : "Run Time Error",
        correct : "C",
        explination: "In the above given code, 8+”8″ have first integer and second string data types. Rather than adding the two numbers, it concatenated the two."
    },
    {
        question: "Predict the output of the following JavaScript code.",
        imgSrc  : "assets/lastIndexOf.png",
        choiceA : "8",
        choiceB : "0",
        choiceC : "9",
        choiceD : "Error",
        correct : "A",
        explination: "The index starts with 0 in JavaScript. Here, x searches for the last occurance of “G” in the text."
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        imgSrc  : "assets/lastIndexOf.png",
        choiceA : "interface",
        choiceB : "throws",
        choiceC : "program",
        choiceD : "short",
        correct : "C",
        explination: "In JavaScript, interface, throws and short are reserved keywords."
    },
    {
        question: "Predict the output of the following JavaScript code.",
        imgSrc  : "assets/eval.png",
        choiceA : '"30"',
        choiceB : "30",
        choiceC : "5*6",
        choiceD : '"5*6"',
        correct : "B",
        explination: "eval command will evaluate the operation. Here it is 5*6=30."
    }
];

let lastQuestionIndex = questions.length -1; //total number of questions

// Random JavaSript Code Question with 4 choices 
function renderQuestion() {
    let ques = questions[runningQuestionIndex];
   
    question.innerHTML = "<p>" + ques.question + "</p>";
    qImg.innerHTML = "<img src=" + ques.imgSrc + ">";
    choiceA.innerHTML = ques.choiceA;
    choiceB.innerHTML = ques.choiceB;
    choiceC.innerHTML = ques.choiceC;
    choiceD.innerHTML = ques.choiceD;
    explination.innerHTML = ques.explination;
}

function checkAnswer() {
    if(questions[runningQuestionIndex].correct ==answer) {
        score++;
        answerIsTRight()
    }
}

function answerIsRight(){
    //if user answer is correct play bing and display explination
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/Bing.mp3");

    //if user answer is wrong play Buzzer and display explination
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/Buzzer.mp3");
}

// User clicks an answer: 
// Correct Answer - sets off Bing sound and Increments playerScore
// Incorrect answer - sets off Buzzer sound and subtracts 10 seconds from the timer
// If timer is > 0 and Questions !== undefined display another question
// Else stop game and display playerScore --> store playerScore
// If playerScore is greater than last 10 scores on highScore
// Offer player chance to enter Intials on highScore
function timerStart(){
   
    var countDownTimer = setInterval(function(){
      if(timer <= 0){
        document.getElementById("start").style.display = "none";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("scoreContainer").style.display = "grid";  
        clearInterval(countDownTimer);
        document.getElementById("timer").innerHTML = "Finished";
      } else {
        document.getElementById("timer").innerHTML ="Time: " + timer + " seconds";
        document.getElementById("start").style.display = "none";
        document.getElementById("quiz").style.display = "grid";
        while(timer > 0) {
            if (runningQuestionIndex < lastQuestionIndex) {
                renderQuestion();
                runningQuestionIndex++;
            
            }
        }
      }
      timer -= 1;
    }, 1000);    

}


document.getElementById("quiz").style.display = "grid"; 

// Timer to start on "click" of Start Button.topline
start.addEventListener("click",timerStart); 

lastQuestionIndex = questions.length -1;


// Then end game