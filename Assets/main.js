
var dayTimerContainer = document.getElementById("DayCounter");
var timerContainer = document.getElementById("TimeCounter");
var timer;
var endTime = new Date(2018, 5, 29, 17, 0, 0, 0);

function UpdateTimer() {
    var timeNow = Date.now();
    var remTimeMilliseconds = new Date((endTime.getTime() - timeNow)).getTime();
    
    //
    var rDayInit = Math.floor(remTimeMilliseconds / 1000 / 60 / 60 / 24);
    var rHourinit = Math.floor(remTimeMilliseconds / 1000 / 60 / 60);
    var rMinuteinit = Math.floor(remTimeMilliseconds / 1000 / 60) % 60;
    var rSecondinit = Math.floor(remTimeMilliseconds / 1000) % 60;

    //Next values are strings
    var remHours = rHourinit < 10 ? "0" + rHourinit.toString() : rHourinit.toString();
    var remMinutes = rMinuteinit < 10 ? "0" + rMinuteinit.toString() : rMinuteinit.toString();
    var remSecs = rSecondinit < 10 ? "0" + rSecondinit.toString() : rSecondinit.toString();

    var finalTimeString = remHours + " : " + remMinutes + " : " + remSecs;

    dayTimerContainer.innerHTML = rDayInit.toString();
    timerContainer.innerHTML = finalTimeString;
}

timer = setInterval(UpdateTimer, 1000);
