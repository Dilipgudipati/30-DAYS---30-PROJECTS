const questions =[
{
    question: "When is DOB of G DILIPKUMAR",
    answers:[
     
       {text: "May", correct: true},
       {text: "Mar", correct: false},
       {text: "Feb", correct: false},
       {text: "Jan", correct: false},
       {text: "Oct", correct: false},
       
      ]
   },
   {
    question: "When is DOB of G Sri harsha",
    answers:[
     
       {text: "May", correct: false},
       {text: "Sep", correct: true},
       {text: "Feb", correct: false},
       {text: "Jan", correct: false},
       {text: "Oct", correct: false},
      ]
   },{
    question: "When is DOB of SK Azahar",
    answers:[
     
       {text: "May", correct: false},
       {text: "Mar", correct: false},
       {text: "Feb", correct: false},
       {text: "Jan", correct: false},
       {text: "Oct", correct: true},
       
      ]
   },{
    question: "When is DOB of G KRISHNA KIREETI",
    answers:[
     
       {text: "May", correct: false},
       {text: "Mar", correct: false},
       {text: "Aug", correct: true},
       {text: "Jan", correct: false},
       {text: "Oct", correct: false},
       
      ]
   },{
    question: "When is DOB of M RAVI TEJA",
    answers:[
     
       {text: "May", correct: false},
       {text: "Mar", correct: false},
       {text: "Aug", correct: true},
       {text: "Jan", correct: false},
       {text: "Oct", correct: false},
    
    ]
   },{
    question: "When is DOB of U VISHNU",
    answers:[
     
       {text: "Aug", correct: true},
       {text: "Mar", correct: false},
       {text: "Feb", correct: false},
       {text: "Jan", correct: false},
       {text: "Oct", correct: false},
    ]
   }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
     button.innerHTML = answer.text;
     button.classList.add("btn");
     answerButtons.appendChild(button);
     if(answer.correct){
        button.dataset.correct = answer.correct;
     }
     button.addEventListener("click", selectAnswer);
   });

}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}


    function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
 nextButton.innerHTML ="Play Again";
 nextButton.style.display ="block";
}


    function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
    }
    nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();