/* eslint-disable no-console */
// Binary Trees drawing links
// https://imgbox.com/mC3QHmoN
// https://imgbox.com/99Vko9Jh
// https://imgbox.com/k5pMPPNl

const BinarySearchTree = require('./binary-tree');

//*  3. Create a BST Class

const BST = new BinarySearchTree();

const insertions = [3, 1, 4, 6, 9, 2, 5, 7];

for (let i = 0; i < insertions.length; i++) {
  BST.insert(insertions[i]);
}

const easyQuestion = new BinarySearchTree();

const easy = 'EASYQUESTION';

for (let i = 0; i < easy.length; i++) {
  easyQuestion.insert(easy[i]);
}

// 4. What is this function?
// This function adds all values in the tree.
function tree(t) {
  if(!t) {
    return 0
  }
  return tree(t.left) + t.value + tree(t.right);
}

// 5. Height of BST

height = (t, c = 0) => {
  if(!t) {
    return 0
  }
  let lCount = height(t.left);
  let rCount = height(t.right);
  return 1 + Math.max(lCount, rCount)
}

console.log(height(easyQuestion))