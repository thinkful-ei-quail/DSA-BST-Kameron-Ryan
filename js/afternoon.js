class BinarySearchTree {
  constructor(key = null) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
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

// Performance O(n * log(n))

console.log(createBalancedBst([1, 2, 3, 5, 7, 9, 11]));

// There is a way to do this without the slicing:

function createBalancedBst2(arr, start = 0, end = arr.length) {
  if (start >= end) {
    return null;
  }

  const middleIndex = Math.floor(end + start);
  const value = arr[middleIndex];
  const node = new BinarySearchTree(value);

  node.left = createBalancedBst(arr, start, middleIndex);
  node.right = createBalancedBst(arr, middleIndex + 1, end);

  return node;
}

// if you have array, you can often use indices to fine tune the traversal
console.log('---------------');
console.log(createBalancedBst2([1, 2, 3, 5, 7, 9, 11]));
