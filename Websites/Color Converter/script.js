const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;

function changeColor(color) {
    $(".colors").css("background-color", color);
    $(".res").text(rgb2hex($(".colors").css("background-color")));
}

function changeColorCustom(rgb) {
    if (rgb) {
        color = $("#custom").val();
        $(".colors").css("background-color", "rgb(" + color + ")");
        $(".res").text(rgb2hex($(".colors").css("background-color")));
    } else {
        changeColor($("#custom").val());
    }
}

/*
NOTE:
Thanks to Cris Code (Mentor)
He was responsible for the idea and provided me the needed resources!
*/
