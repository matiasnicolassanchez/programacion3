function generar_informe() {
    const dato1 = document.getElementById("apellidoPadre").value
    const dato2 = document.getElementById("nombre").value
    const dato3 = document.getElementById("apellido").value
    const dato4 = document.getElementById("promedio").value
    const promedio = parseInt(dato4)
    const dato5 = document.getElementById("desemp").checked
    const dato6 = document.querySelector("input[type=radio][name=rel]:checked").value
    

    const doc1 = document.getElementById("padres")
    doc1.innerHTML = "<strong>"+dato1+"</strong>"

    const doc2 = document.getElementById("dato1-alumno")
    const doc3 = document.getElementById("dato2-alumno")
    doc2.innerHTML = "<em><strong>"+dato2+" "+dato3+"</strong></em>"
    doc3.innerHTML = "<em><strong>"+dato2+" "+dato3+"</strong></em>"
    doc2.setAttribute("style", "background-color:yellow ; font-size20px")
    doc3.setAttribute("style", "background-color:yellow ; font-size:20px")

    const doc4 = document.getElementById("prom")
    doc4.innerHTML = "<strong>"+promedio+"</strong>"
    const doc5 = document.getElementById("condicion")
    if(promedio >= 8) {
        doc5.innerHTML = "<b>PROMOCIONAR LA MATERIA</b>"
        }
        else if(promedio >= 6) {
            doc5.innerHTML = "<b>REGLARIZAR LA MATERIA</b>"
            }
            else if(promedio < 6) {
                doc5.innerHTML = "<b>RECRSAR LA MATERIA</b>"
    }

    const doc6 = document.getElementById("desempeño")
    if(dato5 == true) {
        doc6.innerHTML = "<b>SATISFACTORIO</b>"
        }
        else {
            doc6.innerHTML = "<b>REGULAR</b>"
    }

    const doc7 = document.getElementById("relacion")
    doc7.innerHTML = "<strong>"+dato6+"</strong>"
}