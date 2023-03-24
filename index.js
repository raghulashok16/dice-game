$(document).ready(function () {
    let a = 0;
    $("#p1btn").click(function () {
        a = a + 1;
        $('#p1ts').text(`${a}`);
        let temp = Math.floor(Math.random() * 6) + 1;
        $("#diceImg").addClass("roll");
        $('#diceImg').attr('src', `${temp}.png`);
        $('#p1btn').hide();
    });
});  