/**
 * displays the paddle into the gameConainer at the right position
 * @param {Paddle} paddle the paddle that needs to be displayed
 */
function displayPaddle(paddle) {
    $("#paddle").css("left", `${paddle.left}px`);
}

/**
 * displays the ball into the gameConainer at the right position
 * @param {Ball} ball the ball that needs to be displayed
 */
function displayBall(ball) {
    $("#ball").css({ "left": `${ball.x - Ball_Radius}px`, "top": `${ball.y - Ball_Radius}px` });
}

/**
 * displays the brick into the gameConainer at the right position
 * @param {Brick} brick the paddle that needs to be displayed
 */
function displayBricks(bricks) {
    for (const brick of bricks) {
        $("#wall").append($("<div>")
            .addClass("brick")
            .css({ "left": `${brick.x}px`, "top": `${brick.y}px` }));
    }
}