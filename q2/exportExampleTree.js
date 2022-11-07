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
