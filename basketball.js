// home scoreboard

let homeCount = 0; 
let homePts = document.getElementById("homepoints");
let worldRecord 
if ((homeCount.innerHTML < 102)) {

}

function homePointOne(){
    homeCount += 1;
    homePts.innerHTML = homeCount;
}

function homePointTwo() {
  homeCount += 2;
  homePts.innerHTML = homeCount;
}

function homePointThree() {
  homeCount += 3;
  homePts.innerHTML = homeCount;
}

// guest scoreboard

let guestCount = 0; 
let guestPts = document.getElementById("guestpoints");


function guestPointOne() {
  guestCount += 1;
  guestPts.innerHTML = guestCount;
}

function guestPointTwo() {
  guestCount += 2;
  guestPts.innerHTML = guestCount;
}

function guestPointThree() {
  guestCount += 3;
  guestPts.innerHTML = guestCount;
}

