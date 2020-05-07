"use strict";

/**
 * checks wehter there is a collision between the ball and the paddle
 * @param {Ball} ball 
 * @param {Paddle} paddle 
 */
function isBallOnPaddle(ball, paddle) {
    return (ball.x + Ball_Radius >= paddle.left) &&
        (ball.x - Ball_Radius <= paddle.left + Paddle_Width) &&
        (ball.y + Ball_Radius >= Scene_Height - Paddle_Height);
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
 * @param {Brick[]} wall the array of bricks 
 * @param {Ball} ball the ball in the game
 */
function collisionBrick(wall, ball) {
    for (let i = 0; i < wall.length; i++) {
        if (!(wall[i].hit)
            && ((ball.x + Ball_Radius) >= wall[i].x)
            && (ball.x - Ball_Radius <= wall[i].x + Brick_Width)
            && (ball.y - Ball_Radius <= wall[i].y + Brick_Height)
            && (ball.y + Ball_Radius) >= wall[i].y) {
            wall[i].setHit(true);
            deleteBrick(wall[i]);
        }
    }
}

/**
 * when the mouse moves the paddle moves at the same width as the mouse
 */
$(document).ready(() => {
    const paddle = new Paddle(Scene_Width / 2 - (Paddle_Width / 2));
    const ball = new Ball(Scene_Width / 2, Scene_Height / 2, 1, -1.5);
    const wall = createWall(Bricks_Rows, Bricks_Colums);

    displayPaddle(paddle);
    displayBricks(wall);

    $(document).mousemove(function (e) {
        const new_left = e.clientX - $("#gameContainer").offset().left - (Paddle_Width / 2);
        paddle.moveTo(new_left);
        displayPaddle(paddle);
    });

    setInterval(() => {
        ball.move();
        displayBall(ball);
        if (isBallOnPaddle(ball, paddle)) {
            ball.hitPaddle();
        }
        collisionBrick(wall, ball);
    }, 5);
});