var question = ["During the early stages of production, ___________ auditioned for the role of Jerry.",
"______ does the voice of Jerry (Morty's Father).",
"A poster of _______ can be seen in Summer's room on the door.",
"_______ does the voice of Beth (Morty's Mother).",
"Pickle Rick first appears in ________"];
var questionAnswers = [['Bryan Cranston', 'The Rock', 'Kevin Hart', 'Brad Pitt'], 
['Justin Bieber', 'Chris Patt', 'Chris Parnell', 'Bryan Cranston'], 
["Tupac Shakur", "Lil Uzi Vert", "Wu-Tang Clan", "Ice Cube"],
["Taylor Swift", "Sarah Chalke", "Naomi Scott", "Emilia Clarke"],
["Season 04", "Season 02", "Season 01", "Season 03"]];
var answers = ["Bryan Cranston","Chris Parnell", "Tupac Shakur", "Sarah Chalke", "Season 03"];
var displayCorrectId;
var timerId;
var count = 0;
var seconds = 30;
var answerSeconds = 4;
var right = 0;
var wrong = 0;
var noAnswer = 0;
var running = false;
var textAnswer = false;

//Display question function
//We grab question id and change the html to the current question
//create a for loop that prints all answer options to the correct answer button
//if count is > 4, we know the game is over
function displayQuestion() {
    $("#question").html("<p>"+question[count]+"</p><br>"); 
    for(var i = 0; i <4; i++){
        $("#answer"+i).html("<button class='btn btn-primary btn-block'>"+questionAnswers[count][i].toString()+"</button><br>");
    }
    if (count > 4) {
        endGame();
    }
}

//function to run timer
//we have running set false
//so we know we can run the decrementTime in the setInterval every 1 second
//set running to true
function runTimer() {
    if (!running){
    timerId = setInterval(decrementTime, 1000);
    $("#time").text("Time Remaining: 30s");
    running = true;
    }
}

//In decrementTime, we are taking away 1 from seconds every second
//We display the current seconds in id time
//if we know seconds is less than or equal to 0, the player ran out of time
//we display the correct answer to the user
//add 1 to noAnswer and count
function decrementTime() {
    seconds--;
    $("#time").html("<h2>Time Remaining: " + seconds + "s</h2>");
    if (seconds <= 0) {
    stopTimer();
    runDisplayCorrectAnswer("Wrong", "Correct answer is " +answers[count]);
    noAnswer++;
    count++;
    }
}

//This function stops the timer
// we clearInterval timerId
//set running back to false,
//and present a loading gif to the user
//add 30 back to seconds
function stopTimer() {
    clearInterval(timerId);
    running = false;
    $("#time").html('<img alt="activity indicator" src="assets/images/ajax-loader.gif" id="loading">');
    seconds = 30;
}

//this functino starts the game
//if count is greater than 4, we know the game is over (call endGame function)
//else, we run our timer and display the current question
//Hide and show appropriate divs
function startGame() {
    $("#tryAgain").hide();
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

//if textAnswer equals false, we run our displayCorrectId setinterval function
//we display that function every second
//if we know that answerSeconds (the amount of time we should the answer), is less than 0, we stop the display
//Then we call startGame to bring up the next question
//at the end of the if statment, we set textAnswer to true (we know we are done displaying the correct answer)
function runDisplayCorrectAnswer(rightWrong, theCorrectAnswer){
    if(!textAnswer){
        displayCorrectId = setInterval(function(){
            answerSeconds--;
            $("#showAnswer").html('<p>'+rightWrong + ' ' + theCorrectAnswer+'</p><br><img src=assets/images/'+count+'.jpg id="answerImage">');
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
//Clear displayCorrectId
//we set textAnswer to false, so we can go back into  our if statment in runDisplayCorrectAnswer
//set our display answerSeconds back to 4
function stopDisplayCorrectAnswer() {
    clearInterval(displayCorrectId);
    textAnswer= false;
    answerSeconds =4;
}

//function that ends game
//we hide and show correct divs
//set one dive to the score
//present a try again button
function endGame() {
    $("#question").hide();
    $("#answers").hide();
    $("#time").hide();
    $("#tryAgain").show();
    $("#showAnswer").text("Score: " + right + " right, " + wrong + " wrong, and "+noAnswer+ " unanswered");
    $("#tryAgain").html("<br><button>TRY AGAIN?</button>");
}

//functino to check answers
//if what we put into the function === the correct answer, display correct on screen add 1 to var right
//else, display wrong add 1 to var wrong
//always add 1 to count when function runs
function checkAnswers(x) {
    console.log("in Check Answer func "+ x);
    if(x === answers[count]) {
        runDisplayCorrectAnswer("Correct!", answers[count] + " is the correct answer.");
        right++; 
    }
    else {
        runDisplayCorrectAnswer("Wrong!", "Correct answer is " +answers[count]);
        wrong++;
    } 
    count++;
}

window.onload = function() {
    //when the user clicks on the Start button, we start the game
    $("#theButton").click(startGame);

    //if the user clicks on the first answer, we compare it to the true answer
    //we stop the timer
    //compare
    //if its correct, we add one to var right
    //else, we add one to var losses
    //we add 1 to count no matter what
    $("#answer0").click(function() {
        stopTimer();
        var userPick = $("#answer0").text();
        checkAnswers(userPick);
    });

    //if the user clicks on the second answer, we compare it to the true answer
    //we stop the timer
    //compare
    //if its correct, we add one to var right
    //else, we add one to var losses
    //we add 1 to count no matter what
    $("#answer1").click(function() {
        stopTimer();
        var userPick = $("#answer1").text();
        checkAnswers(userPick);
    });

    //if the user clicks on the third answer, we compare it to the true answer
    //we stop the timer
    //compare
    //if its correct, we add one to var right
    //else, we add one to var losses
    //we add 1 to count no matter what
    $("#answer2").click(function() {
        stopTimer();
        var userPick = $("#answer2").text();
        checkAnswers(userPick);
    });

    //if the user clicks on the four answer, we compare it to the true answer
    //we stop the timer
    //compare
    //if its correct, we add one to var right
    //else, we add one to var losses
    //we add 1 to count no matter what
    $("#answer3").click(function() {
        stopTimer();
        var userPick = $("#answer3").text();
        checkAnswers(userPick);
    });

    //if the user clicks on the fifth answer, we compare it to the true answer
    //we stop the timer
    //compare
    //if its correct, we add one to var right
    //else, we add one to var losses
    //we add 1 to count no matter what
    $("#answer4").click(function() {
        stopTimer();
        var userPick = $("#answer4").text();
        checkAnswers(userPick);
    });

    //if the user clicks on the try again button, we restart the game
    $("#tryAgain").click(function(){
        displayCorrectId;
        timerId;
        count = 0;
        seconds = 30;
        answerSeconds = 4;
        right = 0;
        wrong = 0;
        noAnswer = 0; 
        startGame();
    });
};

