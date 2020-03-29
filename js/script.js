// JavaScript Code Quiz Challenge
// Written by Dean Warren
// GT Full Stack Flex Class Winter-Spring 2020
var timer = 75;
var playerScore = 0;
var highScore; //to be defined
let runningQuestionIndex = 0; //keeps track of how many questions have been asked

const quiz = document.getElementById("quiz");
const qImg = document.getElementById("qImage");
const question = document.getElementById("question");
//const timeGauge = document.getElementById("timeGauge");
let mySound;
const start = document.getElementById("startBtn");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const answer = document.getElementById("answer");
const explination = document.getElementById("explination");
const playerScoreContainer = document.getElementById("playerScoreContainer");
const scoreContainer = document.getElementById("scoreContainer");

const questions = [
    {
        question: "IsNaN() Evaluates And Argument To Determine if Given Value ",
        imgSrc  : "./assets/JSLogo.png",
        choiceA : "Is Not a Null",
        choiceB : "Is Not a New Object",
        choiceC : "Is Not a Number",
        choiceD : "None of the above",
        correct : "C",
        explination: "IsNaN() Evaluates And Argument To Determine if Given Value"  
    },
    {
        question: "Choose the correct JavaScript syntax to change the content of the HTML code above.",
        imgSrc  : "./assets/innerHTML.png",
        choiceA : "document.getElement(“geek”).innerHTML=”I am a Geek”;",
        choiceB : "document.getElementById(“geek”).innerHTML='I am a Geek;'",
        choiceC : "document.getId(“geek”)=”I am a Geek”;",
        choiceD : "document.getElementById(“geek”).innerHTML=I am a Geek;",
        correct : "B",
        explination: "The correct syntax to access the element is document.getElementById(“geek”). Here we want to access the content written under that id, so we used .innerHTML to specify that and finally we replaced the content with whatever is written inside the quotes."  
    },
    {
        question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        imgSrc  : "./assets/GeeksforGeeksAlert.png",
        choiceA : "alertbox(“GeeksforGeeks”);",
        choiceB : "msg(“GeeksforGeeks”);",
        choiceC : "msgbox(“GeeksforGeeks”);",
        choiceD : "alert(“GeeksforGeeks”);",
        correct : "D",
        explination: "To display any text in the alert box, you need to write it as alert(“GeeksforGeeks”);."
    },
    {
        question: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
        imgSrc  : "./assets/JSLogo.png",
        choiceA : "Alert()",
        choiceB : "Prompt()",
        choiceC : "Confirm()",
        choiceD : "Msg()",
        correct : "B",
        explination: "The “Promt()” Dialog box displays a message and waits for user input."
    },
    {
        question: "The external JavaScript file must contain script tag. True or False?",
        imgSrc  : "./assets/ScriptTag.png",
        choiceA : "True",
        choiceB : "False",
        choiceC : "Both",
        choiceD : "I don't know.",
        correct : "B",
        explination: "It is not necessary for any external javascript file to have <script> tag."
    },
    {
        question: "Predict the output of the JavaScript code above.",
        imgSrc  : "./assets/numPlusString.png",
        choiceA : "16",
        choiceB : "Complilation Error",
        choiceC : "88",
        choiceD : "Run Time Error",
        correct : "C",
        explination: "In the above given code, 8+”8″ have first integer and second string data types. Rather than adding the two numbers, it concatenated the two."
    },
    {
        question: "Predict the output of the JavaScript code above.",
        imgSrc  : "./assets/lastIndexOf.png",
        choiceA : "8",
        choiceB : "0",
        choiceC : "9",
        choiceD : "Error",
        correct : "A",
        explination: "The index starts with 0 in JavaScript. Here, x searches for the last occurance of “G” in the text."
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        imgSrc  : "./assets/JSLogo.png",
        choiceA : "interface",
        choiceB : "throws",
        choiceC : "program",
        choiceD : "short",
        correct : "C",
        explination: "In JavaScript, interface, throws and short are reserved keywords."
    },
    {
        question: "Predict the output of the JavaScript code above.",
        imgSrc  : "./assets/eval.png",
        choiceA : '"30"',
        choiceB : "30",
        choiceC : "5*6",
        choiceD : '"5*6"',
        correct : "B",
        explination: "eval command will evaluate the operation. Here it is 5*6=30."
    }
];

const lastQuestionIndex = questions.length-1;//total number of questions

//JavaSript Code Question with 4 choices 
function renderQuestion() {
    
    quiz.classList.remove("d-none");
    quiz.style = "display: grid";
    console.log(runningQuestionIndex);
    let ques = questions[runningQuestionIndex];
    //console.log(ques);
    console.log("timer: ", timer);
    if (timer > 0) { //if timer is not yet zero render a question
        if (runningQuestionIndex <== lastQuestionIndex) { //if runningQuestionIndex is less than lastQuestionI render question
            
            console.log("In renderQuestion and timer now: ", timer);
            question.innerHTML = "<p>" + ques.question + "</p>";
            qImg.innerHTML = "<img src=" + ques.imgSrc + ">";
            choiceA.innerHTML = ques.choiceA;
            choiceB.innerHTML = ques.choiceB;
            choiceC.innerHTML = ques.choiceC;
            choiceD.innerHTML = ques.choiceD;
            document.getElementById("correct").innerHTML = ques.correct;
            explination.innerHTML = ques.explination;
           
        }
    } 
    else {
         scoreRender(playerScore);
    }
}    

function checkAnswer(answer) {
    console.log(answer);
    console.log(questions[runningQuestionIndex].correct);
    if(questions[runningQuestionIndex].correct === answer) {
        playerScore++;
        
        answerIsRight();
    }
    else {
        document.getElementById("answer").style.display = "grid";
        answerIsWrong();
    }
    if (runningQuestionIndex < lastQuestionIndex) {
        //runningQuestionIndex++;
        renderQuestion();
    }
    else{
        scoreRender();
    }
}

function answerIsRight(){
    //if user answer is correct play bing and display explination
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/Bing.mp3");
    playerScore++;
    runningQuestionIndex++;

}

function answerIsWrong() {
    //if user answer is wrong play Buzzer and display explination
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/Buzzer.mp3");
    timer = timer -10;
    runningQuestionIndex++;
}

function scoreRender(playerScore) {

}
// User clicks an answer: 
// Correct Answer - sets off Bing sound and Increments playerScore
// Incorrect answer - sets off Buzzer sound and subtracts 10 seconds from the timer
// If timer is > 0 and Questions !== undefined display another question
// Else stop game and display playerScore --> store playerScore
// If playerScore is greater than last 10 scores on highScore
// Offer player chance to enter Intials on highScore
function timerStart(){
    document.getElementById("start").style.display = "none";//Hide the Start div
    renderQuestion(); //render the first question
    var countDownTimer = setInterval(function(){
         
        if(timer <= 0){
            clearInterval(countDownTimer);
            document.getElementById("timer").innerHTML = "Finished";
            quiz.style = "display: none";
            playerScoreContainer.style = "display: grid";
            playerScoreContainer.innerHTML = playerScore;
        } else {
            
            document.getElementById("timer").innerHTML ="Time: " + timer + " seconds";

        }
        timer -= 1;
    }, 1000);    

}

//document.getElementById("quiz").style.display = "grid"; 

// Timer to start on "click" of Start Button.topline
start.addEventListener("click",function() {
    
    timerStart();
}); 




// Then end game