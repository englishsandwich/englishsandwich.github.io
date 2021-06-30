const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');


let currentQuestion = 0;
var score = 0;

let questions = [
  {
    question: "Where is this dish from?",
    answers: [
      {option:"Senegal",answer:true},
      {option:"Guam",answer:false}
    ]
  },
  
  {
    question: "Where is this dish from?",
    answers: [
      {option:"Senegal",answer:true},
      {option:"Guam",answer:false}
    ]
  },
    
      {
    question: "Where is this dish from?",
    answers: [
      {option:"Senegal",answer:true},
      {option:"Guam",answer:false}
    ]
  }
]

// onclick events
restartBtn.addEventListener('click',restart);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);



// executed when the page loads
function beginQuiz(){
  currentQuestion = 0;
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano=0;
    if(questions[currentQuestion].answers[ano].answer){
      if(score<3){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<2){
       next();
  }
}
  falseBtn.innerHTML = questions[currentQuestion].answers[0].option;
  falseBtn.onclick = () => {
    let ano=1;
    if(questions[currentQuestion].answers[ano].answer){
      if(score<3){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<2){
      next();
    }
  }
  prevBtn.classList.add('hide');
}

beginQuiz();
  

// reset score
function restart(){
  currentQuestion = 0;
  prevBtn.classList.remove('hide');
  nextBtn.classList.remove('hide');
  submitBtn.classList.remove('hide');
  trueBtn.classList.remove('hide');
  falseBtn.classList.remove('hide');
  score = 0;
  userScore.innerHTML = score;
  beginQuiz();
}

// next fxn
function next(){
  currentQuestion++;
  if(currentQuestion>=2){
    nextBtn.classList.add('hide');
    prevBtn.classList.remove('hide');
}
questionText.innerHTML = questions[currentQuestion].question;
trueBtn.innerHTML = questions[currentQuestion]answers[0].option;
trueBtn.onclick = () => {
  let ano=0;
  if(questions[currentQuestion].answers[ano].answer){
      if(score<3){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<2){
      next();
    }
}
falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
falseBtn.onclick = () => {
  let ano=1;
  if(questions[currentQuestion].answers[ano].answer){
    if(score<3){
      score++;
    }
  }
  userScore.innerHTML = score;
  if(currentQuestion<2){
    next();
  }
}
prevBtn.classList.remove('hide');
}




// prev fxn
function prev(){
  currentQuestion--;
  if(currentQuestion<=0){
    prevBtn.classList.add('hide');
    nextBtn.classList.remove('hide');
  }
questionText.innerHTML = questions[currentQuestion].question;
trueBtn.innerHTML = questions[currentQuestion]answers[0].option;
trueBtn.onclick = () => {
  let ano=0;
  if(questions[currentQuestion].answers[ano].answer){
      if(score<3){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<2){
      next();
    }
}
falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
falseBtn.onclick = () => {
  let ano=1;
  if(questions[currentQuestion].answers[ano].answer){
    if(score<3){
      score++;
    }
  }
  userScore.innerHTML = score;
  if(currentQuestion<2){
    next ();
  }
}

nextBtn.classList.remove('hide');
}


//
function submit(){
  prevBtn.classList.add('hide');
  nextBtn.classList.add('hide');
  submitBtn.classList.add('hide');
  trueBtn.classList.add('hide');
  falseBtn.classList.add('hide');
  questionText.innerHTML = "Nice job!";
}


