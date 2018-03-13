//page load
$(document).ready(function() {
//global variables
let questions = [{
    "question": "what is marges maiden name?",
    "answers": ["smith", "bouvier","bubble"],
    "correctAnswer": "bouvier",
},
{
    "question": "what is homers favorite snack?",
    "answers": ["donuts", "beer","hummus"],
    "correctAnswer": "donuts",  
}
];

let userAnswers = [];

//functions
function startGame() {
    console.log('game');
    //populate div with questions
    for (var i=0; i < questions.length; i++) {
        $('.js-questions').append('<p>'+ questions[i].question +'</p>');
        //loop through answers
        for (var j=0; j < questions[i].answers.length; j++) {
            $('.js-questions').append('<input type="radio" value="'+ questions[i].answers[j]+ '" name="'+ i + '">' + questions[i].answers[j] +'</input>');
        }
        $('.js-questions').append('<br><hr>');
    }
}

function stopGame () {
//collect click for each answer
//compare click to correct answer
//if correct answer, record as correct
//if incorrect, record as incorrect
$('.js-questions input:checked').each(function() {
    let answerChecked = $(this).val();
        if (answerChecked === questions[$(this).attr('name')].correctAnswer) {
            console.log('woohoo');
        } else {
            console.log('doh');
        }

});

};


//events
//when the user clicks start, open new page
$(".js-start").on('click', function() {
    startGame();

});
//once new page opens, timer begins to count down

//end game when stop button is clicked
$(".js-stop").on('click', function() {
    stopGame();

});
//or end game when timer runs out, show score
//after final click, record responses
//and show results page

});