
var diff = 1;
var cost = 10;

function clickedCookie() {

    // Get variables
    var cookies = parseInt(document.getElementById("cookies").innerHTML);
    var cps = parseInt(document.getElementById("cps").innerHTML);

    // Add amount
    cookies += cps;
    
    // Update HTML elements
    document.getElementById("cookies").innerHTML = cookies;

    // Do animation
    document

}

function upgrade() {

    // Get variables
    var cookies = parseInt(document.getElementById("cookies").innerHTML);
    var cps = parseInt(document.getElementById("cps").innerHTML);
    var cost = parseInt(document.getElementById("upCps").innerHTML);

    // Check amount and update new variables
    if ((cost-1) < cookies) {
        cps += 1;
        cookies -= cost;
        cost = cost*(diff+2);
    }
    // Amount not enough
    else {
        alert("You do not have enough cookies!");
    }

    // Write back new variables
    document.getElementById("cookies").innerHTML = cookies;
    document.getElementById("cps").innerHTML = cps;
    document.getElementById("upCps").innerHTML = cost;
}

function difficulty(lvl) {
    // lvl 0 - EASY, lvl 1 - MEDIUM, lvl 2 - HARD
    // default = 1 (MEDIUM)
    diff = lvl;
    load();
}

function load() {
    // Detect, display and change current difficulty
    switch(diff) {
        case 0:
            document.getElementById("displayDiff").innerHTML = "Easy";
            document.getElementById("displayDiff").style.color = "#32cd32";
            cost = 10;
            break;
        case 1:
            document.getElementById("displayDiff").innerHTML = "Medium";
            document.getElementById("displayDiff").style.color = "#ff6700";
            cost = 30;
            break;
        case 2:
            document.getElementById("displayDiff").innerHTML = "Hard";
            document.getElementById("displayDiff").style.color = "#ff2400";
            cost = 60;
            break;
    }
    document.getElementById("upCps").innerHTML = cost;
}
