const botao = document.getElementById("bt-avancar");
if (botao) {
  botao.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "sobre.html";
  });
} else {
  alert("Deu erro!");
}
