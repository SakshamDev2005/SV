function link1() {
window.open("https://www.mediafire.com/file/ldpqoy7od2wmb1l/Translator.exe/file");
}

function link2() {
window.open("https://www.mediafire.com/file/lwvy72ix43k6eow/rps.exe/file");
}

function link3() {
window.open("https://sourceb.in/xsTkA3OtaR");
}

function link4() {
window.open("https://sourceb.in/WztidG0BNE");
}

function link5() {
    window.open("https://sourceb.in/DFQEpqDyy7");
}

document.onkeydown = function (e) {
    return false;
}

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