const botao = document.getElementById("bt-voltar");

if (botao) {
  botao.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "produtos.html";
  });
} else {
  alert("Deu erro!");
}

const buttons = document.querySelectorAll("#bt-avancar");

buttons.forEach(function (button) {
  if (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "contato.html";
    });
  } else {
    alert("Deu erro!");
  }
});
