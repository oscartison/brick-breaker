"use strict";

class Paddle {

    /**
     * constructs a new paddle at left from the left side of the game
     * @param {number} left
     */
    constructor(left) {
        if (left < 0 || left > Scene_Width - Paddle_Width) {
            throw new Error("value of left is not possible");
        }
        this._left = left;
    }

    /**
     * a getter for how much left the paddle is situated
     */
    get left() {
        return this._left;
    }

    /**
     * moves the paddle at position left
     * @param {number} left the new position of the paddle
     */
    moveTo(left) {
        if (left > Scene_Width - Paddle_Width) {
            this._left = Scene_Width - Paddle_Width;
        } else if (left < 0) {
            this._left = 0;
        } else {
            this._left = left;
        }
    }
}
