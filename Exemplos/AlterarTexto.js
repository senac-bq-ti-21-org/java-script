var titulo = document.querySelectorAll(".titulo");
titulo[0].textContent = "Texto alterado 1";
titulo[1].textContent = "Texto alterado 2";
function mostrarAlerta() {
    alert("Alerta");
}
for(var i = 0; i < titulo.length; i++)
    titulo[i].ondblclick = mostrarAlerta;
function mostrarAlerta2(texto) {
    alert(texto);
}
mostrarAlerta2("Repace de argumento");