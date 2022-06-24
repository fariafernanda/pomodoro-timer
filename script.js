let minutes = 25;
let seconds = 0;

function setTimer(){
    minutes < 10 ? minutes = '0' + minutes : minutes;
    seconds < 10 ? seconds = '0' + seconds : seconds;

    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}



