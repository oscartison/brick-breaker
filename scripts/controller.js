"use strict";

const player = new Player();
const paddle = new Paddle(Scene_Width / 2 - Paddle_Width / 2);
const ball = new Ball(Scene_Width / 2, Scene_Height / 2, 1, -1.5);
let wall = createWall(Bricks_Rows, Bricks_Colums);
let level = 1;

/**
 * checks wehter there is a collision between the ball and the paddle
 */
function isBallOnPaddle() {
    return ball.x + Ball_Radius >= paddle.left &&
        ball.x - Ball_Radius <= paddle.left + Paddle_Width &&
        ball.y + Ball_Radius >= Scene_Height - Paddle_Height;
}

/**
 * creates an array of bricks
 * @param {number} rows the amount of rows of bricks
 * @param {number} cols the amount of cols of bricks
 */
function createWall(rows, cols) {
    const wallArray = [];
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            wallArray.push(new Brick(i * Brick_Width, j * Brick_Height, wallArray.length));
        }
    }
    return wallArray;
}

/**
 * checks if there is a collision with a brick and deletes that brick
 */
function collisionBrick() {
    let alreadyOneHit = false;
    for (let i = 0; i < wall.length; i++) {
        if (!wall[i].hit
            && ball.x + Ball_Radius >= wall[i].x
            && ball.x - Ball_Radius <= wall[i].x + Brick_Width
            && ball.y - Ball_Radius <= wall[i].y + Brick_Height
            && ball.y + Ball_Radius >= wall[i].y) {
            wall[i].setHit();
            deleteBrick(wall[i]);
            player.addToScore(25);
            updateScore(player.score);

            if (!alreadyOneHit) {
                ball.hitBrick(wall[i]);
                alreadyOneHit = true;
            }
        }
    }
}

/**
 * checks if the game is over or not
 */
function isGameOver() {
    return !player.isAlive();
}

/**
 * checks if the game is won, by checking if all the bricks were hit
 */
function isWon() {
    const isHit = (currentValue) => currentValue.hit === true;
    return wall.every(isHit);
}

/**
 * the gameloop
 */
function gameLoop() {
    const loop = setInterval(() => {
        ball.move();
        displayBall(ball);
        if (isBallOnPaddle()) {
            ball.hitPaddle();
        }
        collisionBrick();
        if (ball.y + Ball_Radius >= Scene_Height) {
            ball.startMiddle();
            player.removeLive();
            removeLife();
        }

        if (isGameOver()) {
            clearInterval(loop);
        }
        if (isWon()) {
            wall = createWall(Bricks_Rows, Bricks_Colums);
            ball.startMiddle();
            player.addLive();
            displayLives(1);
            displayBricks(wall);
            level++;
        }
    }, 10);

    $(document).mousemove(function (e) {
        const new_left = e.clientX - $("#gameContainer").offset().left - Paddle_Width / 2;
        paddle.moveTo(new_left);
        displayPaddle(paddle);
    });
}

/**
 * when the mouse moves the paddle moves at the same width as the mouse
 */
$(document).ready(() => {

    displayPaddle(paddle);
    displayBricks(wall);
    displayLives(player.lives);

    $(document).one("click", function (e) {
        hideStartMessage();
        gameLoop();
    });
});
