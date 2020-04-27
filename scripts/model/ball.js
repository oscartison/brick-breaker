class Ball {

    /**
     * constructor to create a ball at a certain position
     * @param {number} x the horizontal position of the ball starting from the left side of the game
     * @param {number} y the vertical position of the ball starting from the top of the game
     */
    constructor(x, y) {
        if (x > Scene_Width || y > Scene_Height || x < 0 || y < 0) {
            throw new Error("position not possible");
        }
        this._x = x;
        this._y = y;
    }

    /**
     * gets the x position of the ball
     */
    get x() {
        return this._x;
    }

    /**
     * gets the y posotion of the ball
     */
    get y() {
        return this._y;
    }
}