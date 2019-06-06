var question = ["During the early stages of production, WHO auditioned for the role of Jerry.",
"Who does the voice Jerry?",
"A poster of WHAT RAPPER(S) can be seen in Summer's room on the door",
"Who does the voice of Beth?",
"When does season 3 come out?"];
var questionAnswers= {
    a0: ['Bryan Cranston', 'The Rock', 'Kevin Hart', 'Brad Pitt'],
    a1: ['Justin Bieber', 'Chris Patt', 'Chris Parnell', 'Bryan Cranston'],
    a2: ["Tupac Shakur", "Lil Uzi Vert", "Wu-Tang Clan", "Ice Cube"],
    a3: ["Taylor Swift", "Sarah Chalke", "Naomi Scott", "Emilia Clarke"],
    a4: ["12-12-19", "08-18-19", "07-19-19", "It's already out"]
};
var answers = ["Bryan Cranston","Chris Parnell", "Tupac Shakur", "Sarah Chalke", "It's already out"];

var displayCorrectId;
var timerId;
var textCorrectAnswer;
var count = 0;
var seconds = 31;
var answerSeconds = 4;
var right = 0;
var wrong = 0;
var noAnswer = 0;


function displayQuestion() {
    if (count ===0){
        $("#question").html("<p>"+question[count]+"</p><br>"); 
        $("#answer0").html("<button>"+questionAnswers.a0[0]+"</button><br>");
        $("#answer1").html("<button>"+questionAnswers.a0[1]+"</button><br>");
        $("#answer2").html("<button>"+questionAnswers.a0[2]+"</button><br>");
        $("#answer3").html("<button>"+questionAnswers.a0[3]+"</button><br>");
    }
    if (count ===1){
        $("#question").html("<p>"+question[count]+"</p><br>"); 
        $("#answer0").html("<button>"+questionAnswers.a1[0]+"</button><br>");
        $("#answer1").html("<button>"+questionAnswers.a1[1]+"</button><br>");
        $("#answer2").html("<button>"+questionAnswers.a1[2]+"</button><br>");
        $("#answer3").html("<button>"+questionAnswers.a1[3]+"</button><br>");
    }
    if (count ===2){
        $("#question").html("<p>"+question[count]+"</p><br>"); 
        $("#answer0").html("<button>"+questionAnswers.a2[0]+"</button><br>");
        $("#answer1").html("<button>"+questionAnswers.a2[1]+"</button><br>");
        $("#answer2").html("<button>"+questionAnswers.a2[2]+"</button><br>");
        $("#answer3").html("<button>"+questionAnswers.a2[3]+"</button><br>");
    }
    if (count ===3){
        $("#question").html("<p>"+question[count]+"</p><br>"); 
        $("#answer0").html("<button>"+questionAnswers.a3[0]+"</button><br>");
        $("#answer1").html("<button>"+questionAnswers.a3[1]+"</button><br>");
        $("#answer2").html("<button>"+questionAnswers.a3[2]+"</button><br>");
        $("#answer3").html("<button>"+questionAnswers.a3[3]+"</button><br>");
    }
    if (count ===4){
        $("#question").html("<p>"+question[count]+"</p><br>"); 
        $("#answer0").html("<button>"+questionAnswers.a4[0]+"</button><br>");
        $("#answer1").html("<button>"+questionAnswers.a4[1]+"</button><br>");
        $("#answer2").html("<button>"+questionAnswers.a4[2]+"</button><br>");
        $("#answer3").html("<button>"+questionAnswers.a4[3]+"</button><br>");
    }
    if (count > 4) {
        endGame();
    }
 
}

var running = false;
var textAnswer = false;

function runTimer() {
    if (!running){
    timerId = setInterval(decrementTime, 1000);
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
    seconds = 31;
}

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

function runDisplayCorrectAnswer(rightWrong, theCorrectAnswer){
    if(!textAnswer){
        displayCorrectId = setInterval(function(){
            answerSeconds--;
            $("#rightwrong").text(rightWrong);
            $("#theCorrectAnswer").text(theCorrectAnswer);
            $("#question").hide();
            $("#answers").hide();
            $("#time").hide();
            $("#showAnswer").show();
            console.log("In display Correct Answer function");
            if (answerSeconds <= 0){
                stopDisplayCorrectAnswer();
                
                startGame();  
            }
        }, 2000);
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
    $("#showAnswer").empty();
    $("#question").hide();
    $("#answers").hide();
    $("#time").hide();
    $("#tryAgain").show();
    $("showAnswer").show();
    $("#showAnswer").text("You answered " + right + " right, " + wrong + " wrong, and "+noAnswer+ " unanswered");
    $("#tryAgain").html("<button>TRY AGAIN?</button>");
}

$("#theButton").click(startGame);


$("#answer0").click(function() {
    stopTimer();
    var userPick = $("#answer0").text();
    if(userPick === answers[count]) {
        console.log("right");
        runDisplayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
        right++; 
        

    }
    else {
        console.log("wrong");
        runDisplayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
        wrong++;
 
    } 
    count++;

});

$("#answer1").click(function() {
    stopTimer();
    var userPick = $("#answer1").text();
    if(userPick === answers[count]) {
        console.log("right");
        runDisplayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
        right++; 
        

    }
    else {
        console.log("wrong");
        runDisplayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
        wrong++;
 
    } 
    count++;

});

$("#answer2").click(function() {
    stopTimer();
    var userPick = $("#answer2").text();
    if(userPick === answers[count]) {
        console.log("right");
        runDisplayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
        right++; 
        

    }
    else {
        console.log("wrong");
        runDisplayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
        wrong++;
 
    } 
    count++;

});

$("#answer3").click(function() {
    stopTimer();
    var userPick = $("#answer3").text();
    if(userPick === answers[count]) {
        console.log("right");
        runDisplayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
        right++; 
        

    }
    else {
        console.log("wrong");
        runDisplayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
        wrong++;
 
    } 
    count++;

});

$("#answer4").click(function() {
    stopTimer();
    var userPick = $("#answer4").text();
    if(userPick === answers[count]) {
        console.log("right");
        runDisplayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
        right++; 
        

    }
    else {
        console.log("wrong");
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
    seconds = 31;
    answerSeconds = 4;
    right = 0;
    wrong = 0;
    noAnswer = 0;
    startGame();
});

