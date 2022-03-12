class Farmer {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.grewGrass = 0;
        this.getNewCoordinates();
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character, character2) {
        this.getNewCoordinates();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == character2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
        var emptyCells = this.chooseCell(0, 1);
        var newCell = random(emptyCells);

        if (this.grewGrass <= 15 && newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = this.id;
            matrix[this.y][this.x] = 1;

            this.x = newX;
            this.y = newY;
        }
    }

    // eat() {
    //     var emptyCells = this.chooseCell(1);
    //     var newCell = random(emptyCells);

    //     if (newCell) {
    //         var newX = newCell[0];
    //         var newY = newCell[1];

    //         matrix[newY][newX] = this.id;
    //         matrix[this.y][this.x] = 0;

    //         this.x = newX;
    //         this.y = newY;

    //         for (var i in farmerArr) {
    //             if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
    //                 grassEaterArr.splice(i, 1);
    //             }
    //         }
    //         this.addGrass();
    //     } else {
    //         this.move();
    //     }

    // }
    eat() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = this.id;
            matrix[this.y][this.x] = 4;

            this.x = newX;
            this.y = newY;

            for (var i in farmerArr) {
                if (farmerArr[i].x == newX && farmerArr[i].y == newY) {
                    farmerArr.splice(i, 1);
                }
            }
        } else {
            this.move();
        }

    }
}