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
let counter = 10;
let rightAnswers = 0;
let wrongAnswers = 0;
let unanswered = 0;
let clockRunning = false;

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

 function startTimer () {
    var timeleft = 10;
    var triviaTimer = setInterval(function(){       
            $(".count").text(--timeleft);
            
            if(timeleft <= 0) {
                alert("Time's up!");
                stopGame();
            }
        }, 1000);
      };


function stopGame () {
//collect click for each answer
//compare click to correct answer
//if correct answer, record as correct
//if incorrect, record as incorrect
$('.js-questions input:checked').each(function() {
    let answerChecked = $(this).val();
        if (answerChecked === questions[$(this).attr('name')].correctAnswer) {
            console.log('woohoo');
            rightAnswers++;
            $("#correct").text(rightAnswers);

        } else {
            console.log('doh');
            wrongAnswers++;
            $("#incorrect").text(wrongAnswers);
        }

});

};


//events
//when the user clicks start, open new page
$(".js-start").on('click', function() {
    startGame();
    startTimer();

});
//once new page opens, timer begins to count down

//end game when stop button is clicked
$(".js-stop").on('click', function() {
    stopGame();

});


});