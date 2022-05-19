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
});

//calculate

function cal1(){
    if(mtrxnums1.value == ""){alert("Please fill the input.")}
    else{
        result.style.display = "block"
        result.innerText = "Det = " + mtrxnums1.value;
    };
};

function cal2(){

};

function cal3(){

};

cal.addEventListener("click", function(){ 
    if(check[0].checked){cal1()};
    if(check[1].checked){cal2()};
    if(check[2].checked){cal3()};
});

