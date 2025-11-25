//your JS code here. If required.
function showDateTime() {
    const now = new Date();
    const formatted = now.toLocaleString('en-US'); 
    // This gives → "2/27/2023, 1:04:47 PM"

    document.getElementById("timer").textContent = formatted;
}

setInterval(showDateTime, 1000);
showDateTime();  // to show immediately on load
