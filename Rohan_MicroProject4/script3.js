var a = document.getElementById("Rules");
var show = document.getElementById("PopOver");
var closedown = document.getElementById("Close");

function showRules() {
    show.style.display = "block";
}

function hideRules() {
    show.style.display = "none";
}

a.addEventListener("click", showRules);

closedown.addEventListener("click", hideRules);

var cscore = parseInt(localStorage.getItem('CScore')) || 0;
var yscore = parseInt(localStorage.getItem('YScore')) || 0;

function updateScore() {
    document.getElementById("CScore").textContent = cscore;
    document.getElementById("YScore").textContent = yscore;
}

updateScore();
