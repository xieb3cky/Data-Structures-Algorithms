/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) return 0;

    let sum = 0;
    let visitedStack = [this.root];
    while (visitedStack.length) {
      let curr = visitedStack.pop();
      sum += curr.val;
      for (let child of curr.children) {
        visitedStack.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root === null) return 0;

    let count = 0;
    let visitedStack = [this.root];
    while (visitedStack.length) {
      let curr = visitedStack.pop();
      if (curr.val % 2 === 0) {
        count += 1
      }
      for (let child of curr.children) {
        visitedStack.push(child);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) return 0;

    let count = 0;
    let visitedStack = [this.root];

    while (visitedStack.length) {
      let curr = visitedStack.pop();
      if (curr.val > lowerBound) {
        count += 1;
      }
      for (let child of curr.children) {
        visitedStack.push(child);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
