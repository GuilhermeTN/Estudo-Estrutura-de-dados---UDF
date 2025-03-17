# Como as Estruturas de Dados Impactam o Desempenho de um Programa  

## 📌 Introdução  
As estruturas de dados são fundamentais para o desempenho de um programa. Escolher a estrutura certa pode reduzir o tempo de execução e o consumo de memória, tornando o código mais eficiente.  

## ⚡ Impacto das Estruturas de Dados  

Diferentes estruturas de dados afetam a eficiência dos algoritmos de maneiras distintas. A escolha errada pode causar lentidão e desperdício de recursos.  

### 📋 Listas vs. Conjuntos para Busca  
- **Listas (Arrays):** Requerem uma busca linear **O(n)**, tornando-as ineficientes para grandes volumes de dados.  
- **Conjuntos (Sets):** Oferecem buscas mais rápidas, variando entre **O(1)** (no melhor caso) e **O(log n)** (no pior caso), dependendo da implementação.  

### 🗂️ Uso de Objetos vs. Mapas  
- **Objetos ({})** são eficientes para chaves pequenas e acesso direto, mas podem ter sobrecarga de propriedades herdadas.  
- **Maps** têm melhor desempenho para chaves dinâmicas e grandes volumes de dados, pois oferecem busca e inserção otimizadas.  

### 🔄 Fila vs. Pilha para Manipulação de Dados  
- **Filas (Queue)** seguem o princípio **FIFO (First In, First Out)**, sendo úteis para processamento de eventos em ordem, como filas de impressão ou requisições assíncronas.  
- **Pilhas (Stack)** seguem o princípio **LIFO (Last In, First Out)**, ideais para operações recursivas e sistemas de desfazer/refazer ações.  

## Referências  
Para mais detalhes sobre estruturas de dados, confira o artigo da Alura:  
[**Estruturas de Dados: uma introdução | Alura**](https://www.alura.com.br/artigos/estruturas-de-dados)