const container = document.querySelector(".container");
const button = document.querySelector("button");

function createGrid(gridSize) {

    const totalGridSize = gridSize * gridSize;

    const squareSize = 500 / gridSize;

    for (let i = 0; i !== totalGridSize; i++) {

        const squareDiv = document.createElement("div");
        squareDiv.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px; border: 1px solid black; box-sizing: border-box;`);
        squareDiv.classList.add("square");

        container.appendChild(squareDiv);

        squareDiv.addEventListener("mouseenter", () => {
            squareDiv.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
        });
    }
}

function removeGrid() {

    const existingSquareDivs = document.querySelectorAll(".square");
    existingSquareDivs.forEach((squareDiv) => {
        squareDiv.remove()
    });

}

button.addEventListener("click", () => {
    let userInput = prompt('Please enter a number to change the size of the grid:\nex. "50" for a 50x50 grid.');

    if (userInput == "" || userInput == null) {
        userInput = 16;
    }

    for (let i = userInput; userInput > 100;) {
        userInput = prompt("I'm sorry the maximum grid size is 100x100.\nPlease enter a number less than 100:")
    }

    removeGrid();
    createGrid(userInput);
})

function generateRandomNumber() {
    return Math.floor(Math.random() * 255);
}

createGrid(16);