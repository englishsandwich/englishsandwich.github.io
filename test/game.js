const country = document.getElementById("country");
const imgsrc = document.getElementById("imgsrc");
const source = document.getElementById("source");
const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const optA = document.getElementById('A');
const optB = document.getElementById('B');
const optC = document.getElementById('C');
const optD = document.getElementById('D');
const optE = document.getElementById('E');
const optF = document.getElementById('F');
const optG = document.getElementById('G');
const optH = document.getElementById('H');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');
const explanation = document.getElementById('explanation');


let currentQuestion = 0;
var score = 0;

let questions = [
    {
        question : "Where is this dish from?",
        imgsrc : "https://i.pinimg.com/originals/6f/0f/eb/6f0feb3e61e16e2025877f8d1a879505.jpg",
        source : "photo source here",
        optA : "Nope",
        optB : "Yep",
        optC : "Nope",
        optD : "Nope",
        optE : "Nope",
        optF : "Nope",
        optG : "Nope",
        optH : "Nope",
        correct : "B",
        explanantion: "This is the national dish of <b>Senengal</b>, <i>ceebu jen</i>! This means <i>rice and fish</i> in Wolof.",
    },
      {
        question : "Where is this dish from?",
        imgsrc : "imgsrc.jpg",
        source : "photo source here",
        optA : "Nope",
        optB : "Nope",
        optC : "Nope",
        optD : "Yep",
        optE : "Nope",
        optF : "Nope",
        optG : "Nope",
        optH : "Nope",
        correct : "D",
        explanantion: "This is <i>blah blah</i> from <b>Country</b>!",
    },
        {
        question : "Where is this dish from?",
        imgsrc : "imgsrc.jpg",
        source : "photo source here",
        optA : "Nope",
        optB : "Nope",
        optC : "Nope",
        optD : "Nope",
        optE : "Nope",
        optF : "Nope",
        optG : "Nope",
        optH : "Yep",
        correct : "H",
        explanantion: "This is <i>blah blah</i> from <b>Country</b>!",
    }
  ]


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    imgsrc.innerHTML = "<img src="+ q.imgsrc +">";
    optA.innerHTML = q.optA;
    optB.innerHTML = q.optB;
    optC.innerHTML = q.optC;
    optD.innerHTML = q.optD;
    optE.innerHTML = q.optE;
    optF.innerHTML = q.optF;
    optG.innerHTML = q.optG;
    optH.innerHTML = q.optH;
}

// start quiz
start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}


// checkAnswer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        // give explanations
        answerIsCorrect();
    }else{
        // answer is wrong
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
}

// answer is correct TEST
function answerIsCorrect(){
    document.getElementById(explanation).style.backgroundColor = "#0f0";
}

// answer is WRONG TEST
function answerIsWrong(){
    document.getElementById(explanation).style.backgroundColor = "#0f0";
}



