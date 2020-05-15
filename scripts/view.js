"use strict";

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
    $("#ball").css({
        "left": `${ball.x - Ball_Radius}px`,
        "top": `${ball.y - Ball_Radius}px`
    });
}

/**
 * updates the core of the player
 * @param {number} score the new score of the player
 */
function updateScore(score) {
    $("#score").text(score);
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
 * @param {Brick} brick the brick to remove
 */
function deleteBrick(brick) {
    $(`#brick${brick.id}`).remove();
}

/**
 * removes the start message
 */
function hideStartMessage() {
    $("#textBegin").addClass("hidden");
}

/**
 * shows the start message
 */
function showStratMessage() {
    $("#textBegin").removeClass("hidden");
}

/**
 * displays n lives
 * @param {number} n the amount of lives to display
 */
function displayLives(n) {
    for (let i = 0; i < n; i++) {
        $("#lives").append($("<span>").addClass("heart"));
    }
}

/**
 * removes 1 life on the display
 */
function removeLife() {
    $(".heart").last()
        .remove();
}

/**
 * displays the current level
 * @param {number} n the number to display as level
 */
function displayLevel(n) {
    $("#levelnb").text(n);
}
