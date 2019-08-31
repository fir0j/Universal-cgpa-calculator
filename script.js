
// selecting each semesters sgpa
var sem1sgpa = document.querySelector("#sem1sgpa");
var sem2sgpa = document.querySelector("#sem2sgpa");
var sem3sgpa = document.querySelector("#sem3sgpa");
var sem4sgpa = document.querySelector("#sem4sgpa");
var sem5sgpa = document.querySelector("#sem5sgpa");
var sem6sgpa = document.querySelector("#sem6sgpa");

// selecting each semesters RegisteredCredit
var sem1Rcredit = document.querySelector("#sem1Rcredit");
var sem2Rcredit = document.querySelector("#sem2Rcredit");
var sem3Rcredit = document.querySelector("#sem3Rcredit");
var sem4Rcredit = document.querySelector("#sem4Rcredit");
var sem5Rcredit = document.querySelector("#sem5Rcredit");
var sem6Rcredit = document.querySelector("#sem6Rcredit");

// selecting each semesters EarnedCredit
var sem1Ecredit = document.querySelector("#sem1Ecredit");
var sem2Ecredit = document.querySelector("#sem2Ecredit");
var sem3Ecredit = document.querySelector("#sem3Ecredit");
var sem4Ecredit = document.querySelector("#sem4Ecredit");
var sem5Ecredit = document.querySelector("#sem5Ecredit");
var sem6Ecredit = document.querySelector("#sem6Ecredit");



// selecting area to display result
var result = document.querySelector("span");

//selecting each buttons
var cgpaButton = document.querySelector("#cgpaButton");
var resetButton = document.querySelector("#resetButton");
var showSemButton = document.querySelector("#showSem");

//hiding and showing labelsAndForms function

var allFormsArray = document.querySelectorAll(".labelsAndForms");
var imgIcon = document.querySelector("img");

function noHighlight(){
  imgIcon.classList.add("nofocus");
}

function Highlight(){
    imgIcon.classList.remove("nofocus");
}

function hideLabelsAndForms(){
      allFormsArray.forEach(function(element){
        element.style.display = "none";
      })
}
hideLabelsAndForms();

function showLabelsAndForms(){
    Highlight();
    hideLabelsAndForms();
    var currentSemInput = document.querySelector("#currentSemInput");
    for(var i=0; i<Number(currentSemInput.value);i++){
      allFormsArray[i].style.display = 'block';
    }
}
imgIcon.addEventListener("click", showLabelsAndForms)



// var sem = Number(currentSemInput.value);



// defining functions to CGPA calculation
function calculateCGPA(){
  result.textContent = ( Number(sem1sgpa.value)*Number(sem1Rcredit.value)
                        + Number(sem2sgpa.value)*Number(sem2Rcredit.value)
                        + Number(sem3sgpa.value)*Number(sem3Rcredit.value)
                        + Number(sem4sgpa.value)*Number(sem4Rcredit.value)
                        + Number(sem5sgpa.value)*Number(sem5Rcredit.value)
                        + Number(sem6sgpa.value)*Number(sem6Rcredit.value)
                        + Number(sem7sgpa.value)*Number(sem7Rcredit.value)
                        + Number(sem8sgpa.value)*Number(sem8Rcredit.value)
                      ) /
                        (
                          Number(sem1Ecredit.value)
                          +Number(sem2Ecredit.value)
                          +Number(sem3Ecredit.value)
                          +Number(sem4Ecredit.value)
                          +Number(sem5Ecredit.value)
                          +Number(sem6Ecredit.value)
                          +Number(sem7Ecredit.value)
                          +Number(sem8Ecredit.value)
                        );
}


//addng eventListener to each button and calling respective functions
cgpaButton.addEventListener("click", calculateCGPA);
// resetButton.addEventListener("click", resetCGPA);
