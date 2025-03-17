// Gerando um grande conjunto de números aleatórios
const generateRandomNumbers = (size) => {
    const numbers = new Set();
    while (numbers.size < size) {
        numbers.add(Math.floor(Math.random() * size * 10));
    }
    return Array.from(numbers);
};

const dataSize = 1000000;
const numbersArray = generateRandomNumbers(dataSize);
const numbersSet = new Set(numbersArray);
const searchValue = numbersArray[Math.floor(Math.random() * dataSize)]; // Valor existente no conjunto

// Código ineficiente: busca em um array (O(n))
console.time("Busca no Array");
numbersArray.includes(searchValue);
console.timeEnd("Busca no Array");

// Código eficiente: busca em um Set (O(1))
console.time("Busca no Set");
numbersSet.has(searchValue);
console.timeEnd("Busca no Set");

// Código mais eficiente: uso de Map para armazenar dados associados
const numbersMap = new Map(numbersArray.map(num => [num, true]));
console.time("Busca no Map");
numbersMap.has(searchValue);
console.timeEnd("Busca no Map");