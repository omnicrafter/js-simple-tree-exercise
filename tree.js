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
    if (!this.root) return 0;

    let sum = 0;
    let toSumQueue = [this.root];

    while (toSumQueue.length) {
      let current = toSumQueue.shift();
      sum = sum + current.val;

      for (let child of current.children) {
        toSumQueue.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let evensCount = 0;
    let toCountEvensQueue = [this.root];

    while (toCountEvensQueue.length) {
      let current = toCountEvensQueue.shift();
      if (current.val % 2 === 0) {
        evensCount += 1;
      }

      for (let child of current.children) {
        toCountEvensQueue.push(child);
      }
    }
    return evensCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = 0;
    const lowerBoundQueue = [this.root];

    while (lowerBoundQueue.length) {
      let current = lowerBoundQueue.shift();
      if (current.val > lowerBound) {
        count += 1;
      }

      for (let child of current.children) {
        lowerBoundQueue.push(child);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
