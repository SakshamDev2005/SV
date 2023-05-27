//Link
function link3() {
window.open("https://github.com/Sybe-Developer/Others");
}

function link4() {
window.open("https://github.com/Sybe-Developer/Others");
}

function link5() {
    window.open("https://github.com/Sybe-Developer/Others");
}

//Disable Shortcut Keys
document.onkeydown = function (e) {
    return false;
}

//Speaker Button (For Music)
function play(){
    var audio = document.getElementById("audio");
    audio.play();
    document.getElementById("play").style.display="none";
    document.getElementById("pause").style.display="inline-block";   
}

function pause(){
    var audio = document.getElementById("audio");
    audio.pause();
    document.getElementById("play").style.display="inline-block";
    document.getElementById("pause").style.display="none";
}
