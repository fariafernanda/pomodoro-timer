let minutes = 1;
let seconds = 0;

function setTimer() {
    minutes < 10 ? minutes = '0' + minutes : minutes;
    seconds < 10 ? seconds = '0' + seconds : seconds;

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

}

// Tempo de atividade
function startTimer() {

    minutes = minutes - 1;
    seconds = 59;

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    let minutesInterval = setInterval(minutesCountdown, 60000);
    let secondsInterval = setInterval(secondsCountdown, 1000);

    function minutesCountdown() {
        minutes = minutes - 1;

        if (minutes < 10) {
            document.getElementById('minutes').innerHTML = '0' + minutes;
        } else {
            document.getElementById('minutes').innerHTML = minutes;
        }

       
    };

    function secondsCountdown() {
        seconds = seconds - 1;

        if (seconds < 10) {
            document.getElementById('seconds').innerHTML = '0' + seconds;
        } else {
            document.getElementById('seconds').innerHTML = seconds;
        }


        if (seconds <= 0) {
            if (minutes <= 0) {
                clearInterval(minutesInterval);
                clearInterval(secondsInterval);

                // audio
               startBreakInterval();

            }
            seconds = 60;
        }
    };

    changeTemplateToAction();
}


let breakMinutes = 5;
let breakSeconds = 0;

// Tempo de descanso
function startBreakInterval() {    

    changeTemplateToPause();
    
    breakMinutes = breakMinutes - 1;
    breakSeconds = 59;

    if (breakMinutes < 10) {
        document.getElementById('minutes').innerHTML = '0' + breakMinutes;
    } else {
        document.getElementById('minutes').innerHTML = breakMinutes;
    }

    document.getElementById('seconds').innerHTML = breakSeconds;

    let minutesInterval = setInterval(minutesCountdown, 60000);
    let secondsInterval = setInterval(secondsCountdown, 1000);

    function minutesCountdown() {
        breakMinutes = breakMinutes - 1;
        if (breakMinutes < 10) {
            document.getElementById('minutes').innerHTML = '0' + breakMinutes;
        } else {
            document.getElementById('minutes').innerHTML = breakMinutes;
        }
    };

    function secondsCountdown() {
        breakSeconds = breakSeconds - 1;

        if (breakSeconds < 10) {
            document.getElementById('seconds').innerHTML = '0' + breakSeconds;
        } else {
            document.getElementById('seconds').innerHTML = breakSeconds;
        }


        if (breakSeconds <= 0) {
            if (breakMinutes <= 0) {
                clearInterval(minutesInterval);
                clearInterval(secondsInterval);

                // audio
                startTimer();

            }
            breakSeconds = 60;
        }
    };

}

let action = document.getElementById('action');
let pause = document.getElementById('pause');
let startButton = document.getElementById('start-btn');

function changeTemplateToAction(){
    startButton.style.setProperty('display', 'none');

}

function changeTemplateToPause(){
    pause.style.setProperty('display', 'block');
    action.style.setProperty('display', 'none');
}