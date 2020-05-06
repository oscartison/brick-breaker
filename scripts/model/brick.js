class Brick {

    /**
     * constructs an object of the class Brick
     * @param {number} x the horizontal position of the brick 
     * @param {number} y the vertical position of the brick 
     * @param {number} id the id of the brick 
     */
    constructor(x, y, id) {
        this._x = x;
        this._y = y;
        this._id = id;
        this._hit = false;
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

    /**
     * gets the id of the brick
     */
    get id() {
        return this._id;
    }

    /**
     * gets the hit attribute of the brick
     */
    get hit() {
        return this._hit;
    }

    /**
     * sets the attribute hit to true
     */
    setHit(bool) {
        this._hit = bool;
    }
}