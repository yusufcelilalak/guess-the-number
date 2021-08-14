"use-script";

let range = Number(document.querySelector("#range").textContent);
let secretNumber = Math.trunc(Math.random() * range + 1);
let score = range;
let highscore = 0;

document
    .querySelector(".decrease-range")
    .addEventListener("click", function() {
        range = Number(document.querySelector("#range").textContent);
        switch (range) {
            case 30:
                range = 20;
                break;
            case 50:
                range = 30;
                break;
            case 75:
                range = 50;
                break;
            case 99:
                range = 75;
                break;
            default:
                break;
        }
        document.querySelector("#range").textContent = range;
        document.querySelector(".predict-info").textContent =
            "💭 Start guessing...";
        document.querySelector("#result-number").textContent = "?";
        document.querySelector("#guess").value = null;
        secretNumber = Math.trunc(Math.random() * range + 1);
        score = range;
        document.querySelector("#score").textContent = score;
    });

document
    .querySelector(".increase-range")
    .addEventListener("click", function() {
        range = Number(document.querySelector("#range").textContent);
        switch (range) {
            case 20:
                range = 30;
                break;
            case 30:
                range = 50;
                break;
            case 50:
                range = 75;
                break;
            case 75:
                range = 99;
                break;
            default:
                break;
        }
        document.querySelector("#range").textContent = range;
        document.querySelector(".predict-info").textContent =
            "💭 Start guessing...";
        document.querySelector("#result-number").textContent = "?";
        document.querySelector("#guess").value = null;
        secretNumber = Math.trunc(Math.random() * range + 1);
        score = range;
        document.querySelector("#score").textContent = score;
    });

document.querySelector(".guess-btn").addEventListener("click", function() {
    let prediction = Number(document.querySelector("#guess").value);
    range = Number(document.querySelector("#range").textContent);

    if (
        Number(document.querySelector("#result-number").textContent) != secretNumber
    ) {
        if (score === 0) {
            document.querySelector(".predict-info").textContent = "❌ You lose!!!";
        } else if (!prediction) {
            document.querySelector(".predict-info").textContent = "⛔ No number!!!";
            score--;
            document.querySelector("#score").textContent = score;
        } else if (prediction > secretNumber) {
            document.querySelector(".predict-info").textContent = "📈 Too high!!!";
            score--;
            document.querySelector("#score").textContent = score;
        } else if (prediction < secretNumber) {
            document.querySelector(".predict-info").textContent = "📉 Too low!!!";
            score--;
            document.querySelector("#score").textContent = score;
        } else {
            document.querySelector(".predict-info").textContent =
                "🎆 Correct number!!!";

            if (score > highscore) {
                highscore = score;
                document.querySelector("#high-score").textContent = highscore;
            }

            document.querySelector("#result-number").textContent = secretNumber;
            document.querySelector("#guess").value = null;
        }
    }
});

document.querySelector(".again-btn").addEventListener("click", function() {
    score = range;
    document.querySelector("#score").textContent = score;
    document.querySelector("#guess").value = null;
    document.querySelector(".predict-info").textContent = "💭 Start guessing...";
    document.querySelector("#result-number").textContent = "?";
    secretNumber = Math.trunc(Math.random() * range + 1);
});