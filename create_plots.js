var request_platform_aviability = new XMLHttpRequest()
var request_parameter_pie_H = new XMLHttpRequest()
var request_parameter_pie_2H = new XMLHttpRequest()
var request_parameter_pie_3H = new XMLHttpRequest()
var request_parameter_pie_6H = new XMLHttpRequest()
var request_parameter_pie_8H = new XMLHttpRequest()
var request_parameter_pie_12H = new XMLHttpRequest()
var request_parameter_pie_D = new XMLHttpRequest()
var request_parameter_pie_2D = new XMLHttpRequest()
var request_parameter_pie_3D = new XMLHttpRequest()
var request_parameter_pie_4D = new XMLHttpRequest()
var request_parameter_pie_5D = new XMLHttpRequest()
var request_parameter_pie_6D = new XMLHttpRequest()
var request_parameter_pie_10D = new XMLHttpRequest()
var request_parameter_pie_15D = new XMLHttpRequest()
var request_parameter_pie_M = new XMLHttpRequest()
var request_map = new XMLHttpRequest()

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

request_parameter_pie_4D.open('GET', 'http://localhost:8050/fig/parameter_pie/4D?platform_code=ANTARES', true)
request_parameter_pie_4D.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie 4D');
    } else {
        console.log('error in call parameter_pie 5D')
    }
}
request_parameter_pie_4D.send()

request_parameter_pie_3D.open('GET', 'http://localhost:8050/fig/parameter_pie/3D?platform_code=ANTARES', true)
request_parameter_pie_3D.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie 3D');
    } else {
        console.log('error in call parameter_pie 3D')
    }
}
request_parameter_pie_3D.send()

request_parameter_pie_2D.open('GET', 'http://localhost:8050/fig/parameter_pie/2D?platform_code=ANTARES', true)
request_parameter_pie_2D.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie 2D');
    } else {
        console.log('error in call parameter_pie 2D')
    }
}
request_parameter_pie_2D.send()

request_parameter_pie_D.open('GET', 'http://localhost:8050/fig/parameter_pie/D?platform_code=ANTARES', true)
request_parameter_pie_D.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie D');
    } else {
        console.log('error in call parameter_pie D')
    }
}
request_parameter_pie_D.send()

request_parameter_pie_12H.open('GET', 'http://localhost:8050/fig/parameter_pie/12H?platform_code=ANTARES', true)
request_parameter_pie_12H.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie 12H');
    } else {
        console.log('error in call parameter_pie 12H')
    }
}
request_parameter_pie_12H.send()

request_parameter_pie_8H.open('GET', 'http://localhost:8050/fig/parameter_pie/8H?platform_code=ANTARES', true)
request_parameter_pie_8H.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie 8H');
    } else {
        console.log('error in call parameter_pie 8H')
    }
}
request_parameter_pie_8H.send()

request_parameter_pie_6H.open('GET', 'http://localhost:8050/fig/parameter_pie/6H?platform_code=ANTARES', true)
request_parameter_pie_6H.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie 6H');
    } else {
        console.log('error in call parameter_pie 6H')
    }
}
request_parameter_pie_6H.send()

request_parameter_pie_3H.open('GET', 'http://localhost:8050/fig/parameter_pie/3H?platform_code=ANTARES', true)
request_parameter_pie_3H.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie 3H');
    } else {
        console.log('error in call parameter_pie 3H')
    }
}
request_parameter_pie_3H.send()

request_parameter_pie_2H.open('GET', 'http://localhost:8050/fig/parameter_pie/2H?platform_code=ANTARES', true)
request_parameter_pie_2H.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie 2H');
    } else {
        console.log('error in call parameter_pie 2H')
    }
}
request_parameter_pie_2H.send()

request_parameter_pie_H.open('GET', 'http://localhost:8050/fig/parameter_pie/H?platform_code=ANTARES', true)
request_parameter_pie_H.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie H');
    } else {
        console.log('error in call parameter_pie H')
    }
}
request_parameter_pie_H.send()

request_parameter_pie_R.open('GET', 'http://localhost:8050/fig/parameter_pie/R?platform_code=ANTARES', true)
request_parameter_pie_R.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call parameter_pie R');
    } else {
        console.log('error in call parameter_pie R')
    }
}
request_parameter_pie_R.send()

request_map.open(
    'GET',
    'http://localhost:8050/fig/map?search=%7B%22platform_code%22%3A%22ANTARES%22%7D', true)
request_map.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        console.log('call Map');
    } else {
        console.log('error in call Map')
    }
}
request_map.send()
