const botao = document.getElementById("bt-voltar");

if (botao) {
  botao.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
  });
} else {
  alert("Deu erro!");
}
