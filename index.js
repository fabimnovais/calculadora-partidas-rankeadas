// Função que calcula o saldo e determina o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias (vitórias - derrotas)
    let saldoVitorias = vitorias - derrotas;
    
    // Determina o nível baseado no número de vitórias
    let nivel;
    
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }
    
    // Retorna o saldo e o nível como um objeto
    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
let vitorias = 55; // Alterar conforme necessário
let derrotas = 30; // Alterar conforme necessário

// Chama a função e armazena o resultado
let resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem final com o saldo e nível
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
