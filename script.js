console.log("Hello World!");

const diceButtons = document.querySelectorAll(".dice-container button");
const rollResult = document.querySelector("#roll-result");
const rollType = document.querySelector("#roll-type");

diceButtons.forEach(function(button){
    button.addEventListener("click", function() {
        const sides = Number(button.dataset.sides);
        const roll = Math.floor(Math.random() * sides) + 1;
        
        rollType.textContent = "D" + sides + "Roll";
        rollResult.textContent = roll;
    });
});