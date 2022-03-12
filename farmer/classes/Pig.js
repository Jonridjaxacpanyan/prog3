class Pig {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.energy = 4;
        this.getNewCoordinates();
    }

    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1]
        ];
    }

    chooseCell(character, character2, character3) {
        this.getNewCoordinates();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == character2 || matrix[y][x] == character3) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
        var emptyCells = this.chooseCell(0, 5, 1);
        var newCell = random(emptyCells);

        if (this.energy <= 8 && newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = this.id;
            matrix[this.y][this.x] = 5;

            this.x = newX;
            this.y = newY;
        }
    }
}