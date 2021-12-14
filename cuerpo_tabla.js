/**
 * Dibujar una tabla de HTML
 * usando JavaScript puro
 * 
 * 
 * @see https://parzibyte.me/blog
 */

 var request = new XMLHttpRequest()

// Ahora dibujamos la tabla
const $cuerpoTabla = document.querySelector("#cuerpoTabla");

request.open('GET', 'http://DESKTOP-OMHH7GT:5000/metadata/ANTARES', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    for (const [key, value] of Object.entries(data.result[0].ANTARES)) {
      // console.log(key, value);
      // Crear un <tr>
      const $tr = document.createElement("tr");
      // Creamos el <td> de nombre y lo adjuntamos a tr
      let $tdKey = document.createElement("td");
      $tdKey.textContent = key; // el textContent del td es el key
      $tr.appendChild($tdKey);
      // Creamos el <td> de nombre y lo adjuntamos a tr
      let $tdValue = document.createElement("td");
      $tdValue.textContent = value; // el textContent del td es el value
      $tr.appendChild($tdValue);
      // Finalmente agregamos el <tr> al cuerpo de la tabla
      $cuerpoTabla.appendChild($tr);
      // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
    }
  } else {
    console.log('error')
  }
}

request.send()
