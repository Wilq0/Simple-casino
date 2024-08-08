let currentValues = [];
let possibleValues = [1,2,3,4,5,6,7,8,9,0, "Apple", "King", "Grimace"];
let rollResult = document.getElementById("rollResult");
let winText = document.getElementById("winText");
let button1 = document.getElementById("button1");
let isWin = false;

winText.style.display = "none";
function roll() {
    if (isWin == false) {
        if (currentValues == []) {
            for (let i = 3; i > 0; i--) {
                currentValues.push(possibleValues[Math.floor(Math.random()*possibleValues.length)]);
            }
            rollResult.innerText = `${currentValues[0]}-${currentValues[1]}-${currentValues[2]}`;
            if (`${currentValues[0]}${currentValues[1]}${currentValues[2]}` == "777") {
                alertWin();
            }
        } else if (currentValues != []) {
            currentValues = [];
            winText.innerText = "";
            rollResult.innerText = "- -";
            for (let i = 3; i > 0; i--) {
                currentValues.push(possibleValues[Math.floor(Math.random()*possibleValues.length)]);
            }
            rollResult.innerText = `${currentValues[0]}-${currentValues[1]}-${currentValues[2]}`;
            if (`${currentValues[0]}${currentValues[1]}${currentValues[2]}` == "777") {
                alertWin()
            }
        }
    } else {

    }
}

function alertWin() {
    winText.style.display = "block";
    winText.innerText = "You have won! You win 1 million dollars (not really)!";
    isWin = true;
}