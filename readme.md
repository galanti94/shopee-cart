# Carrinho de Compras Shopee

Este projeto simula um carrinho de compras básico da Shopee, permitindo adicionar, remover e exibir itens, além de calcular o total da compra.

## Funcionalidades

- Adicionar itens ao carrinho.
- Remover itens do carrinho.
- Exibir os itens do carrinho com detalhes como nome, quantidade, preço e subtotal.
- Calcular o total da compra.

## Estrutura do Projeto

O projeto é organizado nos seguintes arquivos:

- `index.js`: Arquivo principal que coordena as operações do carrinho de compras.
- `services/cart.js`: Contém as funções para manipular o carrinho, como adicionar, remover e exibir itens.
- `services/item.js`: Contém a função para criar objetos de item.

## Como Executar

1.  **Pré-requisitos:**
    - Node.js instalado na sua máquina.
    - npm (Node Package Manager) instalado.
2.  **Instalação:**
    - Clone este repositório para sua máquina local.
    - Navegue até o diretório do projeto no terminal.
    - Execute o comando `npm install` para instalar as dependências.
3.  **Execução:**
    - Execute o comando `npm run dev` para iniciar a aplicação.
4.  **Saída:**
    - O terminal exibirá as operações do carrinho de compras, como a adição e remoção de itens, e o total da compra.

## Detalhes da Implementação

- **`index.js`:**
    - Importa as funções de `cart.js` e `item.js`.
    - Cria um array `cart` para armazenar os itens do carrinho.
    - Cria itens de exemplo usando a função `createItem`.
    - Adiciona e remove itens do carrinho usando as funções de `cart.js`.
    - Exibe o carrinho e o total da compra usando as funções de `cart.js`.
- **`services/cart.js`:**
    - Implementa as funções `addItem`, `removeItem`, `deleteItem`, `calculateTotal` e `displayCart` para manipular o carrinho.
    - A função `removeItem` decrementa a quantidade do item ou remove o item do carrinho se a quantidade for 1.
    - A função `displayCart` itera sobre os itens do carrinho, e mostra as informações de cada item, e o valor total do carrinho.
- **`services/item.js`:**
    - Implementa a função `createItem` para criar objetos de item com nome, preço, quantidade e subtotal.
    - A função subtotal usa getters e setters para garantir que o valor seja sempre atualizado.

## Possíveis melhorias

- Persistência de dados: usar um banco de dados ou armazenamento local para salvar os itens do carrinho.
- Interface de usuário: criar uma interface gráfica para interagir com o carrinho de compras.
- Validação de entrada: adicionar validações para garantir que os dados inseridos sejam válidos.
- Tratamento de erros: implementar tratamento de erros para lidar com situações inesperadas.
- Adicionar mais informações sobre o produto: como por exemplo ID, descrição, e imagens.

Espero que este README seja útil para entender e executar sua aplicação!