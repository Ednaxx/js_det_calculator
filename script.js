var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var mtrx1 = document.getElementsByClassName("onex");
var mtrx2 = document.getElementsByClassName("twox");
var mtrx3 = document.getElementsByClassName("threex");

var mtrxnums1 = document.getElementsByClassName("mtrxnum1");
var mtrxnums2 = document.getElementsByClassName("mtrxnum2");
var mtrxnums3 = document.getElementsByClassName("mtrxnum3");

var cal = document.getElementById("calculate");
var clear = document.getElementById("clear");

var check = document.getElementsByName("order");

var result = document.getElementById("result");


//event listeners

btn1.addEventListener("click", function check1(){
    if(check[0].checked){
        mtrx1[0].style.display = "block";
        mtrx2[0].style.display = "none";
        mtrx3[0].style.display = "none";
        cal.style.display = "inline";
        clear.style.display = "inline";
    }
});
btn2.addEventListener("click", function check2(){
    if(check[1].checked){
        mtrx1[0].style.display = "none";
        mtrx2[0].style.display = "block";
        mtrx3[0].style.display = "none";
        cal.style.display = "inline";
        clear.style.display = "inline";
    }
});
btn3.addEventListener("click", function check3(){
    if(check[2].checked){
        mtrx1[0].style.display = "none";
        mtrx2[0].style.display = "none";
        mtrx3[0].style.display = "block";
        cal.style.display = "inline";
        clear.style.display = "inline";
    }
});


//input only numbers and "."


function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46)
	return false;

	return true;
}

//clear button

clear.addEventListener("click", function(){
    for(var i = 0; i < mtrxnums1.length; i++){
        mtrxnums1[i].value = ""
    };
    for(i = 0; i < mtrxnums2.length; i++){
        mtrxnums2[i].value = ""
    };
    for(i = 0; i < mtrxnums3.length; i++){
        mtrxnums3[i].value = ""
    };
    result.style.display = "none"
});

//calculate vars

var oneone2x2 = document.getElementById("211").value;
var onetwo2x2 = document.getElementById("212").value;

var twoone2x2 = document.getElementById("221").value;
var twotwo2x2 = document.getElementById("222").value;


var oneone3x3 = document.getElementById("311").value;
var onetwo3x3 = document.getElementById("312").value;
var onethree3x3 = document.getElementById("313").value;

var twoone3x3 = document.getElementById("321").value;
var twotwo3x3 = document.getElementById("322").value;
var twothree3x3 = document.getElementById("323").value;

var threeone3x3 = document.getElementById("331").value;
var threetwo3x3 = document.getElementById("332").value;
var threethree3x3 = document.getElementById("333").value;

var diagonals = {
    "dia1": (oneone3x3 *  twotwo3x3 * threethree3x3),
    "dia2": (onetwo3x3 * twothree3x3 * threeone3x3),
    "dia3": (onethree3x3 * twoone3x3 * threetwo3x3),
    "diaMinus1": (onethree3x3 * twotwo3x3 * threeone3x3),
    "diaMinus2": (oneone3x3 * twothree3x3 * threetwo3x3),
    "diaMinus3": (onetwo3x3 * twoone3x3 * threethree3x3)
}


//calculate functions


function cal1(){
    if(mtrxnums1.value == ""){alert("Please fill the input.")}
    else{
        result.style.display = "block"
        result.innerText = "Det = " + mtrxnums1[0].value;
    };
};

function cal2(){
    for(var j = 0; j < mtrxnums2.length; j++){
        if(mtrxnums2[j].value == ""){
            alert("Please fill the blank inputs.");
            break;
        }};
    var det = (oneone2x2 * twotwo2x2) - (onetwo2x2 * twoone2x2);
    result.style.display = "block";
    result.innerText = "Det = " + det;
        };

function cal3(){
    for(var j = 0; j < mtrxnums3.length; j++){
        if(mtrxnums3[j].value == ""){
            alert("Please fill the blank inputs.");
            break;
        }};
        var det = (diagonals.dia1 + diagonals.dia2 + diagonals.dia3) - (diagonals.diaMinus1 + diagonals.diaMinus2 + diagonals.diaMinus3)
        result.style.display = "block";
        result.innerText = "Det = " + det;
};

cal.addEventListener("click", function(){ 
    if(check[0].checked){cal1()};
    if(check[1].checked){cal2()};
    if(check[2].checked){cal3()};
});

