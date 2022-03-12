class Mud {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.energy = 8;
    }

    mudHere(){
        if (this.energy > 0) {
            this.energy--;
        }

        this.die();
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;

            for (var i in mudArr) {
                if (mudArr[i].x == this.x && mudArr[i].y == this.y) {
                    mudArr.splice(i, 1);
                    break;
                }
                
            }
        }
    }
}