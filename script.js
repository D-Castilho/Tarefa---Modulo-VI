let numeroSecreto = gerarNumeroAleatorio();
let contadorTentativas = 0;
const maxTentativas = 10;

// Seleção dos elementos da interface
const input = document.getElementById("valor");
const resultado = document.getElementById("mensagemResultado");
const tentativasEl = document.getElementById("tentivasRestantes");
const btnChutar = document.getElementById("btnChutar");

// Função para gerar número aleatório entre 1 e 100
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Botão Chutar
btnChutar.addEventListener("click", function () {
    const chute = Number(input.value);

    // Validação de entrada
    if (!chute || chute < 1 || chute > 100) {
        resultado.textContent = "RESULTADO: INSIRA UM NÚMERO!";
        return;
    }

    contadorTentativas++;

    if (chute === numeroSecreto) {
        resultado.textContent = "RESULTADO: CORRETO!";
        finalizarJogo();
    } else {
        resultado.textContent = "RESULTADO: INCORRETO!";
        tentativasEl.textContent = `TENTATIVAS: ${contadorTentativas} / ${maxTentativas}`;

        if (contadorTentativas >= maxTentativas) {
            resultado.textContent = `RESULTADO: PERDEU! O NÚMERO ERA ${numeroSecreto}`;
            finalizarJogo();
        }
    }

    input.value = "";
    input.focus();
});

// Função de Finalizar e Reinicialização do jogo depois de 5 segundos
function finalizarJogo() {
    setTimeout(() => {
        numeroSecreto = gerarNumeroAleatorio();
        contadorTentativas = 0;
        resultado.textContent = "RESULTADO:";
        tentativasEl.textContent = "TENTATIVAS:";
    }, 5000);
}

// Botõa das Regras
const abrirBotao = document.getElementById("abrirRegras");
const fecharBotao = document.getElementById("fecharRegras");
const modal = document.getElementById("modal");

abrirBotao.addEventListener("click", () => {
    modal.classList.add("open");
});

fecharBotao.addEventListener("click", () => {
    modal.classList.remove("open");
});