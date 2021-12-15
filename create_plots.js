var request_plots = new XMLHttpRequest()
request_plots.open('GET', 'http://localhost:8050/fig/platform_availability/ANTARES', true)
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call platform_aviability');
    } else {
        console.log('error in call platform_aviability')
    }
}
request_plots.send()