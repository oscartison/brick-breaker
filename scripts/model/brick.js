class Brick {

    /**
     * constructs an object of the class Brick
     * @param {number} x the horizontal position of the brick 
     * @param {number} y the vertical position of the brick 
     */
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    /**
     * gets the horizontal position of the brick 
     */
    get x() {
        return this._x;
    }

    /**
     * gets the vertical position of the brick 
     */
    get y() {
        return this._y;
    }

}