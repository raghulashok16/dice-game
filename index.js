$(document).ready(function () {
    $('#p2btn').hide();
    let p1totalScore = 0
    let p1currentScore = 0;
    let p2totalScore = 0
    let p2currentScore = 0;
    let p1temp = 0;
    let p2temp = 0;

    $("#p1btn").click(function () {
        p1temp = 0;
        p1temp = Math.floor(Math.random() * 6) + 1;
        $("#diceImg").toggleClass("roll");
        $('#diceImg').attr('src', `${p1temp}.png`);
        $('#p1btn').hide();
        const myTimeout = setTimeout(p1tgl, 800);
        function p1tgl() {
            $('#p1btn').show();
            $("#diceImg").toggleClass("roll");
            if (p1temp === 6) {
                $('#p1btn').hide();
                $('#p2btn').show();
            }
        }
    });

    $("#p2btn").click(function () {
        p2temp = 0;
        p2temp = Math.floor(Math.random() * 6) + 1;
        $("#diceImg").toggleClass("roll");
        $('#diceImg').attr('src', `${p2temp}.png`);
        $('#p2btn').hide();
        const myTimeout = setTimeout(p2tgl, 800);
        function p2tgl() {
            $('#p2btn').show();
            $("#diceImg").toggleClass("roll");
            if (p2temp === 6) {
                $('#p2btn').hide();
                $('#p1btn').show();
            }
        }
    });
});  