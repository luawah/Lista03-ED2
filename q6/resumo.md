# Introdução 

Uma das estruturas de dados dinâmicas mais importantes em ciência da computação é a árvore. As árvores são uma maneira ótima de criar dados hierárquicos e colocá-los em ordem. Ou seja, existem elementos pai e filho. Um exemplo de aplicação concreta para uma organização de dados na forma de Árvore é a estrutura de arquivos de um computador.

# Árvores

## Árvore Binária de Busca

Uma árvore é uma árvore binária (BST) se todos os nós tem no máximo dois nós filhos, esse tipo é um caso especial da estrutura de dados em árvore. 

Nesse caso, a subárvore esquerda contém apenas nós menores que aqueles da raiz da subárvore. Em contrapartida, a subárvore direita contém apenas nós maiores do que a raiz da subárvore. 

```
class Node {
	constructor(value, right, left) {
		this.value = value;
		this.right = right;
		this.left = left;
	}
}

// Lado direito da árvore
const n3 = new Node(3, null, null);
const n7 = new Node(7, null, null);
const n8 = new Node(8, null, n7);
const n6 = new Node(6, n8, n3);

// Lado esquerdo da árvore

const n14 = new Node(14, null, null);
const n13 = new Node(13, n14, null);
const n17 = new Node(17, null, null);
const n15 = new Node(15, n17, n13);

// raiz
const root = new Node(10, n15, n6);

module.exports = root;

```
<br> Exemplo retirado da segunda questão, da construção de uma árvore binária de busca, com algoritmos de busca recursivos e por iteração <br>
## Árvore AVL

Uma árvore de busca binária é uma árvore AVL, se ela tem a propriedade de compensação de altura (equilíbrio de altura) na qual as alturas das subárvores esquerda e direita de cada nó diferem no máximo por uma unidade.

```

```

## Árvore Rubro Negra 

É uma árvore de busca binária balanceada, onde cada nó tem adicionalmente uma cor,
que tem a propriedade rubro negra se:

- Cada nó é vermelho ou preto.
- A raiz é preta.
- Um nó vermelho tem apenas filhos pretos.
- ponteiro nulo consideramos como nó externo com a cor preta.
- Para cada nó, todos os caminhos do nó para folhas descendentes contém o mesmo número de nós PRETOS

Na existência dessas propriedades, as árvores são então chamadas de árvores Rubro Negras (RBT).

```
void rbtIns(Tree t, Node node) { // Inserindo um nó na árvore
bstIns(t, node); // Inserir como em BST
 node.left = null;
 node.right = null;
 node.color = RED; // o nó inserido é sempre vermelho no início
 // restaurar a propriedade vermelho-preto se necessário
rbtInsFix(t, node);
 }

```
<br> Exemplo de Inserção em uma Árvore Rubro Negra <br>
