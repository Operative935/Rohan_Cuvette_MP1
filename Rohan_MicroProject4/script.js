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

/*window.addEventListener("click", hideRules);*/


/* Scorecard */
var cscore = parseInt(localStorage.getItem('CScore')) || 0;
var yscore = parseInt(localStorage.getItem('YScore')) || 0;

function updateScore() {
        document.getElementById("CScore").textContent = cscore;
        document.getElementById("YScore").textContent = yscore;
}

updateScore();

function playGame(choice) {
    var options = ["rock", "paper", "scissors"];
    var computerChoice = options[Math.floor(Math.random() * options.length)];
    
    if (choice === computerChoice) {
        window.location.href = "page4.html";
    } else if ((choice === "rock" && computerChoice === "scissors") ||
        (choice === "scissors" && computerChoice === "paper") ||
        (choice === "paper" && computerChoice === "rock")) {
        window.location.href = "page2.html";
        yscore++;
    } else {
        window.location.href = "page3.html";
        cscore++;
    }
    updateScore();
    localStorage.setItem('YScore', yscore);
    localStorage.setItem('CScore', cscore);
}



