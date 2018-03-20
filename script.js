const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//these variables will set the degree to which we want our arms to be
let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

//to show the correct time we need to get the time
var date = new Date();
console.log(date);


//we are adding transform css property to each of our hands of the clock
//from javaScript file
HOURHAND.style.transform = "rotate("+hrPosition+"deg)";
MINUTEHAND.style.transform = "rotate("+minPosition+"deg)";
SECONDHAND.style.transform = "rotate("+secPosition+"deg)";
