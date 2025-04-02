// Pegando elementos do HTML
const contador = document.getElementById("contador");
const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");
const btnResetar = document.getElementById("resetar");

// Estado inicial do contador
let numero = 0;

// Função para atualizar a interface
function atualizarContador() {
    contador.textContent = numero;

    // Aplicando classes para mudar cor do número
    if (numero > 0) {
        contador.className = "positivo";
    } else if (numero < 0) {
        contador.className = "negativo";
    } else {
        contador.className = "neutro";
    }
}

// Eventos dos botões
btnIncrementar.addEventListener("click", function () {
    numero++;
    atualizarContador();
});

btnDecrementar.addEventListener("click", function () {
    numero--;
    atualizarContador();
});

btnResetar.addEventListener("click", function () {
    numero = 0;
    atualizarContador();
});

// Atualiza a interface ao carregar a página
atualizarContador();
