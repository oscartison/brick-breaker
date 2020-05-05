class Brick {

    /**
     * contrcuts an object of the vlass Brick
     * @param {number} x the horizontal position of the brick 
     * @param {number} y the vertical position of the brick 
     */
    constructor(x, y) {
        this._x = x;
        this._y = y;
        $("#wall").append($("<div> </div>")).addClass("brick");
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