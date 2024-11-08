//Desafio Classificador de nível de Herói

let nome = "Gelson"    // exemplo de nome, pode modificar caso queira.
let nivel = ""    // variável onde vai ser definido o nível do herói.
let NumeroPartidas = 72    // Variável criada para definir o número de partidas jogadas e através dela calcular a quantidade de xp que o herói possui.
let xp = 0   // Variável para armazenar a quantidade de xp que o herói possui.

//calculo do xp do herói. Cada partida jogada vale 100 pontos de xp.
xp = NumeroPartidas * 100 

switch (true) {
    case ( xp >= 1001 && xp <= 2000):
        nivel = "Bronze"
        break
    
    case (xp >= 2001 && xp <= 5000):
        nivel = "Prata";
        break;

    case (xp >= 5001 && xp <= 7000):
        nivel = "Ouro";
        break;

    case (xp >= 7001 && xp <= 8000):
        nivel = "Platina";
        break;

    case (xp >= 8001 && xp <= 9000):
        nivel = "Ascendente";
        break;

    case (xp >= 9001 && xp <= 10000):
        nivel = "Imortal";
        break;

    case (xp > 10000):
        nivel = "Radiante";
        break;

    default:
        nivel = "Ferro";   // Caso o número de partidas não seja definido.

}

console.log("O Herói de nome " + nome + " está no nível " + nivel)