function countdown() {
    var seconds = 25 * 60;
    var countdownElement = document.getElementById("countdown");
    var audioElement = new Audio("/audio/timer_over.wav");


    var intervalId = setInterval(function() {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;

        countdownElement.innerHTML = minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;

        if (seconds === 0) {
            clearInterval(intervalId);
            audioElement.play()
        } else {
            seconds--;
        } 
    }, 1000);
}
