let isTimerRunning = false;
let isStopwatchRunning = false;
var sekunden = 0;
var Lsekunden = 0;
var minuten = 0;
var Lminuten = 0;
var stunden = 0;
var Lstunden = 0;

var allSekundenT = 00;
var allMinutenT = 00;
var allStundenT = 00;

function btnStart()
{
    if(isStopwatchRunning == false)
    {
        isStopwatchRunning= true;
        setWeiterToStart();
        Vinterval = setInterval(updateAnzeige, 1000);//setInterval function keeps the "if statement" running in this line so the compiler doesnt run any other code positioned after
    }
}
function updateAnzeige()
{
    if(parseInt(sekunden)<9)
    {
        sekunden++;
    }
    else if(parseInt(Lsekunden)<5)
    {   
        sekunden = 0;
        Lsekunden++;
    }
    else if(parseInt(minuten)<9)
    {   
        sekunden = 0;
        Lsekunden = 0;
        minuten++;
    }
    else if(parseInt(Lminuten)<5)
    {
        sekunden =0;
        Lsekunden = 0;
        minuten = 0;
        Lminuten++;
    }
    else if(parseInt(stunden)<9)
    {   
        sekunden = 0;
        Lsekunden = 0;
        minuten = 0;
        Lminuten = 0;
        stunden++;
    }
    else if(parseInt(Lstunden)<5)
    {
        sekunden = 0;
        Lsekunden = 0;
        minuten = 0;
        Lminuten = 0;
        stunden = 0;
        Lstunden++;
    }
    else
    {
        btnReset();
    }
    document.getElementById("ZeitAnzeige").innerHTML = "" + Lstunden + stunden + ":" + Lminuten + minuten + ":" + Lsekunden + sekunden;
    if(isEven(sekunden))
    {
        playsoundTack();
    }
    else{
        playsoundTick();
    }
}
function btnReset()
{   
    window.clearInterval(Vinterval);
    setAllStopwatchvarsToZero();
    document.getElementById("ZeitAnzeige").innerHTML = "00:00:00";
    setWeiterToStart();
    isStopwatchRunning = false;
}
function setAllStopwatchvarsToZero() {
    sekunden = 0;
    Lsekunden = 0;
    minuten = 0;
    Lminuten = 0;
    stunden = 0;
    Lstunden = 0;
}

function setWeiterToStart() {
    document.getElementById("btnStart").innerHTML = "Start";
}

function btnStop()
{
    window.clearInterval(Vinterval);
    if(isStopwatchRunning==true)
    {
        document.getElementById("btnStart").innerHTML = "Weiter";
    }
    isStopwatchRunning = false;
}











function pickTimer()
{
    if((isTimerRunning==false)&&(isStopwatchRunning==false))
    {
        document.getElementById("pickTimerID").style.backgroundColor = "rgb(71, 238, 121)";
        document.getElementById("pickStopwatchID").style.backgroundColor = "rgb(95, 158, 160)";
        document.getElementById("AllTimerElementsID").style.visibility = 'visible';
        document.getElementById("allStopwatchDivsID").style.visibility = 'hidden';
    }
}

function pickStopwatch()
{
    if((isTimerRunning==false)&&(isStopwatchRunning==false))
    {
        document.getElementById("pickStopwatchID").style.backgroundColor = "rgb(71, 238, 121)";
        document.getElementById("pickTimerID").style.backgroundColor = "rgb(95, 158, 160)";
        document.getElementById("AllTimerElementsID").style.visibility = 'hidden';
        document.getElementById("allStopwatchDivsID").style.visibility = 'visible';
    }
}
function btnStartTimer()
{
    if(areAllInputsZero())
    {
    }
    else{
        if(isTimerRunning == false)
        {
            isTimerRunning = true;
            document.getElementById("btnStartTimer").innerHTML = "Start";
            assignValues()
            TimerInt = setInterval(Timerupdate, 1000);//setInterval function keeps the "if statement" running in this line so the compiler doesnt run any other code positioned after
        }
    }
}

