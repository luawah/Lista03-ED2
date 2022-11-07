# Introdução 

Uma das estruturas de dados dinâmicas mais importantes em ciência da computação é a árvore. As árvores são uma maneira ótima de criar dados hierárquicos e colocá-los em ordem. Ou seja, existem elementos pai e filho. Um exemplo de aplicação concreta para uma organização de dados na forma de Árvore é a estrutura de arquivos de um computador.

# Árvores

## Árvore Binária de Busca

Uma árvore é uma árvore binária (BST) se todos os nós tem no máximo dois nós filhos, esse tipo é um caso especial da estrutura de dados em árvore. 

Nesse caso, a subárvore esquerda contém apenas nós menores que aqueles da raiz da subárvore. Em contrapartida, a subárvore direita contém apenas nós maiores do que a raiz da subárvore. 

## Árvore AVL

Uma árvore de busca binária é uma árvore AVL, se ela tem a propriedade de compensação de altura (equilíbrio de altura) na qual as alturas das subárvores esquerda e direita de cada nó diferem no máximo por uma unidade.

## Árvore Rubro Negra 

É uma árvore de busca binária balanceada, onde cada nó tem adicionalmente uma cor,
que tem a propriedade rubro negra se:

- Cada nó é vermelho ou preto.
- A raiz é preta.
- Um nó vermelho tem apenas filhos pretos.
- ponteiro nulo consideramos como nó externo com a cor preta.
- Para cada nó, todos os caminhos do nó para folhas descendentes contém o mesmo número de nós PRETOS

Na existência dessas propriedades, as árvores são então chamadas de árvores Rubro Negras (RBT).


