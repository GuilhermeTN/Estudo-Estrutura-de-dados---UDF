# Variáveis e Tipos de Dados

## O que são Variáveis?

Variáveis são áreas de memória que recebem nomes e podem armazenar valores durante a execução de um programa. Elas servem como espaços para armazenar informações temporárias enquanto o programa está rodando. A variável pode ser vista como um "recipiente" onde você guarda dados que podem ser alterados conforme necessário.

## O que são Tipos de Dados?

Tipos de dados referem-se à categoria ou ao formato dos dados armazenados em uma variável. Cada tipo de dado define o que pode ser armazenado (números, caracteres, etc.), como esses dados são manipulados e quanto de memória eles vão ocupar. Exemplos de tipos de dados incluem:

### Tipos Comuns:

- **Inteiros** (`int`): Números inteiros, como 1, -42.
- **Ponto Flutuante** (`float`): Números com casas decimais, como 3.14 ou -0.5.
- **Caracteres** (`char`): Letras ou símbolos individuais.
- **Booleanos** (`bool`): Representam valores de verdadeiro (True) ou falso (False).

## Relação com a Alocação de Memória

A alocação de memória está diretamente ligada tanto às variáveis quanto aos tipos de dados, pois:

### Tamanho da Variável

O tipo de dado de uma variável determina quanto espaço de memória será reservado para armazená-la. Por exemplo:

- Uma variável do tipo `int` pode ocupar 4 bytes.
- Uma variável do tipo `char` pode ocupar apenas 1 byte.

### Alocação Estática ou Dinâmica

Variáveis podem ser alocadas de forma:

- **Estática**: Durante a compilação.
- **Dinâmica**: Durante a execução do programa.

Em ambas as abordagens, o tipo de dado da variável determinará quanto espaço de memória será necessário para armazenar o valor da variável.

### Processo de Alocação de Memória

Quando o programa é executado, o sistema operacional aloca memória para armazenar os valores das variáveis de acordo com seus tipos. Essa memória é identificada pelo endereço de memória, e o valor da variável é armazenado nesse endereço.

Por exemplo, se uma variável `x` for declarada como `int` e a máquina alocar 4 bytes para ela, o valor de `x` ocupará exatamente esses 4 bytes, independentemente de qual valor ela contenha.

## Referências  
Para mais detalhes sobre estruturas de dados, confira o artigo da Brasil Code:  
[**Estruturas de Dados: Entenda o Conceito e os Principais Tipos | Brasil Code**](https://www.brasilcode.com.br/estruturas-de-dados-entenda-o-conceito-e-os-principais-tipos/)
