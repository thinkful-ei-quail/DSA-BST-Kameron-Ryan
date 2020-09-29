/* eslint-disable eqeqeq */
/* eslint-disable no-console */
// Binary Trees drawing links
// https://imgbox.com/mC3QHmoN
// https://imgbox.com/99Vko9Jh
// https://imgbox.com/k5pMPPNl

const BinarySearchTree = require('./binary-tree');

//*  3. Create a BST Class

const BST = new BinarySearchTree();

const insertions = [1, 2, 3, 4, 5];
// const insertions = [3, 1, 4, 6, 9, 2, 5, 7];
// const insertions = [1, 2, 3, 4, 5, 6, 7, 8, 200, 199, 198, 197, 196, 195, 194];
// const insertions = [8, 3, 6, 13, 4, 7, 10, 14, 1];
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
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

//* 5. Height of BST

const height = (t, c = 0) => {
  if (!t) {
    return 0;
  }
  let lCount = height(t.left);
  let rCount = height(t.right);
  return 1 + Math.max(lCount, rCount);
};

// console.log(height(easyQuestion));

//* 6. Is it a BST?

function isBST(t) {
  if (!t) {
    return false;
  }

  let l = null;
  let r = null;

  if (t.left) {
    l = isBST(t.left);
  }
  if (t.right) {
    r = isBST(t.right);
  }

  if (t.left && t.right) {
    if (l.key > r.key) {
      return false;
    }
    return true;
  }
  return true;
}

function isBST2(t, min = -Infinity, max = Infinity) {
  if (!t) return 'empty tree';
  if (t.key < min || t.key > max) return false;
  if (t.left && !isBST2(t.left, min, t.key)) return false;
  if (t.right && !isBST2(t.right, t.key, max)) return false;
  return true;
}

const isBST3 = (t, min = -Infinity, max = Infinity) => {
  if (t == null) return true;

  if (t.key < min || t.key > max) return false;
  return isBST3(t.left, min, t.key) && isBST3(t.right, t.key, max);
};

////////
///////

console.log(isBST3(BST));

const sortedBST = new BinarySearchTree();

const sorts = [1, 2, 3, 4, 5, 6, 7, 8, 200, 199, 198, 197, 196, 195, 194];
const socks = [3, 5, 4, 6, 1, 0, 2];

for (let i = 0; i < socks.length; i++) {
  sortedBST.insert(socks[i]);
}

// console.log(isBST3(sortedBST));

// console.log(sortedBST);

// * 7 3rd largest Node -- Not solved yet

function findThird(t) {
  let currentNode = t;
  while (currentNode.right !== null) {
    currentNode = currentNode.right;
    console.log('currentNode = ', currentNode.key);
  }
  let parent = currentNode.parent;
  console.log('parent key ', parent.key);
  if (currentNode.left !== null || parent.left !== null) {
    console.log('line 121: ', parent.key);
    return parent.key;
  }
  if (parent.left !== null) {
    let newNode = parent.left;
    console.log('new node 126 - ', newNode.key);
    console.log('127 - ', newNode.right);
    if (newNode.right === null) {
      newNode = newNode.right;
      console.log('129 - ', newNode);
    }
    console.log(newNode);
    return newNode.key;
  }
}

console.log('---------');
console.log(thirdLargest(BST)); // 6
// console.log(findThird(socks)); // 8 ???

// * 8. Balanced BST
// Write an algorithm that checks if a BST is balanced
//(i.e., a tree where no 2 leaves differ in distance from the root by more than 1).

function isBalanced(t) {
  let leftHeight = 0;
  let rightHeight = 0;

  if (t.left !== null) {
    leftHeight = height(t.left);
    if (t.left) {
      isBalanced(t.left);
    }
  }
  if (t.right !== null) {
    rightHeight = height(t.right);
    if (t.right) {
      isBalanced(t.right);
    }
  }
  let diff = Math.abs(leftHeight - rightHeight);

  return diff <= 1 ? true : false;
}

function createBalancedBst(arr) {
  if (!arr.length) {
    return null;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const value = arr[middleIndex];
  const node = new BinarySearchTree(value);

  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex + 1);

  node.left = createBalancedBst(left);
  node.right = createBalancedBst(right);

  return node;
}

const tree100 = createBalancedBst([1, 2, 3, 4, 5]);

console.log(isBalanced(tree100));
console.log(isBalanced(BST));

// * 9 Are they the same BSTs?

function sameBSTs(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let one = arr1.sort();
  let two = arr2.sort();

  for (let i = 0; i < one.length; i++) {
    if (one[i] !== two[i]) {
      return false;
    }
  }
  return true;
}
console.log('--------');

console.log(sameBSTs([5, 3, 7, 1, 2], [5, 1, 2, 3, 7]));
