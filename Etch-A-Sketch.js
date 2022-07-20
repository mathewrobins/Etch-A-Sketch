let rows =4;
let containerWidth = 400;
let pixelWidth = containerWidth/rows;
let temp;


// Find out how many squares to make and then make them
resolutionButton = document.querySelector("button");
resolutionButton.addEventListener("click", resolution);

function resolution (){
    inputRows = prompt("How many pixels in a row?", 16);
    if (inputRows>100) { inputRows=100} ;
    if (inputRows <1) { inputRows=1};
    removeOldPixels(rows);
    rows = inputRows;
    createPixels(rows);
}


// Create a container for the pixel divs
const container = document.querySelector('.container');
container.style.width = containerWidth + "px";
container.style.height = containerWidth + "px";


// Creates divs called pixel that will change color when a mouse is over them

function createPixels(rows){
    pixelWidth = containerWidth/rows;
    for (i=0; i<rows*rows; i++){
    
        temp = document.createElement('div');
        temp.className = 'pixel';
        temp.style.width = pixelWidth + "px";
        temp.style.height = pixelWidth + "px";
        temp.style.backgroundColor = "gray";
        temp.style.float = "left";
        temp.addEventListener("mouseover", changePixel);
        container.appendChild(temp);
    
    }
}


// Function to refresh pixel container by removing old divs
function removeOldPixels(rows){

    temp = document.querySelectorAll('div.pixel');
    for (i=0; i<rows*rows; i++){
        temp[i].remove();
    } 
}



// Function of how the pixel will change when a mouse is over it
function changePixel(evt) {
    evt.target.style.backgroundColor = 'white';
}

createPixels(rows);
