const abrirBotao = document.getElementById("abrirRegras");
const fecharBotao = document.getElementById("fecharRegras");
const modal = document.getElementById("modal");

abrirBotao.addEventListener("click", () => {
    modal.classList.add("open");
});

fecharBotao.addEventListener("click", () => {
    modal.classList.remove("open");
});