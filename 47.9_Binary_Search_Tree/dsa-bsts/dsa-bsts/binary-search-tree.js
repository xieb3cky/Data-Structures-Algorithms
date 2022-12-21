class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);

    //Empty tree, insert at the root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }


    let currNode = this.root;

    while (currNode) {

      if (currNode.val > val) {
        //traverse to the left & check if theres a left node
        if (currNode.left === null) {
          //set left node to the new node/val
          currNode.left = newNode;
          return this;
        }
        //else update currNode 
        currNode = currNode.left;
      }
      else {
        //traverse to the right & check if theres a right node
        if (currNode.right === null) {
          currNode.right = newNode;
          return this;
        }
        //else update currNode
        currNode = currNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currNode = this.root) {

    // If the tree is empty, insert at the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (currNode.val > val) {
      if (currNode.left === null) {
        currNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currNode.left);
    }
    else {
      if (currNode.right === null) {
        currNode.right = new Node(val);
        return this;
      }
      //check right node
      currNode.right.insertRecursively(val);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;
    while (currNode) {
      if (currNode.val === val) {
        return currNode;
      }
      if (currNode.val < val) {
        currNode = currNode.right;
      } else {
        currNode = currNode.left;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currNode = this.root) {
    if (currNode === null) return undefined;

    //check if current node = val
    if (currNode.val === val) return currNode;

    //if current node is greater than val
    if (currNode.val > val) {
      if (currNode.left === null) {
        return undefined;
      }
      //check left node
      return this.findRecursively(val, currNode.left);
    } else {
      if (currNode.right === null) {
        return undefined;
      }
      //check right node
      return this.findRecursively(val, currNode.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = [];

    function preOrder(tree) {
      if (tree === null) return;

      arr.push(tree.val);

      preOrder(tree.left);
      preOrder(tree.right);
    }

    preOrder(this.root);

    return arr;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

    let arr = [];

    function inOrder(tree) {
      if (tree === null) return;

      inOrder(tree.left);
      arr.push(tree.val);
      inOrder(tree.right);
    }

    inOrder(this.root);

    return arr;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];

    function postOrder(tree) {
      if (tree === null) return;

      postOrder(tree.left);
      postOrder(tree.right);
      arr.push(tree.val);
    }

    postOrder(this.root);

    return arr;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [this.root];
    const visitedNodes = [];

    while (queue.length) {
      let curr = queue.shift();
      visitedNodes.push(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {

  // }
}

module.exports = BinarySearchTree;
