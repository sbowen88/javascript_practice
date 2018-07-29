
var shapes = new Array();
var currentShape;
var height = 15;
var width = 10;
var state = 1;      // 1 running - 0 paused - 2 game over
var colors = ['black', 'orange', 'red', 'blue'];
var move = 0;
var occupiedblocks = new Array();
var direction = "";
var points = 0;


var board = document.getElementsByClassName('tetris-board')[0];
board.innerHTML = '';
var counter = 0;
for (var y = 0; y < height; y++) {
    var row = document.createElement('div');
    row.className = 'row';
    row.dataset.row = y;

    for (var x = 0; x < width; x++) {
        var block = document.createElement('div');
        block.className = 'block';
        block.dataset.x = x;
        block.dataset.y = y;
        block.dataset.index = counter;
        block.dataset.state = 0;
        block.innerHTML = "0 : " + counter;
        row.appendChild(block);
        counter++;
    }

    board.appendChild(row);
}
