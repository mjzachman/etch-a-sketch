const container = document.querySelector('#grid');

let gridDim = 16;

function createGrid(dimension) {

    let cellDim = (100/dimension).toString();
    
    for(let i = 0; i < (dimension ** 2); i++){
        let cell = document.createElement('div');
        cell.setAttribute('class','cell');
        cell.setAttribute('style','flex-basis: ' + cellDim + "%");
        grid.appendChild(cell);
    }
    return;
}

function addCellEvents(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        });
    });
    return;
}

function addButtonEvents(){
    const buttons = document.querySelector('#grid-size');
    buttons.addEventListener('click', () => {
       gridDim = prompt("What grim dimension would you like?", "enter a number");
       deleteGrid();
       createGrid(gridDim);
     })
    return;
}
    
createGrid(gridDim);
addCellEvents();
addButtonEvents();