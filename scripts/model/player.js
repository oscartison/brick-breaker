"use strict";

class Player {

    /**
     * constructor of the class Player
     */
    constructor() {
        this._score = 0;
        this._lives = 3;
    }

    /**
     * a getter for the score of the player
     */
    get score() {
        return this._score;
    }

    /**
     * a getter for the number of lives of the player
     */
    get lives() {
        return this._lives;
    }

    /**
     * adds points to the core of the player
     * @param {number} points the amount of points to add to the player
     */
    addToScore(points) {
        this._score += points;
    }

    /**
     * removes one live from the player
     */
    removeLive() {
        this._lives--;
    }

    /**
     * checks if the player still is alive
     */
    isAlive() {
        return this._lives > 0;
    }
}
