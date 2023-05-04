"use strict"
const dateHere = document.getElementById("dateHere");
const dateLabel = document.getElementById("dateLabel");
const dateOutput = document.getElementById("dateOutput");
const convertBtn = document.getElementById("convertBtn");

window.onload.onload = init;

function init() {
    convertBtn.onclick = onconvertBtnClicked;
}
function convertBtnClicked(){
    console.log('clicked');
}