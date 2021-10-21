
// Use the value from the slider to set the number of rows and colunms
// Create the divs within the etch-a-sketch
const etchContainer = document.getElementById("etch-a-sketch-container");
const divEtch = document.createElement("div");
const divEtchRowContainer = document.createElement("div");

// Add atributes to each div
divEtch.classList.add("etch-div");
divEtchRowContainer.classList.add("etch-row-wrapper");
etchContainer.appendChild(divEtchRowContainer) 

function resizeGrid() {
    for(let i=0; i<dimensions; i++){
        let tempWrapper = divEtchRowContainer.cloneNode(true)

        for(let i=0; i<dimensions; i++){
            let tempClone = divEtch.cloneNode(true);
            tempClone.addEventListener("mouseover", function(e) {
                if(colorMode == 'black'){
                    e.target.style.background = 'black';
                } else if(colorMode == 'rgb'){
                    e.target.style.background = '#' + randColor();
                }
                
            });
            tempWrapper.appendChild(tempClone);
        }
    
        etchContainer.appendChild(tempWrapper);
    }

}

function deleteGrid() {
    while(etchContainer.lastChild) {
        etchContainer.removeChild(etchContainer.lastChild)
    }
    while(divEtchRowContainer.lastChild) {
        divEtchRowContainer.removeChild(divEtchRowContainer.lastChild)
    }
}

/*-------- Option Controls --------*/

// Set the Color Mode to RGB or Black
let colorMode = 'black'
function setColorBlack() {
    colorMode = 'black';
}
function setColorRGB() {
    colorMode = 'rgb';
}

// Generate a Random Color
function randColor() {
    temp = Math.floor(Math.random()* 16777215).toString(16);
    return temp;
}

// Add listeners to the black and rgb buttons
const blackBtn = document.getElementById("black-btn");
const rgbBtn = document.getElementById("rgb-btn");

blackBtn.addEventListener('click', setColorBlack);
rgbBtn.addEventListener('click', setColorRGB);

// Clear The Grid Function
function clearGrid() {
    deleteGrid();
    resizeGrid();
}
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener('click', clearGrid);

// Get and Display the function value
let slider = document.getElementById("options-slider");
let output = document.getElementById("grid-size");
let dimensions = 16;
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    dimensions = this.value;
    deleteGrid();
    resizeGrid();
}

// To Run on Startup
clearGrid();