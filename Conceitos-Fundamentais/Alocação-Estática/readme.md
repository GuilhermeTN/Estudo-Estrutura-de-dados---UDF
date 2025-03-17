# Alocação Estática

A alocação estática é um método de gerenciamento de memória no qual o espaço necessário para armazenar variáveis é reservado durante a fase de compilação, antes da execução do programa. Uma vez alocada, a memória permanece fixa durante toda a execução do programa, não podendo ser alterada. Esse tipo de alocação é comum para variáveis globais, variáveis estáticas e arrays com tamanho fixo.

## Características da Alocação Estática

- **Tempo de Alocação**: O espaço de memória é reservado em tempo de compilação.
- **Tamanho Fixo**: O tamanho da memória alocada é fixo e determinado previamente, não podendo ser alterado durante a execução do programa.
- **Localização na Memória**: Geralmente, as variáveis alocadas estaticamente são armazenadas na área de dados do programa.
- **Exemplos**: Declarações de variáveis globais, variáveis estáticas e arrays com tamanho fixo.

## Vantagens

- **Desempenho**: Como a alocação é feita em tempo de compilação, o acesso às variáveis é rápido durante a execução.
- **Simplicidade**: Facilidade de implementação e gerenciamento, já que o tamanho e a quantidade de memória são conhecidos antecipadamente.

## Desvantagens

- **Flexibilidade Limitada**: Não permite ajustar o tamanho da memória alocada durante a execução do programa.
- **Uso Ineficiente de Memória**: Se a memória alocada não for totalmente utilizada, pode haver desperdício de recursos.

## Referências  
Para mais detalhes sobre estruturas de dados, confira o artigo da WikiPédia:  
[**Alocação de memória | Wikipédia**](https://pt.wikipedia.org/wiki/Aloca%C3%A7%C3%A3o_de_mem%C3%B3ria)
