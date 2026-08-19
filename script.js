console.log("Hello World!");

const diceButtons = document.querySelectorAll(".dice-container button");
const rollResult = document.querySelector("#roll-result");
diceButtons.forEach(function(button){
    button.addEventListener("click", function() {
        const sides = button.dataset.sides;
        const roll = Math.floor(Math.random() * sides) + 1;
        
        rollResult.textContent = roll;
    });
});