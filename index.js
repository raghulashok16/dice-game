$(document).ready(function () {
    $("#p1btn").click(function () {

        let temp = Math.floor(Math.random() * 6) + 1;
        $("#diceImg").addClass("roll");
        $('#diceImg').attr('src', `${temp}.png`);
        $('#p1btn').hide();
        $("#diceImg").delay(9000).toggleClass("roll");
        $('#p1btn').delay(9000).show();
    });
});  