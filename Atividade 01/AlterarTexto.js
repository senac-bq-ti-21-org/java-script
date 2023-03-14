var titulo = document.querySelectorAll(".titulo");
titulo[0].textContent = "Texto alterado";
titulo[1].textContent = "Texto alterado 2";
function mostrarAlerta() {
    alert("Mensagem");
}
for(var i = 0; i < titulo.length; i++)
    titulo[i].onclick = mostrarAlerta;