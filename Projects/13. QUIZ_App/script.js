//STEP 1:- DATA (i.e questions)
const questions=[
{
    question:"what does JS stand for?",
    options:["Java Source","Java Script","just Script","JSON Script"],
    answer:"Java Script"
},
{
    question:"Which Keyword is Block scoped?",
    options:["var","let","function","this"],
    answer:"let"
},
{
    question: "Which method converts JSON to objects?",
    options:["JSON.parse()" ,"JSON.stringify()","toObjects","parseInt()"],
    answer:"JSON.parse()"
},
{
    question:"What Does HTML stands for?",
    options: ["HighText Machine Language","Home Tool Markup Language","HyperText Markup Language","Hyperlink and Text Management Language"],
    answer: "HyperText Markup Language"
},
{
    question:"What is the official full form of CSS?",
    options:["Creative Style System","Cascading Style Sheets","Color and Style Sheets","Computer Sheet Software"],
    answer: "Cascading Style Sheets"
}
];

//STEP-2: STATE VARIABLES ( Represent current state of the quiz)
let currentIndex=0; // starts at 0 means we are on the first question
let score=0; //starts at 0 , increases when user selects the right answer
let timeLeft=25; //countdown value changes every second
let timerId; //stores the ID returned by setInterval( startTime() function), used later to stop the timer .

//STEP 3:DOM REFERENCES 
/*JS finds elements in HTML -> stores them in variables -> so we can chnage them later */
const progressEl=document.getElementById("progress");
const questionEl=document.getElementById("question");
const optionsEl=document.getElementById("options");
const timerEl=document.getElementById("timer");
const nextBtn=document.getElementById("nextBtn");
const restartBtn=document.getElementById("restartBtn");

//STEP 4 :- FIRST FUNCTION CALL (executes immediately when the page loads)
loadQuestion();

//STEP 5:- loadQuestions()
/* This function :-
Displays a question
reset timer
creates option buttons
starts timer */
function loadQuestion(){
    clearInterval(timerId);//if a timer was running from the previous question -> stop it-> prevents multiple timers running together .

    //Below three steps represent (State-UI sync)-> Timer becomes visible -> timeLeft reset to 25s -> UI updated.
    timerEl.style.display = "block";
    timeLeft=25;
    timerEl.innerText=`TimeLeft: ${timeLeft}s`;

    //Disable nextBtn:- user should not skip without answering , button will be enabled after answer selection.
    nextBtn.disabled=true;

    //Update progress Text:-
    /*example :- if Current index =0 , then shows: question 1/5 */
    progressEl.innerText = `Question ${currentIndex + 1} / ${questions.length}`;

    //Loads current question from array 
    const currentQ=questions[currentIndex];

    //Displays current question's text on Screen
    questionEl.innerText=currentQ.question;

    //CLear Old Options
    optionsEl.innerHTML="";

    //create options buttons (Dynamic DOM)
    currentQ.options.forEach(option =>{ //loop through the options array 
        const btn=document.createElement("button"); //creates one button for each option
        btn.innerText=option;

        //attach Click listener to each option 
        btn.addEventListener("click",()=> selectAnswer(option));//when button is clicked call selectAnswer pass the selected option
        optionsEl.appendChild(btn);// Adds button to the page 
    });
    startTimer(); //JS jumps to startTimer().
}

//Timer Logic
//startTimer() (ASYNC LOGIC)
function startTimer(){
    timerId = setInterval(()=>{//Runs every 1000 ms ,Stores interval ID in timerId
        timeLeft--;//timeLeft decreases
        timerEl.innerText=`Time Left: ${timeLeft}s`;//UI updates

        //Time up condition
        if(timeLeft === 0){//When time ends:
            clearInterval(timerId);//Stop timer
            nextQuestion();//Automatically move to next question
        }
    },1000);
}

//Answer Logic
//User clicks an option → selectAnswer()
function selectAnswer(selected){//this is the decision function.
    clearInterval(timerId);//Stop timer immediately-> Prevents timer from continuing.
    nextBtn.disabled=false;//User can now manually proceed.
    const buttons = document.querySelectorAll("#options button");//dynnamically creates buttons
    const correctAnswer = questions[currentIndex].answer;//Get correct answer -> Get correct answer
    
    buttons.forEach(btn=>{//loop over all buttons 
        btn.disabled =true;//disables all button
        if(btn.innerText === correctAnswer){ // this is if statement is used to highlight CORRECT answer .
            btn.classList.add("correct")
        }
        if(btn.innerText === selected && // this if statment is used to highlight WRONG answer
            selected !== correctAnswer){
                btn.classList.add("wrong"); //only the selected wrong option becomes red .
            }
    });
    if(selected === correctAnswer){ // Corerect -> Update Score by incrementing score 
        score++;
    }
    setTimeout(nextQuestion,1000);//Auto move to the next Question after 1 sec .
}


// Next Question / End Quiz
 nextBtn.addEventListener("click",nextQuestion);//NEXT BUTTON click (manual navigation)

function nextQuestion(){
        currentIndex++; //Moves to the next Question
        
        if(currentIndex < questions.length){// checks if the quiz continues 
            loadQuestion();// if yes -> load next Question
        }else{  
            showResult();//Else Show result -> quiz finished
    }
 }

 //Result on Screen 
function showResult(){ 
    //  switches app to final state 
    questionEl.innerText ="Quiz completed 🎉";
    optionsEl.innerHTML=`<p>Your Score:${score}/${questions.length}</p>`;//Replaces UI with score.

    timerEl.style.display = "none";//hides time countdown
    nextBtn.style.display="none";//this hides next button
    restartBtn.style.display="block";//Only Restart button remains.
}

//Restart Button
restartBtn.addEventListener("click",restartQuiz);//RESTART BUTTON click 
 
function restartQuiz(){ //function to restart quiz 
    currentIndex=0;//reset state
    score=0;//reset score 
    nextBtn.style.display="block";//reset UI by displaying  NEXT BUTTON only.
    restartBtn.style.display="none";//hides  restart button
    loadQuestion();// Reloads Quiz by calling loadQuestion() function.
} 