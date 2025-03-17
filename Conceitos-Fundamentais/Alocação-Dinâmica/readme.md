# Alocação Dinâmica

A alocação dinâmica de memória é um processo que permite a um programa solicitar e utilizar memória durante sua execução, ao invés de depender exclusivamente da alocação estática feita em tempo de compilação. Isso proporciona flexibilidade, permitindo que o programa ajuste o uso de memória conforme necessário, de acordo com as demandas em tempo real.

## Como Funciona a Alocação Dinâmica

- **Tempo de Execução**: A memória é alocada enquanto o programa está em execução, permitindo que o tamanho e a quantidade de memória utilizada sejam ajustados conforme necessário.
- **Áreas de Memória**: Geralmente, a memória dinâmica é alocada na *heap*, uma região da memória destinada ao armazenamento dinâmico.
- **Funções de Alocação**: Em linguagens como C, funções como `malloc()`, `calloc()`, `realloc()` e `free()` são utilizadas para gerenciar a alocação e liberação de memória dinâmica.

## Vantagens

- **Eficiência de Memória**: Permite que o programa utilize apenas a quantidade de memória necessária em determinado momento, evitando desperdícios.
- **Flexibilidade**: Facilita a criação de estruturas de dados que podem crescer ou diminuir conforme a necessidade, como listas encadeadas e árvores.

## Desvantagens

- **Complexidade**: Requer um gerenciamento cuidadoso para evitar problemas como vazamentos de memória ou acesso a áreas de memória não alocadas.
- **Overhead**: A alocação e liberação frequente de memória podem introduzir overhead, afetando o desempenho do programa.

## Referências  
Para mais detalhes sobre estruturas de dados, confira o artigo da Usp:  
[**Alocação dinâmica de memória | Instituto de Ciências Matemáticas e de Computação da USP**](https://www.ime.usp.br/~pf/algoritmos/aulas/aloca.html)