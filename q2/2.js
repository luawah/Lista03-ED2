const root = require("./exportExampleTree");

const returnNodeWithValueFromBST = (value, node) => {
	if (!node) return null;
	if (node.value === value) return node;
	if (node.value > value) return returnNodeWithValueFromBST(value, node.left);
	if (node.value < value) return returnNodeWithValueFromBST(value, node.right);
};

// Exemplos
console.log(returnNodeWithValueFromBST(7, root));
console.log(returnNodeWithValueFromBST(14, root));
// Exemplo que não acha
console.log(returnNodeWithValueFromBST(26, root));
