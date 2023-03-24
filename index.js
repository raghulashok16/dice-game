$(document).ready(function () {
    $("#p1btn").click(function () {
        $("#diceImg").removeClass("roll");
        let temp = Math.floor(Math.random() * 6) + 1;
        if (temp === 6) {
            $("#diceImg").toggleClass("roll");
        }

        $('#diceImg').attr('src', `${temp}.png`);
    });
});  