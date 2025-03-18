# Sistema de Atendimento com Fila

## Problema

Em um ambiente de atendimento ao cliente, como um banco ou hospital, os clientes chegam em ordem e devem ser atendidos na sequência em que chegaram. Para garantir um atendimento justo e eficiente, é necessário gerenciar a ordem de chegada e atendimento de forma organizada.

## Solução

Para resolver esse problema, utilizamos a estrutura de dados **Fila**, que segue o princípio FIFO (First In, First Out), ou seja, o primeiro cliente a entrar na fila será o primeiro a ser atendido.

## Como funciona?

- **Cada novo cliente entra no final da fila.**
- **O atendimento sempre ocorre no início da fila, removendo o cliente atendido.**
- **Podemos verificar quem é o próximo a ser atendido sem removê-lo da fila.**

## Estrutura de Dados Utilizada

Utilizaremos uma **Fila** implementada em JavaScript, onde os clientes serão armazenados em um array, e utilizaremos métodos nativos como:

- **enqueue(elemento):** Adiciona um cliente ao final da fila.
- **dequeue():** Remove e retorna o cliente do início da fila.
- **front():** Retorna o próximo cliente a ser atendido sem removê-lo.

## Arquivo de Código

A implementação da solução pode ser encontrada no arquivo `solucao.js`.
