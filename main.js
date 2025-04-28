

function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = timeString;
}
setInterval(updateClock, 1000);

updateClock();