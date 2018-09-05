const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log("Hour: " + hr + " Min: " + min + " Sec: " + sec);

let hrPosition = hr * 360 / 12 + min * 6 / 12;
let minPosition = min * 360 / 60 + sec * 6 / 60;
let secPosition = sec * 360 / 60;

function runTheClock() {
    hrPosition = hrPosition + (360 / 3600) / 12;
    minPosition = minPosition + (360 / 3600);
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);
