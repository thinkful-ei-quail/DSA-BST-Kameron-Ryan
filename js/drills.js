/* eslint-disable no-console */
// Binary Trees drawing links
// https://imgbox.com/mC3QHmoN
// https://imgbox.com/99Vko9Jh
// https://imgbox.com/k5pMPPNl

const BinarySearchTree = require('./binary-tree');

//*  3. Create a BST Class

const BST = new BinarySearchTree();
//console.log(BST);

const insertions = [3, 1, 4, 6, 9, 2, 5, 7];

for (let i = 0; i < insertions.length; i++) {
  BST.insert(insertions[i]);
}

// console.log(BST.left);

const easyQuestion = new BinarySearchTree();

const easy = 'EASYQUESTION';

for (let i = 0; i < easy.length; i++) {
  easyQuestion.insert(easy[i]);
}

console.log(easyQuestion);
