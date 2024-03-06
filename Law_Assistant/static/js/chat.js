function showLoader() {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('loadingMessage').style.display = 'block';
    document.querySelectorAll('.initial-text').forEach(function (element) {
        element.style.display = 'none';
    });
    setTimeout(submitForm, 3000);
}

function submitForm() {
    document.getElementById('chatForm').submit();
}

// other js

function new_hour() {
    document.getElementById('chat-window2').style.display = 'block';
    document.getElementById('chat-window').style.display = 'none';
    document.getElementById('loader2').style.display = 'block';
    document.getElementById('loadingMessage2').style.display = 'block';
    setTimeout(after_new_hour, 300000);
}

function after_new_hour() {
    document.getElementById('chat-window2').style.display = 'none';
    document.getElementById('chat-window').style.display = 'block';
}

function checkCurrentTime() {
    var currentTime = new Date();
    var currentMinutes = currentTime.getMinutes();
    var currentHour = currentTime.getHours();
    if ((currentMinutes >= 0 && currentMinutes <= 20) && currentHour % 4 == 0) {
        new_hour();
    } else {
        after_new_hour();
    }
}
setInterval(checkCurrentTime, 1000);

