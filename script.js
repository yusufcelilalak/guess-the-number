"use-script";

let range = Number(document.querySelector("#range").textContent);
let secretNumber = Math.trunc(Math.random() * range + 1);
let score = range;
let highscore = 0;

const howToBtn = document.querySelector(".how-to-btn");
const howTo = document.querySelector(".how-to");
const overlay = document.querySelector(".overlay");
const closeHowToBtn = document.querySelector(".close-how-to");

const openHowTo = function() {
    howTo.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeHowTo = function() {
    howTo.classList.add("hidden");
    overlay.classList.add("hidden");
};

howToBtn.addEventListener("click", openHowTo);
closeHowToBtn.addEventListener("click", closeHowTo);
overlay.addEventListener("click", closeHowTo);

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        if (!overlay.classList.contains("hidden")) {
            closeHowTo();
        }
    }

    if (e.key === "Enter") {
        if (
            Number(document.querySelector("#guess").value) != "" &&
            overlay.classList.contains("hidden")
        ) {
            checkingGuess();
        }
    }
});

// decrease range updates the range and score of game
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
        document.querySelector(".play-game-container").style.background =
            "#f7a0aee8";
        document.querySelector("#range").textContent = range;
        document.querySelector(".predict-info").textContent =
            "💭 Start guessing...";
        document.querySelector("#result-number").textContent = "?";
        document.querySelector("#guess").value = null;
        secretNumber = Math.trunc(Math.random() * range + 1);
        score = range;
        document.querySelector("#score").textContent = score;
    });

// increase range updates the range and score of game
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
        document.querySelector(".play-game-container").style.background =
            "#f7a0aee8";
        document.querySelector("#range").textContent = range;
        document.querySelector(".predict-info").textContent =
            "💭 Start guessing...";
        document.querySelector("#result-number").textContent = "?";
        document.querySelector("#guess").value = null;
        secretNumber = Math.trunc(Math.random() * range + 1);
        score = range;
        document.querySelector("#score").textContent = score;
    });

// guess button functions

const checkingGuess = function() {
    let prediction = Number(document.querySelector("#guess").value);
    range = Number(document.querySelector("#range").textContent);

    // when the game finishes
    if (
        Number(document.querySelector("#result-number").textContent) != secretNumber
    ) {
        // when player loses
        if (score <= 1 && prediction != secretNumber) {
            score = 0;
            document.querySelector(".play-game-container").style.background =
                "#eb5b73e8";
            document.querySelector(".predict-info").textContent = "❌ You lose!!!";
        } // when there is no prediction
        else if (!prediction) {
            document.querySelector(".predict-info").textContent = "⛔ No number!!!";
            score--;
        } // when the prediction is not equal to the number
        else if (prediction != secretNumber) {
            document.querySelector(".predict-info").textContent =
                prediction > secretNumber ? "📈 Too high!!!" : "📉 Too low!!!";
            score--;
        } // when player predicts the correct number
        else {
            document.querySelector(".predict-info").textContent =
                "🎆 Correct number!!!";

            document.querySelector(".play-game-container").style.background =
                "#68bd4ffb";

            // when the current score is higher than highscore, assign it as highscore
            if (score > highscore) {
                highscore = score;
                document.querySelector("#high-score").textContent = highscore;
            }

            document.querySelector("#result-number").textContent = secretNumber;
        }

        document.querySelector("#score").textContent = score;
    }
};

document.querySelector(".guess-btn").addEventListener("click", checkingGuess);

// when the player click again button, it resets all the game
document.querySelector(".again-btn").addEventListener("click", function() {
    score = range;
    document.querySelector(".play-game-container").style.background = "#f7a0aee8";
    document.querySelector("#score").textContent = score;
    document.querySelector("#guess").value = null;
    document.querySelector(".predict-info").textContent = "💭 Start guessing...";
    document.querySelector("#result-number").textContent = "?";
    secretNumber = Math.trunc(Math.random() * range + 1);
});