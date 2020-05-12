"use strict";

class Ball {

    /**
     * constructor to create a ball at a certain position
     * @param {number} x the horizontal position of the ball starting from the left side of the game
     * @param {number} y the vertical position of the ball starting from the top of the game
     * @param {number} dx the horizontal movement of the ball
     * @param {number} dy the vertical movement of the ball
     */
    constructor(x, y, dx, dy) {
        if (x > Scene_Width || y > Scene_Height || x < 0 || y < 0) {
            throw new Error("position not possible");
        }
        this._x = x;
        this._y = y;
        this._dx = dx;
        this._dy = dy;
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

    /**
     * reverses the horizontal movement
     */
    _reverseX() {
        this._dx = -this._dx;
    }

    /**
     * reverses the vertical movement
     */
    _reverseY() {
        this._dy = -this._dy;
    }

    /**
     * changes the movement of the ball when it hits the paddle
     */
    hitPaddle() {
        this._reverseY();
    }

    /**
     * changes the movement of the ball when it hits a brick
     * @param {Brick} brick the brick hit by the ball
     */
    hitBrick(brick) {
        if (this._y - Ball_Radius <= brick.y + Brick_Height && this._y + Ball_Radius >= brick.y) {
            this._reverseY();
        } else {
            this._reverseX();
        }
    }

    /**
     * moves the ball dx in the horizontal direction and dy in the vertical direction
     */
    move() {
        if (this._y - Ball_Radius <= 0) {
            this._reverseY();
        } else if (this._x - Ball_Radius <= 0 || this._x + Ball_Radius >= Scene_Width) {
            this._reverseX();
        }
        this._x = this._x + this._dx;
        this._y = this._y + this._dy;
    }

    /**
     * places the ball in the middle of the game
     */
    startMiddle() {
        this._x = Scene_Width / 2;
        this._y = Scene_Height / 2;
        this._dx = 1;
        this._dy = 1.5;
    }
}
