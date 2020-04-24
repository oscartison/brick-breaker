"use strict";

/**
 * when the mouse moves the paddle moves at the same width as the mouse
 */
$(document).ready(() => {
    const paddle = new Paddle(Scene_Width / 2 - (Paddle_Width / 2));
    displayPaddle(paddle);

    $(document).mousemove(function (e) {
        const new_left = e.clientX - $("#gameContainer").offset().left - (Paddle_Width / 2);
        paddle.moveTo(new_left);
        displayPaddle(paddle);
    });
});