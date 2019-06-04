// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

var gameData = {
    questions : ["What is the color of the sky?", "What is 2+2"],
    answers: [["blue", "red", "green", "purple"],["5", "2", "4", "8"]],
    correctAnswers: ["blue","4"],
    userCorrectAnswers: [],
    userIncorrectAnswers: [],
    userNoAnswers: [],

    restart: function() {
        this.userCorrectAnswers = [];
        this.userIncorrectAnswer = [];
        this.userNoAnswers = [];
    }
};

function displayQuestions(){
    $("#question").text(gameData.questions[0]);

};

function displayAnswers(){
    
};

function displayCorrectAnswer(){
    
};

$(document).ready(function() {

    $("button").click(function(){
        console.log("in click");
        $("#theGame").show();
        $("#theButton").hide();
        displayQuestions();

    });
});

