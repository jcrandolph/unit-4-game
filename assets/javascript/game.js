//$(document).ready(function(){ 
//variables
let wins = 0;
let losses = 0;
let totalScore = 0;

//my random number
let randomNumber = genRandomNumber();
console.log(randomNumber);
//function  to get random number
function genRandomNumber() {
    return [Math.floor(Math.random() * (102) + 19)];
}

//set 4 crystals random values
let crystal1Value = [Math.floor(Math.random() * (12) + 1)];
let crystal2Value = [Math.floor(Math.random() * (12) + 1)];
let crystal3Value = [Math.floor(Math.random() * (12) + 1)];
let crystal4Value = [Math.floor(Math.random() * (12) + 1)];
console.log(crystal1Value, crystal2Value, crystal3Value, crystal4Value);

function randomValue() {
    let crystal1Value = [Math.floor(Math.random() * (12) + 1)];
    let crystal2Value = [Math.floor(Math.random() * (12) + 1)];
    let crystal3Value = [Math.floor(Math.random() * (12) + 1)];
    let crystal4Value = [Math.floor(Math.random() * (12) + 1)];
    console.log(crystal1Value, crystal2Value, crystal3Value, crystal4Value);
}

$("#crystal1").on("click", function () {
    crystal1Value = parseInt(crystal1Value);
    totalScore = parseInt(totalScore);
    (totalScore = totalScore + crystal1Value);
    $("#totalScore").text(totalScore);
    console.log(totalScore);
    if (randomNumber === totalScore) {
        wins++;
        $("#Wins").text(wins);
        genRandomNumber();
        randomValue();
        totalScore = 0;
        $("#result").text("You Win!")
    }
    else if (randomNumber < totalScore) {
        losses++;
        $("#Losses").text(losses);
        genRandomNumber();
        randomValue();
        totalScore = 0;
        $("#result").text("You Lose!")
    }
})
    $("#crystal2").on("click", function () {
        crystal2Value = parseInt(crystal2Value);
        totalScore = parseInt(totalScore);
        (totalScore = totalScore + crystal2Value);
        $("#totalScore").text(totalScore);
        console.log(totalScore);
        if (randomNumber === totalScore) {
            wins++;
            $("#Wins").text(wins);
            genRandomNumber();
            randomValue();
            totalScore = 0;
            $("#result").text("You Win!")
        }
        else if (randomNumber < totalScore) {
            losses++;
            $("#Losses").text(losses);
            genRandomNumber();
            randomValue();
            totalScore = 0;
            $("#result").text("You Lose!")
        }
    })
        $("#crystal3").on("click", function () {
            crystal3Value = parseInt(crystal3Value);
            totalScore = parseInt(totalScore);
            (totalScore = totalScore + crystal3Value);
            $("#totalScore").text(totalScore);
            console.log(totalScore)
            if (randomNumber === totalScore) {
                wins++;
                $("#Wins").text(wins);
                genRandomNumber();
                randomValue();
                totalScore = 0;
                $("#result").text("You Win!");
            }
            else if (randomNumber < totalScore) {
                losses++;
                $("#Losses").text(losses);
                genRandomNumber();
                randomValue();
                totalScore = 0;
                $("#result").text("You Lose!");
            }
        })
            $("#crystal4").on("click", function () {
                crystal4Value = parseInt(crystal4Value);
                totalScore = parseInt(totalScore);
                (totalScore = totalScore + crystal4Value);
                $("#totalScore").text(totalScore);
                console.log(totalScore);

                if (randomNumber === totalScore) {
                    wins++;
                    $("#Wins").text(wins);
                    genRandomNumber();
                    randomValue();
                    totalScore = 0;
                    $("#result").text("You Win!");
                }
                else if (randomNumber < totalScore) {
                    losses++;
                    $("#Losses").text(losses);
                    genRandomNumber();
                    randomValue();
                    totalScore = 0;
                    $("#result").text("You Lose!")
                                }
                $("#randomNumber").text(randomNumber);
            })
