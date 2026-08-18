
// ==========================================
// HER NAME
// ==========================================

const herName = "Nusrat";

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
// CONTINUE BUTTON
// ==========================================

continueBtn.addEventListener("click", function () {

    introScreen.classList.add("hidden");

    questionScreen.classList.remove("hidden");

});


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

        foodButtons.forEach(function (btn) {

            btn.classList.remove("selected");

        });


        button.classList.add("selected");


        selectedFood =
            button.dataset.food;

    });

});

// ==========================================
// CONFIRM DATE
// ==========================================

confirmBtn.addEventListener("click", function () {

    if (!dateInput.value) {

        plannerMessage.textContent =
            "📅 Please choose a date first.";

        return;
    }


    if (!selectedFood) {

        plannerMessage.textContent =
            "🍕 Please choose something delicious.";

        return;
    }


    const note =
        document
            .getElementById("noteInput")
            .value
            .trim();


    console.log("Date:", dateInput.value);

    console.log("Food:", selectedFood);

    console.log("Note:", note);


    alert(
        "Perfect! ❤️\n\n" +
        "Date: " + dateInput.value +
        "\nFood: " + selectedFood
    );

});