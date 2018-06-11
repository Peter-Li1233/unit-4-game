//define a variable to store the number of Wins;
var winCounter = 0;
//define a variable to store the number of Losses;
var lossCounter = 0;
//define a variable to store the random number (19-120);
var randomNum;
//define a variable to store the total score number; (0 in the beginning);
var totalScore;
//define 4 variable to store the random value of 4 crystalls (1-12);
var crystal1, crystal2, crystal3, crystal4
//addEventListener to window object;
window.addEventListener('load',function() {
//initialize:
reset();
    //generate the random number between (19 -120);
    //display the randomNumber at its position; 
    //generate the randomNumber for 4 crystalls (1-12)
    //assign the random value to 4 crystalls attribute :value
    //set the total score to zero;
    //display total score at right position;

//when the user click any crystal:
$(".button").on("click",function(){

    // get the  value of the crystall button;
    // update total score = total score +random value of the clicked crystall
    var buttonValue = $(this).attr("value");
    totalScore += parseInt($(this).attr("value"));
    console.log(totalScore);
    //debugger;
    console.log($(this).attr("id"));
    //Display the button value when clicked, make it disappear after others clicked;
    if ($(this).attr("id") ==="b1") {
        $("#value1").html(buttonValue);
        $("#value1").css("display","block");
        $("#value2").css("display","none");
        $("#value3").css("display","none");
        $("#value4").css("display","none");
        } 
    if ($(this).attr("id") ==="b2") {
        $("#value2").html(buttonValue);
        $("#value2").css("display","block");
        $("#value1").css("display","none");
        $("#value3").css("display","none");
        $("#value4").css("display","none");
        }
    if ($(this).attr("id") ==="b3") {
        $("#value3").html(buttonValue);
        $("#value3").css("display","block");
        $("#value1").css("display","none");
        $("#value2").css("display","none");
        $("#value4").css("display","none");
        }
    if ($(this).attr("id") ==="b4") {
        $("#value4").html(buttonValue);
        $("#value4").css("display","block");
        $("#value1").css("display","none");
        $("#value2").css("display","none");
        $("#value3").css("display","none");
        }   
  
    // display the value of the crystal buttion;
    $("#total-score").html(totalScore);
    console.log(totalScore > randomNum);
    console.log(totalScore === randomNum);

    // if the total score > random number
    if (totalScore > randomNum) {
        // loss, number of loss++1;
        lossCounter++;
        //display the loss numbers on right position;
        $("#loss").html("Losses: " + lossCounter);
        // reset 
        reset();
    // else if the total number = random number:
    }   else if (totalScore === randomNum) {
    
       // wins, number of wins++1;
       winCounter++;
       //display the win numbers on right position;
       $("#wins").html("Wins: " + winCounter);
       //reset
       reset();
    }
});
//reset function: 
function reset() {
    //generate the random number between (19 -120);
    randomNum = randomIntfromInterval(19,120);
        console.log(randomNum);
    //display the randomNumber at its position; 
    $("#random-score").html(randomNum);
        
    //generate the randomNumber for 4 crystalls (1-12)
    crystal1 = randomIntfromInterval(1,12);
        console.log(crystal1);
    crystal2 = randomIntfromInterval(1,12); 
        console.log(crystal2);
    crystal3 = randomIntfromInterval(1,12); 
        console.log(crystal3);
    crystal4 = randomIntfromInterval(1,12); 
        console.log(crystal4);
    //assign the random value to 4 crystalls attribute :value
    $(".button1").attr("value",crystal1);
    $(".button2").attr("value",crystal2);
    $(".button3").attr("value",crystal3);
    $(".button4").attr("value",crystal4);
    //set the total score to zero;
    totalScore = 0;
    //display total score at right position;
    $("#total-score").html(totalScore);
    //Hide the button value
    $("#value1").css("display","none");
    $("#value2").css("display","none");
    $("#value3").css("display","none");
    $("#value4").css("display","none");
}
function randomIntfromInterval(min,max) {
    return Math.floor (Math.random()*(max-min+1)+min);
}
});    