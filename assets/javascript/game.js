var question = ["During the early stages of production, WHO auditioned for the role of Jerry.",
"Who does the voice Jerry?",
"A poster of WHAT RAPPER(S) can be seen in Summer's room on the door",
"Who does the voice of Beth?",
"When does season 3 come out?"];
var questionAnswers = [['Bryan Cranston', 'The Rock', 'Kevin Hart', 'Brad Pitt'], 
['Justin Bieber', 'Chris Patt', 'Chris Parnell', 'Bryan Cranston'], 
["Tupac Shakur", "Lil Uzi Vert", "Wu-Tang Clan", "Ice Cube"],
["Taylor Swift", "Sarah Chalke", "Naomi Scott", "Emilia Clarke"],
["12-12-19", "08-18-19", "07-19-19", "It's already out"]];
var answers = ["Bryan Cranston","Chris Parnell", "Tupac Shakur", "Sarah Chalke", "It's already out"];
var displayCorrectId;
var timerId;
var textCorrectAnswer;
var count = 0;
var seconds = 30;
var answerSeconds = 4;
var right = 0;
var wrong = 0;
var noAnswer = 0;
var running = false;
var textAnswer = false;

function displayQuestion() {
    $("#question").html("<p>"+question[count]+"</p><br>"); 
    for(var i = 0; i <4; i++){
        $("#answer"+i).html("<button>"+questionAnswers[count][i].toString()+"</button><br>");
    }
    if (count > 4) {
        endGame();
    }

}

function runTimer() {
    if (!running){
    timerId = setInterval(decrementTime, 1000);
    $("#time").text("30");
    running = true;
    }
}

function decrementTime() {

    seconds--;

    $("#time").html("<h2>" + seconds + "</h2>");

    if (seconds <= 0) {
    stopTimer();
    runDisplayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
    noAnswer++;
    count++;
    }
}

function stopTimer() {
    clearInterval(timerId);
    running = false;
    $("#time").text("Processing Answer...");
    seconds = 30;
}

function startGame() {
    $("#tryAgain").hide();
    console.log('current count ' +count);
    if (count > 4) {   
        endGame();
    }
    else {
        runTimer();
        displayQuestion();
        $("#theGame").show();
        $("#question").show();
        $("#answers").show();
        $("#time").show();
        $("#showAnswer").hide();
        $("#theButton").hide();
    }
}

function runDisplayCorrectAnswer(rightWrong, theCorrectAnswer){
    if(!textAnswer){
        displayCorrectId = setInterval(function(){
            answerSeconds--;
            $("#showAnswer").text(rightWrong + " " + theCorrectAnswer);
            $("#question").hide();
            $("#answers").hide();
            $("#time").hide();
            $("#showAnswer").show();
            if (answerSeconds <= 0){
                stopDisplayCorrectAnswer();
                startGame();  
            }
        }, 1000);
        textAnswer = true;    
    } 
};

function stopDisplayCorrectAnswer() {
    clearInterval(displayCorrectId);
    textAnswer= false;
    answerSeconds =4;
    console.log("textAnswer" + textAnswer);
}

function endGame() {
    $("#question").hide();
    $("#answers").hide();
    $("#time").hide();
    $("#tryAgain").show();
    $("#showAnswer").text("You answered " + right + " right, " + wrong + " wrong, and "+noAnswer+ " unanswered");
    $("#tryAgain").html("<button>TRY AGAIN?</button>");
}

window.onload = function() {
    $("#theButton").click(startGame);

    $("#answer0").click(function() {
        stopTimer();
        var userPick = $("#answer0").text();
        if(userPick === answers[count]) {
            runDisplayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
            right++; 
        }
        else {
            runDisplayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
            wrong++;
        } 
        count++;
    });

    $("#answer1").click(function() {
        stopTimer();
        var userPick = $("#answer1").text();
        if(userPick === answers[count]) {
            runDisplayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
            right++; 
        }
        else {
            runDisplayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
            wrong++;
        } 
        count++;
    });

    $("#answer2").click(function() {
        stopTimer();
        var userPick = $("#answer2").text();
        if(userPick === answers[count]) {
            runDisplayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
            right++; 
        }
        else {
            runDisplayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
            wrong++;
        } 
        count++;
    });

    $("#answer3").click(function() {
        stopTimer();
        var userPick = $("#answer3").text();
        if(userPick === answers[count]) {
            runDisplayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
            right++; 
        }
        else {
            runDisplayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
            wrong++;
        } 
        count++;

    });

    $("#answer4").click(function() {
        stopTimer();
        var userPick = $("#answer4").text();
        if(userPick === answers[count]) {
            runDisplayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
            right++; 
        }
        else {
            runDisplayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
            wrong++;
        } 
        count++;

    });

    $("#tryAgain").click(function(){
        displayCorrectId;
        timerId;
        textCorrectAnswer;
        count = 0;
        seconds = 30;
        answerSeconds = 4;
        right = 0;
        wrong = 0;
        noAnswer = 0; 
        startGame();
    });
};

