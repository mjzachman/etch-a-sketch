const grid = document.querySelector('#grid');

let gridDim = 16;
let mouseColor = "black";
let penStatus = "black";

function createGrid(dimension) {
    let cellDim = (100/dimension).toString();
    
    for(let i = 0; i < (dimension ** 2); i++){
        let cell = document.createElement('div');
        cell.setAttribute('class','cell');
        cell.setAttribute('style','flex-basis: ' + cellDim + "%");
        grid.appendChild(cell);
    }

    if (penStatus === "rainbow"){ addRainbow();}
    else {addHover(mouseColor);}
    
    return;
}

function refreshGrid(){
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(gridDim);
    return;
}

function addHover(color){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = color;
        });
    });
    return;
}


function addRainbow(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((div) => {
        div.addEventListener('mouseover', () => {
            addHover(getRandomRgb());
        });
    });
    penStatus = "rainbow";
}



function changeGridDim(){
    gridDim = prompt("What grid dimension would you like?", "enter a number");
    if (gridDim > 100 || gridDim <= 0 || gridDim % 1 != 0){ changeGridDim();}
    refreshGrid();
    addHover(mouseColor);
    return;
}

function addButtonEvents(){
    const sizeButton = document.querySelector('#grid-size');
    sizeButton.addEventListener('click', () => {
       changeGridDim();
     })

    const refresh = document.querySelector('#refresh');
    refresh.addEventListener('click', () => {
       refreshGrid();
     })

     const black = document.querySelector('#black');
     black.addEventListener('click', () => {
        penStatus = "black"; 
        refreshGrid();
        addHover("black");
      })

    const rainbow = document.querySelector('#rainbow');
    rainbow.addEventListener('click', () => {
        refreshGrid();
        addRainbow();
     })
    return;
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

function main(){
    createGrid(gridDim);
    addButtonEvents();
    return;
}

main();
