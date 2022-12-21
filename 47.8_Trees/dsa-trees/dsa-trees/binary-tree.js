/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(tree = this.root) {
    if (tree === null) return 0;

    //Leaf Node, height = 1 
    if (tree.left === null & tree.right === null) return 1;

    //If left is null, traverse for right
    if (tree.left === null) {
      return this.minDepth(tree.right) + 1;
    }
    if (tree.right === null) {
      return this.minDepth(tree.left) + 1;
    }

    let min = 1 + Math.min(this.minDepth(tree.left), this.minDepth(tree.right))
    return min;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(tree = this.root) {
    if (tree === null) return 0;

    //Leaf Node, height = 1 
    if (tree.left === null & tree.right === null) return 1;

    //If left is null, traverse for right
    if (tree.left === null) {
      return this.maxDepth(tree.right) + 1;
    }
    if (tree.right === null) {
      return this.maxDepth(tree.left) + 1;
    }
    let min = 1 + Math.max(this.maxDepth(tree.left), this.maxDepth(tree.right));
    return min;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let complete_max = 0

    function maxSumHelper(tree) {
      if (tree == null) return 0;

      let leftMax = maxSumHelper(tree.left);
      let rightMax = maxSumHelper(tree.right);
      leftMax = Math.max(leftMax, 0);
      rightMax = Math.max(rightMax, 0);


      let max = tree.val + leftMax + rightMax;

      if (max > complete_max) {
        complete_max = max;
      }
      return tree.val + Math.max(leftMax, rightMax);
    }
    maxSumHelper(this.root);
    return complete_max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

    const arr = [];

    function nextLargerHelper(tree) {
      if (tree === null) return;

      if (tree.val > lowerBound) {
        arr.push(tree.val);
      }

      nextLargerHelper(tree.left);
      nextLargerHelper(tree.right);
    }

    nextLargerHelper(this.root);

    if (arr.length === 0) return null;
    return Math.min(...arr);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
