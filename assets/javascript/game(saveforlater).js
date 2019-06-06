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

var showQuestion;
var displayTimer;
var textCorrectAnswer;
var count = 0;
var seconds = 30;
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

function startGame() {
    
    //this is being run every 1 second
    if (count > 4) {
        
        endGame();
    }
    else {
        theDisplayTimer = setInterval(displayTimer, 1000);
        $("#theGame").show();
        $("#question").show();
        $("#answers").show();
        $("#time").show();
        $("#showAnswer").hide();
        $("#theButton").hide();
    }
    

}

function restart() {
    showQuestion;
    displayTimer;
    textCorrectAnswer;
    count = 0;
    seconds = 30;
    right = 0;
    wrong = 0;
    noAnswer = 0;
    //this is being run every 1 second
    if (count > 4) {
        
        endGame();
    }
    else {
    theDisplayTimer = setInterval(displayTimer, 1000);
    $("#theGame").show();
    $("#question").show();
    $("#answers").show();
    $("#time").show();
    $("#showAnswer").hide();
    $("#theButton").hide();
    }
    
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

function displayTimer() {
        displayQuestion();
        $("#time").text(seconds);
        seconds--;
        
        if(seconds === 0){
            //display correct answer
            clearInterval(theDisplayTimer);
            textCorrectAnswer = setInterval(displayCorrectAnswer("YOUR WRONG", "Correct answer is: " + answers[count]), 1000);
            setTimeout(function() {
                $("#time").empty();
                $("#question").empty();
                $("#answer0").empty();
                $("#answer1").empty();
                $("#answer2").empty();
                $("#answer3").empty();
                count++; 
                seconds =30;
                noAnswer++;
                startGame();
        
            }, 5000);
        }
  }

function stopQuestionSlide() {
    seconds = 30;
    clearTimeout(theDisplayTimer);
}

function displayCorrectAnswer(rightWrong, theCorrectAnswer){
    $("#rightwrong").text(rightWrong);
    $("#theCorrectAnswer").text(theCorrectAnswer);
    $("#question").hide();
    $("#answers").hide();
    $("#time").hide();
    $("#showAnswer").show();
    console.log("In display Correct Answer function");
    
};

$("#theButton").click(startGame);

$("#answer0").click(function() {
    stopQuestionSlide();
    var userPick = $("#answer0").text();
    if(userPick === answers[count]) {
        console.log("right");
        //display correct answer for 5 seconds
        displayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
        right++; 

    }
    else {
        console.log("wrong");
        displayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
        wrong++;
 
    }   
    setTimeout(function() {
        $("#time").empty();
        $("#question").empty();
        $("#answer0").empty();
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
        count++;
        startGame();   

    }, 5000);
    

});

$("#answer1").click(function() {
    stopQuestionSlide();
    var userPick = $("#answer1").text();
    if(userPick === answers[count]) {
        console.log("right");
        //display correct answer for 5 seconds
        displayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
        right++;
    
    }
    else {
        console.log("wrong");
        displayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
        wrong++;
        
 
    }   
    setTimeout(function() {
        $("#time").empty();
        $("#question").empty();
        $("#answer0").empty();
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
        count++;
        startGame();   

    }, 5000);
    

});
$("#answer2").click(function() {
    stopQuestionSlide();
    var userPick = $("#answer2").text();
    if(userPick === answers[count]) {
        console.log("right");
        //display correct answer for 5 seconds
        displayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
        right++;
    }
    else {
        console.log("wrong");
        displayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
        wrong++;
 
    }   
    setTimeout(function() {
        $("#time").empty();
        $("#question").empty();
        $("#answer0").empty();
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
        count++;
        startGame();   

    }, 5000);
    

});
$("#answer3").click(function() {
    stopQuestionSlide();
    var userPick = $("#answer3").text();
    if(userPick === answers[count]) {
        console.log("right");
        //display correct answer for 5 seconds
        displayCorrectAnswer("YOUR RIGHT", "CORRECT ANSWER IS " +answers[count]);
        right++;   
        
    }
    else {
        console.log("wrong");
        displayCorrectAnswer("YOUR WRONG", "CORRECT ANSWER IS " +answers[count]);
        wrong++;
 
    }   
    setTimeout(function() {
        $("#time").empty();
        $("#question").empty();
        $("#answer0").empty();
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
        count++;
        startGame();   

    }, 5000);
    

});

$("#tryAgain").click(function() {
    restart();

});
