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
