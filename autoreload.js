window.setInterval(function() {
    reloadIFrame()
}, 3000);

function reloadIFrame() {
    console.log('reloading..');
    document.getElementById('Monthly').contentWindow.location.reload(true);
    document.getElementById('15_Days').contentWindow.location.reload(true);
    document.getElementById('10_Days').contentWindow.location.reload(true);
    document.getElementById('6_Days').contentWindow.location.reload(true);
    document.getElementById('5_Days').contentWindow.location.reload(true);
    document.getElementById('4_Days').contentWindow.location.reload(true);
    document.getElementById('3_Days').contentWindow.location.reload(true);
    document.getElementById('2_Days').contentWindow.location.reload(true);
    document.getElementById('Daily').contentWindow.location.reload(true);
    document.getElementById('12_Hours').contentWindow.location.reload(true);
    document.getElementById('8_Hours').contentWindow.location.reload(true);
    document.getElementById('6_Hours').contentWindow.location.reload(true);
    document.getElementById('3_Hours').contentWindow.location.reload(true);
    document.getElementById('2_Hours').contentWindow.location.reload(true);
    document.getElementById('Hourly').contentWindow.location.reload(true);
}