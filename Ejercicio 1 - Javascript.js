function calcular() {
    var cantdias = document.getElementById("dias");
    var impbase = document.getElementById("base");
    var impdiario = document.getElementById("diario");
    var dias = parseInt(cantdias.value);
    var base = parseInt(impbase.value);
    var diario = parseInt(impdiario.value);
    var total = base + (dias*diario);
    alert(total);
    document.getElementById("total").value = total;
}

var boton = document.getElementById("boton");
boton.addEventListener("click", calcular());
