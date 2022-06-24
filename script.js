let minutes = 25;
let seconds = 0;



function setTimer(){
    minutes < 10 ? minutes = '0' + minutes : minutes;
    seconds < 10 ? seconds = '0' + seconds : seconds;

    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

}


function startTimer(){
    

    minutes = minutes - 1;
    seconds = 59;

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    let minutesInterval = setInterval(minutesCountdown, 60000);
    let secondsInterval = setInterval(secondsCountdown, 1000);

    function minutesCountdown(){
        minutes = minutes - 1;
        if (minutes < 10) {
            document.getElementById('minutes').innerHTML = '0' + minutes;
        } else {
            document.getElementById('minutes').innerHTML = minutes;
        }
        
    
    };

    function secondsCountdown(){
        seconds = seconds - 1;

        if(seconds < 10){
            document.getElementById('seconds').innerHTML = '0' + seconds;
        } else {
            document.getElementById('seconds').innerHTML = seconds;
        }
        
       
        if(seconds <= 0){
            if(minutes <= 0){
                clearInterval(minutesInterval);
                clearInterval(secondsInterval);

                // audio
                // Começar intervalo

            }

            seconds = 60;
        } 

    };
}
