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
 * @param {Brick[]} bricks the wall of Bricks that needs to be displayed
 */
function displayBricks(bricks) {
    for (let i = 0; i < bricks.length; i++) {
        $("#wall").append($("<div>")
            .addClass("brick")
            .css({
                "left": `${bricks[i].x}px`,
                "top": `${bricks[i].y}px`,
                "width": `${Brick_Width}px`,
                "height": `${Brick_Height}px`
            })
            .attr("id", `brick${bricks[i].id}`));
    }
}

/**
 * deletes a brick from the display
 * @param Brick{} brick the brick to remove
 */
function deleteBrick(brick) {
    $(`#brick${brick.id}`).addClass("hidden");
}