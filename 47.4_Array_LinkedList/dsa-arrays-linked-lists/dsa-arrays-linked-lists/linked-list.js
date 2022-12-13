/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    //if there's no head, set head &  tail to newNode
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //else set tail to newNode
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head
    this.head = newNode
  }

  /** pop(): return & remove last item. */

  pop() {

    if (this.length === 0) return undefined;

    //if length is 1 re-assign head and tail to null & decrement length
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    //traverse from head & continue while there's a next node value
    let currNode = this.head;
    let prevNode = null;

    while (currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    //if found last node & its next value = null --> set tail to second to last node 
    prevNode.next = null;
    this.tail = prevNode;
    this.length--;
    return currNode;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) return undefined;

    //if length is 1 re-assign head and tail to null & decrement length

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    let removedVal = this.head;

    //set head value to head's next value

    this.head = this.head.next;
    this.length--;

    return removedVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    //traverse from head
    let currNode = this.head;

    //continue traversing until end 
    for (i = 0; i < this.length; i++) {
      //if i = the idx return the node
      if (i === idx) {
        return currNode
      } else {
        //else update currNode to the next node value & continue checking
        currNode = currNode.next;
      }
    }
    return false;
  };

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    //traverse from head
    let currNode = this.head;

    //continue traversing until found idx
    for (i = 0; i < this.length; i++) {
      //if found idx, set node value to val
      if (i == idx) {
        currNode.value = val;
      } else {
        //else set currNode to the next node value & continue checking
        currNode = currNode.next;
      }
    }
    return false;
  };


  /** insertAt(idx, val): add node w/ val before idx. */

  insertAt(idx, val) {
    //if idx = 0, insert val to start of list
    if (idx === 0) return this.unshift(val);

    //if idx = length of list, insert val at the end of list
    if (idx === this.length) return this.push(val);

    //check if idx is within bound
    if (idx <= 0 || idx > this.length) return undefined;

    //create a new node
    let newNode = new Node(val);

    //keep track of prev & curr node to insert new val
    let prevNode = null;
    let currNode = this.head;

    for (i = 0; i < this.length; i++) {
      //if idx found
      if (i === idx) {
        //set prev node's next value to new node 
        prevNode.next = newNode;
        //set the new node's next value to curr node (connecting)
        newNode.next = currNode;
        this.length++;
        return this;
      } else {
        //else, set prev node to curr node, set curr node to next node & continue checking
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    return false;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    //if idx = 0, remove first item of the list
    if (idx === 0) return this.shift();

    //if idx = length of list, remove last item of the list
    if (idx === this.length) return this.pop();

    //check if idx is within bound
    if (idx <= 0 || idx > this.length) return undefined;

    //keep track of prev & curr node to insert new val
    let prevNode = null;
    let currNode = this.head;

    for (i = 0; i < this.length; i++) {
      //if idx found
      if (i === idx) {
        //set prev node's next value to curr node's next node
        prevNode.next = currNode.next;
        this.length--;
        return this;
      } else {
        //else, set prev node to curr node, set curr node to next node & continue checking
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    return false;
  }


  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let currNode = this.head;

    while (currNode) {
      sum += currNode.value;
      currNode = currNode.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;