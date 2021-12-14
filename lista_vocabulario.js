var request_voc = new XMLHttpRequest()

// Ahora dibujamos la tabla
const $listado_vocabulario = document.querySelector("#listaVocabulario");

request_voc.open('GET', 'http://localhost:8050/vocabulary/ANTARES', true)
request_voc.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request_voc.status >= 200 && request_voc.status < 400) {

    let $ul = document.createElement("ul");
    for (const [key, value] of Object.entries(data.result[0].ANTARES)) {
      // console.log(key, value);
      let $li = document.createElement("li");
      let $spaw = document.createElement("spaw");
      let $spawTexto = document.createTextNode(key);
      $spaw.classList.add("caret");
      $spaw.appendChild($spawTexto);
      $li.appendChild($spaw);
      $ul.appendChild($li);

      let $ul_in = document.createElement("ul");
      $ul_in.classList.add("nested");
      for (const [key_in, value_in] of Object.entries(value)) {
        let $li_in = document.createElement("li");
        let $li_inTexto = document.createTextNode(key_in + ": " + value_in);
        $li_in.appendChild($li_inTexto);
        $ul_in.appendChild($li_in);
      }
      $li.appendChild($ul_in);
    }
    $listado_vocabulario.appendChild($ul);
  } else {
    console.log('error')
  }
}

request_voc.send()