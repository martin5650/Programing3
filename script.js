


var matrix = [];

var grassArr = [];
var grassEaterArr = [];
var AnimalEaterArr=[];



var side = 15;


function setup() {
    matrix = generateMatrix(30);
    createObjects();
    frameRate(6);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            } else if (matrix[y][x] == 2) {
                fill("yellow");

            } else if (matrix[y][x] == 3) {
                fill("red");
            } else {
                fill("grey");
            }


            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in AnimalEaterArr) {
        AnimalEaterArr[i].eat();
    }
}

function createObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var newGrass = new Grass(x, y, 1);
                grassArr.push(newGrass);
            } else if (matrix[y][x] == 2) {
                var newGrassEater = new GrassEater(x, y, 2);
                grassEaterArr.push(newGrassEater);
            }  else if (matrix[y][x] == 3) {
                var newGrassEater = new Animal(x, y, 3);
                AnimalEaterArr.push(newGrassEater);
            }

        }
    }
}


function generateMatrix(size) {
    var newMatrix = [];;
    for (var y = 0; y < size; y++) {
        newMatrix[y] = [];
        for (var x = 0; x < size; x++) {
            var randomId = random(100);
            if (randomId < 30) {
                newMatrix[y][x] = 1;
            } else if (randomId < 50) {
                newMatrix[y][x] = 2;
            } else if (randomId < 70) {
                newMatrix[y][x] = 3;
            } else if (randomId < 80) {
                newMatrix[y][x] = 4;
            } else if (randomId < 90) {
                newMatrix[y][x] = 5;
            } else {
                newMatrix[y][x] = 0;
            }
        }
    }
    return newMatrix;
}

