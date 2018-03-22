//page load
$(document).ready(function() {
//global variables

//create array of questions
let questions = [{
    "question": "When is Mexican Independence Day?",
    "answers": ["May 5th", "Sep 16th","Nov 2nd"],
    "correctAnswer": "Sep 16th",
},
{
    "question": "What Mexican holiday is observed to pray for and remember friends and family members who have died, and help support their spiritual journey?",
    "answers": ["Día de Muertos", "Día de la Virgen de Guadalupe","Día de la Revolución"],
    "correctAnswer": "Día de Muertos",  
},
{
    "question": "Who is the current President of Mexico?",
    "answers": ["Vicente Fox", "Enrique Peña Nieto","Cristina Fernández de Kirchner"],
    "correctAnswer": "Enrique Peña Nieto",  
},
{
    "question": "What is a well-known Mexican stew made from hominy, with meat (typically pork), and garnished with shredded cabbage, chile peppers, onion, garlic, radishes, avocado, salsa or limes?",
    "answers": ["Paella", "Burrito","Pozole"],
    "correctAnswer": "Pozole",  
},
{
    "question": "What is the name of the popular Mexican dance that represents the courtship of a man and a woman?",
    "answers": ["Jarabe Tapatío", "Polka","Bachata"],
    "correctAnswer": "Jarabe Tapatío",  
},
{
    "question": "What is the dominant religion in Mexico?",
    "answers": ["Judaism", "Buddhism","Catholicism"],
    "correctAnswer": "Catholicism",  
},
{
    "question": "What is Mexico’s number one exported product?",
    "answers": ["Avocados", "Vehicles","Gems"],
    "correctAnswer": "Vehicles",  
},
{
    "question": "What animal appears repeatedly in Mexican mythology?",
    "answers": ["Snake", "Bull","Chihuahua"],
    "correctAnswer": "Snake",  
}
];

let userAnswers = [];
let rightAnswers = 0;
let wrongAnswers = 0;
let unanswered = 0;
let triviaTimer = 0;

//hide stop button and results div
$('.hide').hide();
$('.hidetwo').hide();


//functions
function startGame() {

    //populate div with questions and answers 
    for (var i=0; i < questions.length; i++) {
        $('.js-questions').append('<p>'+ questions[i].question +'</p>');
        //loop through answers
        for (var j=0; j < questions[i].answers.length; j++) {
            $('.js-questions').append('<input type="radio" value="'+ questions[i].answers[j]+ '" name="'+ i + '">' + questions[i].answers[j] +'</input>');
        }
        $('.js-questions').append('<br><br>');
    }

    //show stop button
    $('.hide').show();
    
}

 function startTimer () {
    var timeleft = 120;
        //timer will count down
        triviaTimer = setInterval(function(){       
            $(".js-count").text(--timeleft);
            
            //if timer gets to 0, stop game and timer
            if(timeleft === 0) {
                //timeleft = 1
                stopGame();
                clearInterval(triviaTimer);
                //hide start button, questions, counter and stop button
                $(".hidethree").hide();
                $('.hide').hide();
                //show results div
                $(".hidetwo").show();
            }
        }, 1000);
};


function stopGame () {

    for (let i = 0; i<questions.length; i++){
        let tempSelector = $("input:checked").get(i);
        let userAnswer = $(tempSelector).val(); 
        if (userAnswer === questions[i].correctAnswer) {
             //if correct answer, record as correct
            rightAnswers++;
            $("#correct").text(rightAnswers);
        } if (userAnswer !== questions[i].correctAnswer) {
             //if incorrect or unanswered, record as incorrect
            wrongAnswers++;
            $("#incorrect").text(wrongAnswers);
        }
    }

};

//events
//when the user clicks start, begin game and show questions
$(".js-start").on('click', function() {
    startGame();
    //begin timer at start game
    startTimer();

});

//end game when stop button is clicked
$(".js-stop").on('click', function() {
    stopGame();
    //stop the timer when stop button has been selected
    clearInterval(triviaTimer);
    //hide start button, questions, counter and stop button
    $(".hidethree").hide();
    $('.hide').hide();
    //show results div
    $(".hidetwo").show();

});


});