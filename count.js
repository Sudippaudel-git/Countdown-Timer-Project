let countDown;
let countdownDisplay=document.getElementById("countdown");
function startCountdown(){
    // set the countdown time in seconds i have choose 1 min
    let seconds=1*60;
    countDown=setInterval(function(){
        let minutes=Math.floor(seconds/60);
        let remainingSec=seconds%60;

        // Now, Display the countdown in the MM.SS.format
        countdownDisplay.innerHTML=`${String(minutes).padStart(2,'0')}:${String(remainingSec).padStart(2,'0')}`;// padStart(2,'0')=> 2 digits are displayed in minutes and seconds 
        if(seconds==0){
            clearInterval(countDown);
            countdownDisplay.innerHTML='Time \'s up!!';

        }
        else{
            seconds--;
        }
    } , 1000);
}
function resetCountdown(){
    clearInterval(countDown);
    countdownDisplay.innerHTML="";
}