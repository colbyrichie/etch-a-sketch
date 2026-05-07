const container = document.querySelector(".container");

function createSquareDivs() {

    for (let i = 0; i !== (16 * 16); i++) {

        const squareDiv = document.createElement("div");
        squareDiv.setAttribute("style", "width: 31.25px; height: 31.25px; border: 1px solid red; box-sizing: border-box;");

        container.appendChild(squareDiv);

        squareDiv.addEventListener("mouseenter", () => {
            squareDiv.style.backgroundColor = "red";
        });

    }

}

createSquareDivs();

