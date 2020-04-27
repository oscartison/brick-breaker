/**
 * displays the paddle into the gameConainer at the right position
 * @param {Paddle} paddle the paddle that needs to be displayed
 */
function displayPaddle(paddle) {
    $("#paddle").css("left", `${paddle.left}px`);
}


function displayBall(ball) {
    $("#ball").css("left", `${ball.x - Ball_Radius}px`);
    $("#ball").css("top", `${ball.y - Ball_Radius}px`);
}