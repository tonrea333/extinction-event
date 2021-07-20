


//const featureOl = document.querySelector("#b");
//const featureOl = document.querySelector("#c");
//const featureOl = document.querySelector("#d");
//const featureOl = document.querySelector("#e");
//const featureOl = document.querySelector("#f");
//const featureOl = document.querySelector("#g");
//const featureOl = document.querySelector("#a");
//const featureOl = document.querySelector("#a");
//const featureOl = document.querySelector("#a");
//const featureOl = document.querySelector("#a");
//const featureOl = document.querySelector("#a");
//const featureOl = document.querySelector("#a");
//const featureOl = document.querySelector("#a");


//const for orderlist
const featureOl = document.querySelector("#myOl");
//orderlist onclick event listener
featureOl.addEventListener("click", onClick);
//function to line through selected text
function onClick(event){
   event.target.style.textDecoration = "line-through"
}
//const for unordered list
const featuretwoOl = document.querySelector("#myUl");
console.log(featuretwoOl)
//unordered list receives eventlistner for click
featuretwoOl.addEventListener("click", onClick2);
//function to change opacity of clicked name
function onClick2(e){
    e.target.style.opacity = ".1";
    console.log()
}

//const for images on document
const featureImg = document.querySelector("#row");
//add event listener for click image
featureImg.addEventListener("click", onClick3);
//function to change width of image when clicked
function onClick3(e){
    e.target.style.width = "1px";
}
const button = document.querySelector("#destroy-all");
button.addEventListener("click", onClick4);

function onClick4(){
featureOl.style.textDecoration = "line-through";
featuretwoOl.style.opacity = ".1";
featureImg.style.width = "0px";


}
