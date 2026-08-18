// ==========================================
// HER NAME
// ==========================================

const herName = "CUTIE";

document.getElementById("girlName").textContent =
    herName;


// ==========================================
// GET ELEMENTS
// ==========================================

const continueBtn =
    document.getElementById("continueBtn");

const introScreen =
    document.getElementById("introScreen");

const questionScreen =
    document.getElementById("questionScreen");

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const message =
    document.getElementById("message");


// ==========================================
// PLANNER SCREEN
// ==========================================

const plannerScreen =
    document.getElementById("plannerScreen");

const confirmBtn =
    document.getElementById("confirmBtn");

const plannerMessage =
    document.getElementById("plannerMessage");

const dateInput =
    document.getElementById("dateInput");


// ==========================================
// FINAL SCREEN ELEMENTS
// ==========================================

const successScreen =
    document.getElementById("successScreen");

const finalDate =
    document.getElementById("finalDate");

const finalFood =
    document.getElementById("finalFood");

const finalNote =
    document.getElementById("finalNote");

const finalNoteContainer =
    document.getElementById("finalNoteContainer");


// ==========================================
// CONTINUE BUTTON
// ==========================================

continueBtn.addEventListener("click", function () {

    introScreen.classList.add("hidden");

    questionScreen.classList.remove("hidden");

});


// ==========================================
// YES BUTTON
// ==========================================

yesBtn.addEventListener("click", function () {

    questionScreen.classList.add("hidden");

    plannerScreen.classList.remove("hidden");

});


// ==========================================
// NO BUTTON
// ==========================================

let noAttempts = 0;


const messages = [

    "Are you sure? 👀",

    "Think again... 😭",

    "The button is trying to escape 😂",

    "You really want to say NO? 🥺",

    "Maybe give YES a chance? ❤️"

];


noBtn.addEventListener("click", function () {

    noAttempts++;


    // --------------------------------------
    // Show message
    // --------------------------------------

    const currentMessage =
        messages[
            Math.min(
                noAttempts - 1,
                messages.length - 1
            )
        ];


    message.textContent =
        currentMessage;


    message.classList.add("show");


    // --------------------------------------
    // Calculate random position
    // --------------------------------------

    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    const maxX =
        window.innerWidth -
        buttonWidth -
        20;

    const maxY =
        window.innerHeight -
        buttonHeight -
        20;


    const randomX =
        Math.max(
            10,
            Math.random() * maxX
        );


    const randomY =
        Math.max(
            10,
            Math.random() * maxY
        );


    // --------------------------------------
    // Move NO button
    // --------------------------------------

    noBtn.style.position = "fixed";

    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";

});


// ==========================================
// DATE
// ==========================================

const today =
    new Date()
        .toISOString()
        .split("T")[0];

dateInput.min = today;


// ==========================================
// FOOD SELECTION
// ==========================================

const foodButtons =
    document.querySelectorAll(".food-btn");

let selectedFood = "";


foodButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove previous selection

        foodButtons.forEach(function (btn) {

            btn.classList.remove("selected");

        });


        // Select clicked food

        button.classList.add("selected");


        selectedFood =
            button.dataset.food;

    });

});


// ==========================================
// CONFIRM DATE
// ==========================================

confirmBtn.addEventListener("click", function () {

    // --------------------------------------
    // Check date
    // --------------------------------------

    if (!dateInput.value) {

        plannerMessage.textContent =
            "📅 Please choose a date first.";

        return;
    }


    // --------------------------------------
    // Check food
    // --------------------------------------

    if (!selectedFood) {

        plannerMessage.textContent =
            "🍕 Please choose something delicious.";

        return;
    }


    // --------------------------------------
    // Get note
    // --------------------------------------

    const note =
        document
            .getElementById("noteInput")
            .value
            .trim();


    // --------------------------------------
    // Format date
    // --------------------------------------

    const dateObject =
        new Date(
            dateInput.value + "T00:00:00"
        );


    const formattedDate =
        dateObject.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );


    // --------------------------------------
    // Show date
    // --------------------------------------

    finalDate.textContent =
        formattedDate;


    // --------------------------------------
    // Show food
    // --------------------------------------

    finalFood.textContent =
        selectedFood;


    // --------------------------------------
    // Show note
    // --------------------------------------

    if (note) {

        finalNote.textContent =
            note;

        finalNoteContainer.style.display =
            "block";

    } else {

        finalNoteContainer.style.display =
            "none";

    }


    // --------------------------------------
    // Change screen
    // --------------------------------------

    plannerScreen.classList.add(
        "hidden"
    );


    successScreen.classList.remove(
        "hidden"
    );


    // --------------------------------------
    // Celebration
    // --------------------------------------

    createHearts();

});


// ==========================================
// FLOATING HEARTS
// ==========================================

function createHearts() {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💓"
    ];


    for (let i = 0; i < 35; i++) {

        setTimeout(function () {

            const heart =
                document.createElement("div");


            heart.classList.add(
                "floating-heart"
            );


            heart.textContent =
                hearts[
                    Math.floor(
                        Math.random() *
                        hearts.length
                    )
                ];


            heart.style.left =
                Math.random() * 100 + "vw";


            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";


            heart.style.animationDuration =
                (3 + Math.random() * 4) + "s";


            document.body.appendChild(
                heart
            );


            setTimeout(function () {

                heart.remove();

            }, 7000);

        }, i * 150);

    }

}