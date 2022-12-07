const container = document.querySelector('#grid');

let gridDim = 16;

function createGrid(dimension) {

    let cellDim = (100/dimension).toString();
    
    for(let i = 0; i < (dimension ** 2); i++){
        var cell = document.createElement('div');
        cell.setAttribute('class','cell');
        cell.setAttribute('style','flex-basis: ' + cellDim + "%");
        grid.appendChild(cell);
    }
    return;
}



createGrid(gridDim);