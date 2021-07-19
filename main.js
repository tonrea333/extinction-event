


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



const featureOl = document.querySelector("#myOl");

featureOl.addEventListener("click", onClick);

function onClick(event){
   event.target.style.textDecoration = "line-through"
}

const featuretwoOl = document.querySelector("#myUl");
console.log(featuretwoOl)
featuretwoOl.addEventListener("click", onClick2);

function onClick2(e){
    e.target.style.transition  = "all 2s";
    console.log()
}