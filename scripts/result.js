var canvas = document.querySelector("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
console.log("canvas");




function getResultForm(){
    if(localStorage.score != undefined){ 
    	var attempts_attempt = 3;
    var score_achieved = document.getElementById("score_achieved").textContent = localStorage.score;
    if(score_achieved == 15){
    	document.getElementById("text").innerHTML = "Congratulations! You got all 10 answers correct";
    }
    var attempts_made = document.getElementById("attempts_made").textContent = localStorage.attempts;
    var attempts_remaining = document.getElementById("attempts_remaining").textContent = attempts_attempt - attempts_made;
        if(localStorage.getItem("attempts") < 3) // if the attempts made by user are less than 3 then quiz.html is called.
            document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + " " +"<a href='quiz.html'>Quiz</a>" + " " + "or" + " " + "<a href='topic.html'>Read Topic</a>";
        else
            document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + " " +"<span>Can't Take Test anymore,attempts are completed <a href='topic.html'>Click here to learn about Web Development</a></span>";
    }
}

function init () {
	getResultForm();
    menutoggle();
 }

window.onload = init;