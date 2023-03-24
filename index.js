$(document).ready(function () {
    $('#p2btn').hide();
    $('#p2hs').hide();
    let p1totalScore = 0;
    let p1currentScore = 0;
    let p2totalScore = 0;
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
                $('#p1hs').hide();
                $('#p2hs').show();
                p1currentScore = 0;
            } else {
                p1currentScore = p1temp + p1currentScore;
            }
            $("#p1cs").text(`${p1currentScore}`);
        }
    });

    $("#p1hs").click(function () {
        p1totalScore = p1currentScore + p1totalScore;
        p1currentScore = 0;
        $("#p1ts").text(`${p1totalScore}`);
        $("#p1cs").text('0');
        $('#p1btn').hide();
        $('#p2btn').show();
        $('#p1hs').hide();
        $('#p2hs').show();
        if (p1totalScore > 39) {
            $("#p1bg").removeClass("bg-white")
            $("#p1bg").css("background-color", "#E2F0D7");
            $("#p1tlt").text("Player 1 WON..");
            $("#roller").hide();
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
                $('#p2hs').hide();
                $('#p1hs').show();
                p2currentScore = 0;
            } else {
                p2currentScore = p2temp + p2currentScore;
            }
            $("#p2cs").text(`${p2currentScore}`);
        }
    });
    $("#p2hs").click(function () {
        p2totalScore = p2currentScore + p2totalScore;
        p2currentScore = 0;
        $("#p2ts").text(`${p2totalScore}`);
        $("#p2cs").text('0');
        $('#p2btn').hide();
        $('#p1btn').show();
        $('#p2hs').hide();
        $('#p1hs').show();
        if (p2totalScore > 39) {
            $("#p2bg").removeClass("bg-white")
            $("#p2bg").css("background-color", "#E2F0D7");
            $("#p2tlt").text("Player 2 WON..");
            $("#roller").hide();
        }
    });

    $("#reset").click(function () {
        $('#p1btn').show();
        $('#p2btn').hide();
        $('#p1hs').show();
        $('#p2hs').hide();
        p1totalScore = 0;
        $("#p1ts").text(`${p1totalScore}`);
        p1currentScore = 0;
        p2totalScore = 0
        $("#p2ts").text(`${p2totalScore}`);
        p2currentScore = 0;
        p1temp = 0;
        p2temp = 0;
        $("#p1bg").addClass("bg-white")
        $("#p2bg").addClass("bg-white")
        $("#p1tlt").text("Player 1");
        $("#p2tlt").text("Player 2");
        $("#roller").show();
    });

});  