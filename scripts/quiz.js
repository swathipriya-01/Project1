//alert("connected!!!");

/*var body = document.body;

body.classList.add("MyClass");*/
"use strict";

var emial = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var firstName = document.getElementById("firstName");

//validate user name

function validateUser(){
     if(firstName.value.trim() == ""){
        document.getElementById('fName').innerHTML = "First Name Required!";
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if(!(firstName.value.match(letters))){
        document.getElementById('fName').innerHTML = "Input alphabet characters only! (eg: John.D)";
        return false;
    }

    if(email.value.trim() == ""){
        document.getElementById('emai-id').innerHTML = "Email Required!";  
        return false;
    } 
    /*if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signUpForm.email.value))
    {
        return (true);
    }
    document.getElementById('emai-id').innerHTML = "Enter a valid email address! (eg: abc@example.com)";
        return (false);*/

    if(password.value.trim() == ""){
        document.getElementById('pswd').innerHTML = "Password Required!";
        return false;
    }
    if((password.value).length <= 5){
        document.getElementById('pswd').innerHTML = "Too short Password! (Password must be between 6 to 10 characters)";
        return false;
    }
    if((password.value).length >= 11){
        document.getElementById('pswd').innerHTML = "Too long Password! (Password must be between 6 to 10 characters)";
        return false;
    }
     if(password.value.trim() !== confirmPassword.value.trim()){
        document.getElementById('pswdcnfm').innerHTML = "Password and Confirm Password should match!";
        return false;
    } 

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signUpForm.email.value))
    {
        return (true);
    }
    else{
        document.getElementById('emai-id').innerHTML = "Enter a valid email address! (eg: abc@example.com)";
        return (false);
    }
    
}


function validateLogInData (){
    if(email.value.trim() == ""){
        document.getElementById('emai-id').innerHTML = "Email Required!";  
        return false;
    }

     if(password.value.trim() == ""){
        document.getElementById('pswd').innerHTML = "Password Required!";
        return false;
    } 

}


var attempt = localStorage.attempts == undefined ? 0 : localStorage.attempts;
function checkAnswers(){
    var result = true;
    var errMsg = validateQuestions();
    attempt++;
    if(errMsg == "")
    {
        var score = calculateScore();
        // Performs a validation for score and attempts 
        if(score == 0 && attempt <= 3){         
            result = false;
        }       
        else{
            localStorage.score = score;
            localStorage.attempts = attempt;
        }
    }
    else{
        alert(errMsg);
        result = false;
    }
    return result;
}


function validateQuestions(){
    var errMsg ="";
    var q2option1 = document.getElementById('q2option1').checked;
    var q2option2 = document.getElementById('q2option2').checked;
    var q2option3 = document.getElementById('q2option3').checked;
    var q2option4 = document.getElementById('q2option4').checked;
    if(!(q2option1 || q2option2 || q2option3 || q2option4)){
        errMsg = errMsg + "Question 2 is not answered!\n";
    }

    if(document.getElementById("question3").value == "none"){
        // if no option is selected then error message is displayed 
        errMsg = errMsg + "Question 3 is not answered!\n";      
    }

    var q4option1 = document.getElementById("q4option1").checked;
    var q4option2 = document.getElementById("q4option2").checked;
    var q4option3 = document.getElementById("q4option3").checked;
    var q4option4 = document.getElementById("q4option4").checked;
    if(!(q4option1 || q4option2 || q4option3 || q4option4)){
        // if no option is selected then error message is displayed 
        errMsg = errMsg + "Question 4 is not answered!\n";
    }

    var q5option1 = document.getElementById("q5option1").checked;
    var q5option2 = document.getElementById("q5option2").checked;
    var q5option3 = document.getElementById("q5option3").checked;
    if(!(q5option1 || q5option2 || q5option3)){
        // if no option is selected then error message is displayed 
        errMsg = errMsg + "Question 5 is not answered!\n";
    }

    var q6option1 = document.getElementById("q6option1").checked;
    var q6option2 = document.getElementById("q6option2").checked;
    var q6option3 = document.getElementById("q6option3").checked;
    var q6option4 = document.getElementById("q6option4").checked;
    if(!(q6option1 || q6option2 || q6option3 || q6option4)){
        // if no option is selected then error message is displayed 
        errMsg = errMsg + "Question 6 is not answered!\n";
    }

    var q8option1 = document.getElementById("q8option1").checked;
    var q8option2 = document.getElementById("q8option2").checked;
    var q8option3 = document.getElementById("q8option3").checked;
    var q8option4 = document.getElementById("q8option4").checked;
    if(!(q8option1 || q8option2 || q8option3 || q8option4)){
        // if no option is selected then error message is displayed 
        errMsg = errMsg + "Question 8 is not answered!\n";
    }

    var q9option1 = document.getElementById("q9option1").checked;
    var q9option2 = document.getElementById("q9option2").checked;
    var q9option3 = document.getElementById("q9option3").checked;
    if(!(q9option1 || q9option2 || q9option3)){
        // if no option is selected then error message is displayed 
        errMsg = errMsg + "Question 9 is not answered!\n";
    }

    var q10option1 = document.getElementById("q10option1").checked;
    var q10option2 = document.getElementById("q10option2").checked;
    var q10option3 = document.getElementById("q10option3").checked;
    var q10option4 = document.getElementById("q10option4").checked;
    if(!(q10option1 || q10option2 || q10option3 || q10option4)){
        // if no option is selected then error message is displayed 
        errMsg = errMsg + "Question 10 is not answered!\n";
    }

    return errMsg;
}

