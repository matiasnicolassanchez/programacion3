function modificar() {
    const doc = document.getElementById("cabecera")
    doc.setAttribute("id", "id-modificado")
    doc.setAttribute("href", "https://www.google.com")
    doc.innerHTML = "<strong>NUEVO TITULO</strong>"
    doc.setAttribute("style", "background-color:yellow")

    const doc2 = document.getElementsByClassName("elemB")[0]
    doc2.setAttribute("style", "fontFamily:Lucida Sans ; font-size:10px")

    const doc3 = document.getElementById("linea1")
    doc3.innerHTML = "<span>ADECUADO PARA TODOS LOS QUE TENGAN INTERÉS</span>"
    doc3.setAttribute("style", "color:green")

    const doc4 = document.getElementsByClassName("elemC")[0]
    doc4.outerHTML = "<p>TERCER PARRAFO</p>"

    const newnodo = document.createElement("article")
    newnodo.innerHTML = "<p>PARRAFO FINAL</p>"
    const doc5 = document.querySelector("#seccion3")
    doc5.appendChild(newnodo)
}   