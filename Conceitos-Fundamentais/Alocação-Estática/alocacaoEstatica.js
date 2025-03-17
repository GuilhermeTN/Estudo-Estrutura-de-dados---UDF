//Escolhi a linguagem JavaScript para fazer todo esse projeto pois é a linguagem que ja possuo conhecimento, porem chegamos em um impasse, pois o Javascript e uma linguagem dinâmica por natureza.
//Por esse motivo vou tentar fazer uma simulação de uma alocação estatica.


// Array de tamanho fixo (não muda durante a execução)
const numeros = [10, 20, 30, 40, 50];  // Tamanho fixo

// Variáveis de valor fixo
const nome = "João";  // Nome fixo
const idade = 30;     // Idade fixa

// Função que não altera o conteúdo da variável
function mostrarDados() {
  console.log("Nome:", nome);
  console.log("Idade:", idade);
  console.log("Números:", numeros);
}

mostrarDados();