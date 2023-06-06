let numMovimentos = 0;

function torreDeHanoi(n, origem, auxiliar, destino) {
    if (n === 1) {
        moverDisco(origem, destino);
        numMovimentos++;
    } else {
        torreDeHanoi(n - 1, origem, destino, auxiliar);
        moverDisco(origem, destino);
        numMovimentos++;
        torreDeHanoi(n - 1, auxiliar, origem, destino);
    }
}

function moverDisco(origem, destino) {
    let disco = document.getElementById(origem).lastElementChild;
    let torreDestino = document.getElementById(destino);
    torreDestino.appendChild(disco);
}

// Criar os discos e adicioná-los à torre de origem
function criarDiscos(numDiscos, torreOrigem) {
    let torre = document.getElementById(torreOrigem);
    for (let i = numDiscos; i > 0; i--) {
        let disco = document.createElement("div");
        disco.classList.add("disco", `disco-${i}`);
        torre.appendChild(disco);
    }
}

// Chamar a função para criar os discos na torre de origem
criarDiscos(7, "torre1");

// Chamar a função para iniciar a animação
torreDeHanoi(7, "torre1", "torre2", "torre3");

// Exibir o número mínimo de movimentos
let movimentosElement = document.getElementById("movimentos");
movimentosElement.textContent = `Número mínimo de movimentos: ${Math.pow(2, 7) - 1}`;
