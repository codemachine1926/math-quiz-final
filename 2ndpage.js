player1_score = 0;
player2_score = 0;

name1 = localStorage.getItem("Name1");
name2 = localStorage.getItem("Name2");

document.getElementById("player1_name").innerHTML = name1 + " : ";
document.getElementById("player2_name").innerHTML = name2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = name1 + "'s turn to question";
document.getElementById("player_answer").innerHTML = name2 + "'s turn to answer";

function send() {

    number1 = document.getElementById("input_1").value;
    number2 = document.getElementById("input_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("input_1").value = "";
    document.getElementById("input_2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {

    get_answer = document.getElementById("input_check_box").value;

    if(get_answer == actual_answer) {
        
        if(answer_turn == "player2") {

            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else{

            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    }

    if(question_turn == "player1") {

        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + name2;
    }
    else{

        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - " + name1;
       }

       if(answer_turn == "player1") {

        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn - " + name2;
    }
    else{

        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn - " + name1;
       }

       document.getElementById("output").innerHTML = "";
}