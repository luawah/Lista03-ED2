# Introdução

Uma das estruturas de dados dinâmicas mais importantes em ciência da computação é a árvore. As árvores são uma maneira ótima de criar dados hierárquicos e colocá-los em ordem. Ou seja, existem elementos pai e filho. Um exemplo de aplicação concreta para uma organização de dados na forma de Árvore é a estrutura de arquivos de um computador.

## Árvores

### Árvore Binária de Busca (Binary Search Tree)

Uma árvore é uma árvore binária de busca (BST) se todos os nós tem no máximo dois nós filhos e, para cada nó, a subárvore direita possui nós maiores do que o nó atual, enquanto a esquerda possui nós menores.

Abaixo, temos um exemplo retirado da segunda questão, da construção de uma árvore binária de busca, seguido de um algoritmo de busca recursivo:

```javascript
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
const returnNodeWithValueFromBST = (value, node) => {
	if (!node) return null;
	if (node.value === value) return node;
	if (node.value > value) return returnNodeWithValueFromBST(value, node.left);
	if (node.value < value) return returnNodeWithValueFromBST(value, node.right);
};
module.exports = root;
```

Uma árvore binária de busca possui complexidade O(n) para busca, visto que, caso seja feita uma inserção de dados ordenados de maneira crescente, ela será, efetivamente, uma lista encadeada simples. Dessa forma, para encontrarmos um elemento nela, no pior caso, ainda precisaremos iterar sobre todos os elementos dela. A fim de evitar esse comportamento, devemos pensar em estratégias de balanceamento para as BST.

### Árvore AVL

A árvore AVL tem como estratégia de balanceamento a propriedade AVL, na qual, deseja-se que o módulo do fator de equilíbrio de cada nó seja, no máximo, 1. O fator de equilíbro é calculado pela diferença entre as alturas das subárvores esquerda e direita.

Caso encontremos algum nó desequilibrado na inserção (inserção normal em uma BST), realizam-se operações de rotação à fim de corrigir o desequilíbrio.

As operações de rotação dos nós podem ser:

1. Simples para direita (corrige desequilíbrio -2 no nó original com filho esquerdo tendo fator de equilíbro -1);
2. Simples para esquerda (corrige desequilíbrio +2 no nó original com filho direito tendo fator de equilíbro +1);
3. Dupla para direita (corrige desequilíbrio -2 no nó original com filho esquerdo tendo fator de equilíbro +1);
4. Dupla para esquerda (corrige desequilíbrio +2 no nó original com filho direito tendo fator de equilíbro -1);

Abaixo, temos exemplos de código para a rotação simples de um nó para direita:

```javascript
const rotateRight = (node) =>{
	Node leftChild = node.left; // armazenando a referência para o filho esquerdo.
	node.left = leftChild.right; // atualizando aquela referência para receber o filho dela.
	leftChild.right = node; // passando o nó atual para ser o novo filho direito do nó armazenado.
	// Nesse ponto, as referências foram acertadas, agora devemos chamar métodos auxiliares para atualizar as alturas dos nós utilizados como filhos direito e esquerdo.
	updateHeight(node); // Implementação ocultada para simplificação do exemplo. Esse método precisa encontrar a altura do nó passado como argumento, percorrendo a seus filhos até chegar em uma raíz.
	updateHeight(leftChild);
	return leftChild; // retorna o novo nó que ocupa a posição do nó original antes da rotação.
}
```

### Árvore Rubro Negra (Red Black Tree)

Uma outra forma de árvore autobalanceável é a árvore 2-3. Ela é uma árvore especial, em que seus nós podem carregar 1 valor e ter dois filhos (nó padrão de uma árvore binária) ou ter 2 valores e 3 filhos. Entretanto, apesar da árvore 2-3 ser autobalanceável, ela possui regras complexas de serem implementadas.

Uma forma de implementarmos uma árvore com um mecanismo de balanceamento similar à árvore 2-3 é através da árvore rubro negra, onde cada nó carrega um atributo de cor (rubro ou negra) que corresponde ao tipo de ligação que ele tem com seu nó pai. A árvore rubro negra, à rigor, é uma árvore binária, porém, seus nós com ligações vermelhas são análogos aos nós da árvore 2-3 que guardam 2 valores e possuem 3 filhos. Com essa alteração de lógica, podemos ter uma implementação mais simples.

Para ser considerada rubro negra, a árvore deve:

1. Ter todos os nós com ligações vermelhas apontando para a esquerda.

2. Ter todos os caminhos da raíz para uma folha da árvore tendo o mesmo número de ligações negras (propriedade conhecida como 'equilíbrio negro perfeito') (OBS: Ligações de nós que apontam para _null_ são considerados negros).

3. Ter nenhum nó com duas ligações vermelhas.

Na existência dessas propriedades, as árvores são então chamadas de árvores Rubro Negras (RBT).

Abaixo, temos um exeplo de um construtor de um nó de uma árvore rubro negra:

```Javascript
// Construção de um nó de árvore rubro negra (Similar à um nó normal de árvore binária, porém com atributo de cor)
class Node {
	constructor(value, right, left, color) {
		this.value = value;
		this.right = right;
		this.left = left;
		this.color = color
	}
}
```

Assim como na árvore AVL, as operações de busca e inserção são similares às de uma árvore binária comum. Entretanto, agora devemos nos preocupar (nos casos de inserção e deleção) em manter as propriedades da RBT verdadeiras. Para isso, assim como tínhamos operações elementares de balanceamento na árvore AVL (rotações simples e duplas), aqui nós teremos:

1. Rotação para esquerda (Corrige o caso em que o nó atual possua filho direito através de ligação vermelha)
2. Rotação para direita (Faz com que o filho esquerdo do nó atual (com ligação vermelha) vire temporariamente para a direita)
3. Troca de cores de um 4-nó (Corrige o caso em que o nó atual possui os dois filhos com ligações vermelhas. Faz com que o pai do nó atual passe a ter a ligação vermelha)

Abaixo, temos um exemplo de código para o caso 3 descrito acima:

```Javascript
const flipColors = (node) =>{
    node.color = "red"; // lembrando, esse atributo diz respeito à ligação com o nó pai.
    // indica que seus filhos estão ligados através de ligação negra.
    node.right.color = "black";
    node.left.color = "black";
}
```