function areAllInputsZero() {
    return (document.getElementById("TimerInputL").value == 0) && (document.getElementById("TimerInputM").value == 0) && (document.getElementById("TimerInputR").value == 0);
}

function Timerupdate()
{
    if(parseInt(allSekundenT)>0)
    {
        allSekundenT--;
    }
    else if(parseInt(allMinutenT)>0)
    {   
        allSekundenT = 59;
        allMinutenT--;
    }
    else if(parseInt(allStundenT)>0)
    {   
        allSekundenT = 59;
        allMinutenT = 59;
        allStundenT--;
    }
    else
    {
        btnResetTimer();
        playsoundRinging();
        if(allSekundenT==0) return;
    }
    document.getElementById("TimerInputL").value = String("0" + allStundenT).slice(-2);//  nur die letztenfügt immer eine 0 vorne an und zeigt zwei Ziffern. ".slice" funtioniert anscheinend nur bei Strings.
    document.getElementById("TimerInputM").value = String("0" + allMinutenT).slice(-2);
    document.getElementById("TimerInputR").value = String("0" + allSekundenT).slice(-2);
    if(isEven(allSekundenT))
    {
        playsoundTack();
    }
    else{
        playsoundTick();
    }
    
}

function btnResetTimer()
{
    window.clearInterval(TimerInt);
    setAllTimerVarstoZero();
    document.getElementById("TimerInputL").value="" + "00";
    document.getElementById("TimerInputM").value="" + "00";
    document.getElementById("TimerInputR").value="" + "00";
    isTimerRunning = false;
}

function setAllTimerVarstoZero() {
    allSekundenT = 00;
    allMinutenT = 00;
    allStundenT = 00;
}

function btnRoundsTimer()
{
    if(isTimerRunning==true)
    {
        document.getElementById("listForRounds").innerHTML ="<li><span>" + allStundenT + " hours and " + allMinutenT + " minutes and " + allSekundenT + " seconds" + "</span></li>" + document.getElementById("listForRounds").innerHTML;
    }
}
function deleteRounds()
{
    document.getElementById("listForRounds").innerHTML = "";
}
function assignValues()
{
    allSekundenT = parseInt(document.getElementById("TimerInputR").value);
    allMinutenT = parseInt(document.getElementById("TimerInputM").value);
    allStundenT = parseInt(document.getElementById("TimerInputL").value);
}

function checkvalue()
{
    if(document.getElementById("TimerInputL").value>60)
    {
        document.getElementById("TimerInputL").value=60;
    }
    if((document.getElementById("TimerInputL").value<0) || (document.getElementById("TimerInputL").value==""))
    {
        document.getElementById("TimerInputL").value="00";
    }

    if(document.getElementById("TimerInputM").value>60)
    {
        document.getElementById("TimerInputM").value=60;
    }
    if((document.getElementById("TimerInputM").value<0) || (document.getElementById("TimerInputM").value==""))
    {
        document.getElementById("TimerInputM").value="00";
    }
    
    if(document.getElementById("TimerInputR").value>60)
    {
        document.getElementById("TimerInputR").value=60;
    }
    if((document.getElementById("TimerInputR").value<0) || (document.getElementById("TimerInputR").value==""))
    {
        document.getElementById("TimerInputR").value="00";
    }
}

function isEven(variable)
{
    if(variable%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}
function playsoundTick()
{   
    var audioPlayer = document.createElement("audio");
    audioPlayer.setAttribute("src", "./js/audio/tick.mp3");//no copyrighted sound
    audioPlayer.volume = 0.2;
    audioPlayer.play();
    audioPlayer.remove();
}

function playsoundTack()
{
    
    var audioPlayer = document.createElement("audio");
    audioPlayer.setAttribute("src", "./js/audio/tack.mp3");//no copyrighted sound
    audioPlayer.volume = 0.2;
    audioPlayer.play();
    audioPlayer.remove();
}
function playsoundRinging()
{
    
    var audioPlayer = document.createElement("audio");
    audioPlayer.setAttribute("src", "./js/audio/ringing.mp3");//no copyrighted sound
    audioPlayer.volume = 0.8;
    audioPlayer.play();
    audioPlayer.remove();
}