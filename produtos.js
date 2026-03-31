const botao = document.getElementById("bt-avancar");
if (botao) {
  botao.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "sobre.html";
  });
} else {
  alert("Deu erro!");
}

const button = document.getElementById("bt-voltar");
if (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
  });
} else {
  alert("Deu erro!");
}

/* Tentar fazer pelo id # utilizando o querySelectorAll */
