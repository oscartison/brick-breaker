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
 * when the mouse moves the paddle moves at the same width as the mouse
 */
$(document).ready(() => {
    const paddle = new Paddle(Scene_Width / 2 - (Paddle_Width / 2));
    const ball = new Ball(Scene_Width / 2, Scene_Height / 2, 1, -.5);
    displayPaddle(paddle);

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
    }, 10);
});