function calculateScore(){
    var score = 0;
    // compares the user answers withs the correct answers 
    if(document.getElementById("q1").value.toUpperCase() == "HYPER TEXT MARKUP LANGUAGE")
        score = score + 1;
    if(document.getElementById("q2option2").checked)
        score = score + 1;
    if(document.getElementById("question3").value == "Cookie")
        score = score + 1;
    if(document.getElementById("q4option4").checked)
        score = score + 1;
    if(document.getElementById("q5option2").checked)
        score = score + 1;
    if(document.getElementById("q6option1").checked)
        score = score + 1;
    if(document.getElementById("q6option2").checked)
        score = score + 1;
    if(document.getElementById("q6option3").checked)
        score = score + 1;
    if(document.getElementById("q6option4").checked)
        score = score + 1;
    if(document.getElementById("q7").value.toUpperCase() == "CASCADING STYLE SHEET")
        score = score + 1;
     if(document.getElementById("q8option1").checked)
        score = score + 1;
     if(document.getElementById("q8option2").checked)
        score = score + 1;
     if(document.getElementById("q8option3").checked)
        score = score + 1;
     if(document.getElementById("q9option2").checked)
        score = score + 1;
     if(document.getElementById("q10option1").checked)
        score = score + 1;
    // if the score of user is zero then a prompt to user is given to re attempt the quiz
    if(score <= 5)
        alert("Failed in test, Please read the topic and attempt again ");

    return score; //returns the calculated score
}

/*function getResultForm(){
    if(localStorage.score != undefined){ 
    var score_achieved = document.getElementById("score_achieved").textContent = localStorage.score;
    var attempts_made = document.getElementById("attempts_made").textContent = localStorage.attempts;
        if(localStorage.getItem("attempts") < 3) // if the attempts made by user are less than 3 then quiz.html is called.
            document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + " " +"<a href='quiz.html'>Quiz</a>";
        else
            document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + " " +"<span>Can't Take Test anymore,attempts are completed</span>";
    }
}*/

/*function saveAns(){
    var q1 = document.getElementById("q1");
    var quespan = document.getElementsByClassName("quespan");
    if(q1 != ""){
        quespan.textContent = "Good";
    }
}
*/

function resetForm(){
    localStorage.clear();
    this.form.reset();
}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})

function init() {
    if(attempt >= 3)
        document.getElementById("submit").disabled = true;
    else
        document.getElementById("submit").disabled = false;

    var quizform = document.getElementById("quizform"); 
    quizform.onsubmit = checkAnswers; // when submit button is clicked checkAnswers is called
    document.getElementById("resetbtn").onclick = resetForm;

    /*var uname = document.getElementById ("uname");
    uname.onblur = checkdata;*/
    //getResultForm();
}

window.onload = init;