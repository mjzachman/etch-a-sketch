const grid = document.querySelector('#grid');

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

function eraseGrid(){
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    return;
}

function addHover(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        });
    });
    return;
}

function changeGridDim(){
    gridDim = prompt("What grid dimension would you like?", "enter a number");
    if (gridDim > 100 || gridDim <= 0 || gridDim % 1 != 0){ changeGridDim();}
    eraseGrid();
    createGrid(gridDim);
    addHover();
    return;
}

function addButtonEvents(){
    const buttons = document.querySelector('#grid-size');
    buttons.addEventListener('click', () => {
       changeGridDim();
     })
    return;
}
    
createGrid(gridDim);
addHover();
addButtonEvents();