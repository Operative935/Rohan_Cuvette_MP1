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