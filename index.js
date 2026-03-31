const botoes = document.querySelectorAll("#bt_login");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "produtos.html";
  });
});
