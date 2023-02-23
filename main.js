const nextQuestionBtn = document.querySelector('.next_question');
const checkAnswerBtn = document.querySelector('.answer__btn');
let checkText = document.querySelector('.check');

const img = document.querySelector('.content__img');
const question = document.querySelector('.content__question');
const answerOptions = document.querySelectorAll('.answer__option');
const inputs = document.querySelectorAll('.answer__input');

let currentQuestion = 0;

function checkAnswer() {
    inputs.forEach(el => {
        if(el.checked && el.id === db[currentQuestion].correct) {
            nextQuestionBtn.disabled = false;
        } else if(el.checked && el.id !== db[currentQuestion].correct) {
            nextQuestionBtn.disabled = true;
        }
    })
}
function setNextQuestion() {
    currentQuestion = currentQuestion + 1;
    if(db[currentQuestion] != false){
        img.src = `${db[currentQuestion].imgUrl}`;

    } else {
        img.src = ` `;
    }
    question.textContent = `${db[currentQuestion].question}`;
    answerOptions.forEach((el,index)=> {
        el.textContent = `${db[currentQuestion].answers[index].text}`;
    });
    nextQuestionBtn.disabled = true;

}
function setStartQuestion() {
    if(db[currentQuestion] !== false ){
        img.src = `${db[currentQuestion].imgUrl}`
    }
    question.textContent = `${db[currentQuestion].question}`;

    answerOptions.forEach((el,index)=> {
        el.textContent = `${db[currentQuestion].answers[index].text}`;
    });
    nextQuestionBtn.disabled = true;
}
setStartQuestion();
nextQuestionBtn.addEventListener('click', setNextQuestion);
checkAnswerBtn.addEventListener('click', checkAnswer);