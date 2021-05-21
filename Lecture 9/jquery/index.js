$(document).ready(function () {
    $("#hide-h1").click(function () {
        $("#h1").hide();
    });

    $("#show-h1").click(function () {
        $("#h1").show();
    });

    $("#toggle-h1").click(function () {
        $("#h1").toggle();
    });

    $("#fade-h1").click(function () {
        $("#h1").fadeIn();
    });

    $("#fadeSlow-h1").click(function () {
        $("#h1").fadeIn("slow");
    });

    $("#fadeNum-h1").click(function () {
        $("#h1").fadeIn(3000);
    });

    $("#fadeOut-h1").click(function () {
        $("#h1").fadeOut();
    });

    $("#fadeOutSlow-h1").click(function () {
        $("#h1").fadeOut("slow");
    });

    $("#fadeOutNum-h1").click(function () {
        $("#h1").fadeOut(3000);
    });

});