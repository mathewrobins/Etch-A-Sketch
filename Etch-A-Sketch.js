let rows =16;
let containerWidth = 400;
let pixelWidth = containerWidth/rows;
let temp;


// Create a container for the pixel divs
const container = document.querySelector('.container');
container.style.width = containerWidth + "px";
container.style.height = containerWidth + "px";


// Creates divs called pixel that will change color when a mouse is over them

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


// Function of how the pixel will change when a mouse is over it
function changePixel(evt) {
    evt.target.style.backgroundColor = 'white';
}



/* Notes for how to create and change a div element

let element = document.createElement('div');
element.textContent = "I am a new div";
element.style.backgroundColor = 'yellow';

*/