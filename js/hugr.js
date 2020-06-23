function startPage() {
// Start
'use strict';

window.main = document.querySelector('body');
window.fixed = "p_fixed";
window.arr = main.className.split(" ");

let coverActive = "coverActive";
let aboutActive = "aboutActive";
let portfolioActive = "portfolioActive";

if (arr.indexOf(fixed) == -1) {
main.className += " " + fixed;
}
if (arr.indexOf(coverActive) == -1) {
main.className += " " + coverActive;
}

}

// Navigation
function coverActive() {

let coverActive = "coverActive";
let aboutActive = "aboutActive";
let portfolioActive = "portfolioActive";

if (main.className.split(" ").indexOf(aboutActive) !=1) {
main.classList.remove("aboutActive");
}
if (main.className.split(" ").indexOf(portfolioActive) !=1) {
main.classList.remove("portfolioActive");
}
if (arr.indexOf(coverActive) == -1) {
main.className += " " + coverActive;
}

}

function aboutActive() {

let coverActive = "coverActive";
let aboutActive = "aboutActive";
let portfolioActive = "portfolioActive";

if (main.className.split(" ").indexOf(coverActive) !=1) {
main.classList.remove("coverActive");
}
if (main.className.split(" ").indexOf(portfolioActive) !=1) {
main.classList.remove("portfolioActive");
}
if (arr.indexOf(aboutActive) == -1) {
main.className += " " + aboutActive;
}

}

function portfolioActive() {

let coverActive = "coverActive";
let aboutActive = "aboutActive";
let portfolioActive = "portfolioActive";

if (main.className.split(" ").indexOf(coverActive) !=1) {
main.classList.remove("coverActive");
}
if (main.className.split(" ").indexOf(aboutActive) !=1) {
main.classList.remove("aboutActive");
}
if (arr.indexOf(portfolioActive) == -1) {
main.className += " " + portfolioActive;
}

}

// Go!
document.addEventListener("DOMContentLoaded", startPage);
