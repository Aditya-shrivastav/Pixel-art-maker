// Making a grid
function makeGrid() {
// Getting the input of the height and width given by the user.
const gridHeight = document.getElementById('inputHeight').value;
const gridWidth = document.getElementById('inputWidth').value;

const canvas = document.getElementById('pixelCanvas');
// Removing the existing table or canvas
while(canvas.firstChild){
    canvas.removeChild(canvas.firstChild);
}
//Creating the grid of given height and width
for(let i = 1 ; i <= gridHeight ; i++){
    let row = document.createElement('tr')
    canvas.appendChild(row)
    for(let j = 1 ; j <= gridWidth ; j++){
        let col = document.createElement('td')
        row.appendChild(col)
        // Setting the event listener for click to change the color of the box.
        col.addEventListener('click',function(event){
            const color = document.getElementById('colorPicker').value;
            this.style.backgroundColor = color;
        });
    }
}
}
//Getting the size of the grid
const size = document.getElementById('sizePicker');
// Calling the makeGrid() function to make the grid.
size.addEventListener('submit',function(event){
    event.preventDefault();
    makeGrid();
});