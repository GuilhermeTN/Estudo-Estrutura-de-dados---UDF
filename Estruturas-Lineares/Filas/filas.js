let fila = [];

// Inserir elementos na fila
fila.push('A'); // fila: ['A']
fila.push('B'); // fila: ['A', 'B']
fila.push('C'); // fila: ['A', 'B', 'C']

// Remover o primeiro elemento
let primeiro = fila.shift(); // primeiro: 'A', fila: ['B', 'C']

// Obter o elemento no início da fila
let inicio = fila[0]; // inicio: 'B'
