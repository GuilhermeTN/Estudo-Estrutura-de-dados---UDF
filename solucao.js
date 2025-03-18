class Fila {
    constructor() {
        this.itens = [];
    }
    
    enqueue(elemento) {
        this.itens.push(elemento);
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return 'A fila está vazia';  // Retornar uma string pode dificultar o tratamento de erros
        }
        return this.itens.shift();
    }
    
    front() {
        return this.isEmpty() ? 'A fila está vazia' : this.itens[0];  // Melhor retornar null para indicar ausência de elementos
    }
    
    isEmpty() {
        return this.itens.length === 0;
    }
    
    size() {
        return this.itens.length;
    }
}

// Exemplo de uso
const filaAtendimento = new Fila();

filaAtendimento.enqueue('Cliente 1');
filaAtendimento.enqueue('Cliente 2');
filaAtendimento.enqueue('Cliente 3');

console.log(filaAtendimento.dequeue()); // Cliente 1
console.log(filaAtendimento.front());   // Cliente 2

console.log(filaAtendimento.size());//verifica o tamanho da fila;

console.log(filaAtendimento.isEmpty());  //Verifica se a fila esta vazia.