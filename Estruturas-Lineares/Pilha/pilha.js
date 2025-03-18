let pilha = [];

// Inserir elementos na pilha
pilha.push('X'); // pilha: ['X']
pilha.push('Y'); // pilha: ['X', 'Y']
pilha.push('Z'); // pilha: ['X', 'Y', 'Z']

// Remover o elemento do topo
let topo = pilha.pop(); // topo: 'Z', pilha: ['X', 'Y']

// Obter o elemento no topo sem remover
let elementoTopo = pilha[pilha.length - 1]; // elementoTopo: 'Y'
