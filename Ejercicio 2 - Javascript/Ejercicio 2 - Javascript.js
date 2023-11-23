function calc_grupo(){
    var nombre = document.getElementById("nombre").value;
    var year = document.getElementById("año").value;
    var año = parseInt(year);
    var edad = 2023 - año;
    document.getElementById("estudiante").value = nombre;
    document.getElementById("edad").value = edad;
    if (edad < 18) {
        document.getElementById("grupo").value = "A"
        }
        else if(18 <= edad <= 34) {
            document.getElementById("grupo").value = "B"
            }
            else if(34 < edad <= 54) {
                document.getElementById("grupo").value = "C"
                }
                else if(edad > 54) {
                    document.getElementById("grupo").value = "D"
    }
}