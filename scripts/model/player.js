"use strict";

class Player {

    /**
     * constructor of the class Player
     */
    constructor() {
        this._score = 0;
    }

    /**
     * a getter for the score of the player
     */
    get score() {
        return this._score;
    }

    /**
     * adds points to the core of the player
     * @param {number} points the amount of points to add to the player
     */
    addToScore(points) {
        this._score += points;
    }
}
