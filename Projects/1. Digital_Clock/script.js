function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = "AM";

    if(hours >= 12){
        ampm = "PM";
    }

    // Convert 24-hour to 12-hour format
    if(hours > 12){
        hours = hours - 12;
    }

    if(hours === 0){
        hours = 12; 
    }

    // Add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Insert in HTML
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("ampm").innerText = ampm;
}

// Run every second
setInterval(updateClock, 1000);

// Run instantly once
updateClock();
