var request_platform_aviability = new XMLHttpRequest()
var request_parameter_pie_5D = new XMLHttpRequest()
var request_parameter_pie_6D = new XMLHttpRequest()
var request_parameter_pie_10D = new XMLHttpRequest()
var request_parameter_pie_15D = new XMLHttpRequest()
var request_parameter_pie_M = new XMLHttpRequest()

request_platform_aviability.open('GET', 'http://localhost:8050/fig/platform_availability/ANTARES', true)
request_platform_aviability.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call platform_aviability');
    } else {
        console.log('error in call platform_aviability')
    }
}
request_platform_aviability.send()

request_parameter_pie_M.open('GET', 'http://localhost:8050/fig/parameter_pie/M?platform_code=ANTARES', true)
request_parameter_pie_M.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie M');
    } else {
        console.log('error in call parameter_pie M')
    }
}
request_parameter_pie_M.send()

request_parameter_pie_15D.open('GET', 'http://localhost:8050/fig/parameter_pie/15D?platform_code=ANTARES', true)
request_parameter_pie_15D.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie 15D');
    } else {
        console.log('error in call parameter_pie 15D')
    }
}
request_parameter_pie_15D.send()

request_parameter_pie_10D.open('GET', 'http://localhost:8050/fig/parameter_pie/10D?platform_code=ANTARES', true)
request_parameter_pie_10D.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie 10D');
    } else {
        console.log('error in call parameter_pie 10D')
    }
}
request_parameter_pie_10D.send()

request_parameter_pie_6D.open('GET', 'http://localhost:8050/fig/parameter_pie/6D?platform_code=ANTARES', true)
request_parameter_pie_6D.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie 6D');
    } else {
        console.log('error in call parameter_pie 6D')
    }
}
request_parameter_pie_6D.send()

request_parameter_pie_5D.open('GET', 'http://localhost:8050/fig/parameter_pie/5D?platform_code=ANTARES', true)
request_parameter_pie_5D.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie 5D');
    } else {
        console.log('error in call parameter_pie 5D')
    }
}
request_parameter_pie_5D.send()