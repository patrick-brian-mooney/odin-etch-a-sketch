/* JavaScript functions to support Patrick Mooney's execution of the Odin
Project's 'Etch-a-Sketch' assignment in their Foundations course; 
see www.theodinproject.com/lessons/foundations-etch-a-sketch for more.
*/

const verbose = false;

function log(what) {
    if (verbose) {
        console.log(what);
    }
}

function enterHandler(evt) {
    log(evt);
    evt.srcElement.classList.add('sketched');
}

function leaveHandler(evt) {
    log(evt);
}

function setupGrid(numCells = 16) {
    log(`Setting up a ${numCells} × ${numCells} grid ...`);
    const sketchpad = document.querySelector('#sketchpad');

    let rowNode = null;
    let cellNode = null;

    sketchpad.textContent = '';     // empty out existing child nodes

    for (let row = 0; row < numCells; row++) {
        rowNode = document.createElement('div');
        rowNode.classList.add('sketch-row');
        for (let column = 0; column < numCells; column ++) {
            log(`row ${row}, column ${column}`);
            cellNode = document.createElement('div');
            cellNode.addEventListener('mouseenter', enterHandler);
            cellNode.addEventListener('mouseLeave', leaveHandler);
            rowNode.appendChild(cellNode);
        }
        sketchpad.appendChild(rowNode);
    }
    log('  ... grid setup finished!');
}

function setButHandler(evt) {
    evt.preventDefault();
    log('Responding to "Set" click ...');

    const numCellsNode = document.querySelector('#num-cells');
    const numCellsStr = numCellsNode.value;
    const numCells = parseInt(numCellsStr, 10);

    if (isNaN(numCells)) {
        alert(`Cannot set size of grid: "${numCellsStr}" is not an interger!`);
        return;
    }

    if ((numCells < 2) || (numCells > 100)) {
        alert('Number of cells must be between 2 and 100!');
        return;
    }
    
    setupGrid(numCells);
    
    log("... done responding!");
}

function enterKeyHandler (event) {
    log(`enterKeyHandler called! Event is ${event}`);
    if (event.keyCode === 13) {
        document.querySelector("#set-size").click();
    }
};

function setup() {
    log('Setting up Etch-a-Sketch ...');
    setupGrid();

    log('Attaching handlers ...');
    document.querySelector('#set-size').onclick = setButHandler;
    document.querySelector('#num-cells').onkeydown = enterKeyHandler;

    log('Setup complete!');
}

setup();
