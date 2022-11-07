const root = require("../q2/exportExampleTree");

const insertValueInBST = (value, root) => {
	let curr = root;
	while (curr !== null) {
		if (curr.value < value) {
			if (curr.right) {
				curr = curr.right;
				continue;
			} else {
				console.log("inseriu na direita do", curr.value);
				return (curr.right = {
					value,
					right: null,
					left: null,
				});
			}
		}

		if (curr.value > value) {
			if (curr.left) {
				curr = curr.left;
				continue;
			} else {
				console.log("inseriu na esquerda do", curr.value);
				return (curr.left = {
					value,
					right: null,
					left: null,
				});
			}
		}
	}
};

insertValueInBST(1, root); // precisa printar "inseriu na esquerda do 3"
insertValueInBST(45, root); // precisa printar "inseriu na direita do 17"
