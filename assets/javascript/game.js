// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

var gameData = {
    questions : ["During the early stages of production, WHO auditioned for the role of Jerry.",
        "Who does the voice Jerry?",
        "A poster of WHAT RAPPER(S) can be seen in Summer's room on the door",
        "Who does the voice of Beth?",
        "When does season 3 come out?"],
    answers: {
        a0: ['Bryan Cranston', 'The Rock', 'Kevin Hart', 'Brad Pitt'],
        a1: ['Justin Bieber', 'Chris Patt', 'Chris Parnell', 'Bryan Cranston'],
        a2: ["Tupac Shakur", "Lil Uzi Vert", "Wu-Tang Clan", "Ice Cube"],
        a3: ["Taylor Swift", "Sarah Chalke", "Naomi Scott", "Emilia Clarke"],
        a4: ["12-12-19", "08-18-19", "07-19-19", "It's already out"]
    },
    correctAnswers: ["Bryan Cranston","Chris Parnell", "Tupac Shakur", "Sarah Chalke", "It's already out"],
    userCorrectAnswers: [],
    userIncorrectAnswers: [],
    userNoAnswers: [],
    questionCount: 0,

    restart: function() {
        this.userCorrectAnswers = [];
        this.userIncorrectAnswer = [];
        this.userNoAnswers = [];
    }
};

function displayQuestions(x){
    $("#question").text(gameData.questions[x]);

};

function displayAnswers(answerObject){
    $("#answer0").html("<button>"+answerObject[0]+"</button><br>");
    $("#answer1").html("<button>"+answerObject[1]+"</button><br>");
    $("#answer2").html("<button>"+answerObject[2]+"</button><br>");
    $("#answer3").html("<button>"+answerObject[3]+"</button><br>");
    
};

//function to display the correct answer
//here the user will know if they got the answer right or wrong (update text)
function displayCorrectAnswer(rightWrong, theCorrectAnswer){
    $("#rightwrong").text(rightWrong);
    $("#theCorrectAnswer").text(theCorrectAnswer);
    
};

$(document).ready(function() {

    $("#theButton").click(function(){
        console.log("in click");
        $("#theGame").show();
        $("#theButton").hide();
        displayQuestions(0);
        displayAnswers(gameData.answers.a0);

    });

    $("#answer0").click(function(){

    });

    
});

