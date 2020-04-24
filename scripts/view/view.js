/**
 * displays the paddle into the gameConainer at the right position
 * @param {Paddle} paddle the paddle that needs to be displayed
 */
function displayPaddle(paddle) {
    const left = paddle.left;
    $("#paddle").css("left", `${left}px`);
}