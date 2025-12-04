/* JavaScript functions to support Patrick Mooney's execution of the Odin
Project's 'Etch-a-Sketch' assignment in their Foundations course; 
see www.theodinproject.com/lessons/foundations-etch-a-sketch for more.
*/


function setupGrid(numCells = 16) {
    console.log(`Setting up a ${numCells} × ${numCells} grid ...`);
    const sketchpad = document.querySelector('#sketchpad');

    let rowNode = null;
    let cellNode = null;

    sketchpad.textContent = '';     // empty out existing child nodes

    for (let row = 0; row < numCells; row++) {
        rowNode = document.createElement('div');
        rowNode.classList.add('sketch-row');
        for (let column = 0; column < numCells; column ++) {
            console.log(`row ${row}, column ${column}`);
            cellNode = document.createElement('div');
            rowNode.appendChild(cellNode);
        }
        sketchpad.appendChild(rowNode);
    }
    console.log('  ... grid setup finished!');
}

function setButHandler(evt) {
    evt.preventDefault();
    console.log('Responding to "Set" click ...');

    const numCellsNode = document.querySelector('#num-cells');
    const numCellsStr = numCellsNode.value;
    const numCells = parseInt(numCellsStr, 10);

    if (isNaN(numCells)) {
        alert(`Cannot set size of grid: "${numCellsStr}" is not an interger!`);
    } else {
        setupGrid(numCells);
    }
    console.log("... done responding!");
}

function setup() {
    console.log('Setting up Etch-a-Sketch ...');
    setupGrid();

    console.log('Attaching handlers to buttons ...');
    const setBut = document.querySelector('#set-size');
    setBut.onclick = setButHandler;

    console.log('Setup complete!');
}

setup();
