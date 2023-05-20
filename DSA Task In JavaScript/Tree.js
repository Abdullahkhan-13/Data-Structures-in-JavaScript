// // A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges.

function Node(data) {
  this.data = data;
  this.children = [];
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(data, toNodeData) {
    const node = new Node(data);

    const parent = toNodeData ? this.findBfS(toNodeData) : null;

    if (parent) parent.children.push(node);
    else if (!this.root) this.root = node;
    else return "Tired to store node at root when root already exists.";
  }

  findBfS(data) {
    const queue = [this.root];
    let _node = null;

    this.traverseBFS((node) => {
      if (node.data == data) _node = node;
    });
    return _node;
  }

  traverseBFS(cb) {
    const queue = [this.root];

    if (cb)
      while (queue.length) {
        const node = queue.shift();
        cb(node);

        for (const child of node.children) queue.push(child);
      }
  }
}

(function test() {
  let tree = new Tree();

  tree.add("Node1");
  tree.add("Node2", "Node1");
  tree.add("Node3", "Node1");
  tree.add("Node4", "Node2");
  tree.add("Node5", "Node2");
  tree.add("Node6", "Node3");

  tree.traverseBFS((node) => {
    console.log("current node: ", node);
  });
})();

// Binary Search Tree is a node-based binary tree data structure which has the following properties:

// The left subtree of a node contains only nodes with keys lesser than the node’s key.
// The right subtree of a node contains only nodes with keys greater than the node’s key.
// The left and right subtree each must also be a binary search tree.
//         8
//       /   \
//      3     10
//     / \     \
//    1   6     14
//       / \    /
//      4  7   13

// function Node(data) {
//   this.data = data;
//   this.left = null;
//   this.right = null;
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   add(data) {
//     const node = new Node(data);

//     if (!this.root) {
//       this.root = node;
//     } else {
//       this.insertNode(node);
//     }
//   }
//   insertNode(node) {
//     let current = this.root;

//     while (current) {
//       if (node.data < current.data) {
//         if (!current.left) {
//           current.left = node;
//           break;
//         }

//         current = current.left;
//       } else if (node.data > current.data) {
//         if (!current.right) {
//           current.right = node;
//           break;
//         }
//         current = current.right;
//       } else {
//         break;
//       }
//     }
//   }

//   remove(data) {
//     this.node = this.removeNode(this.root, data);
//   }

//   removeNode(node, data) {
//     if (!node) {
//       return ull;
//     }

//     if (data === node.data) {
//       if (!node.left && !node.right) {
//         return null;
//       }

//       if (!node.left) {
//         return node.right;
//       }

//       if (!node.right) {
//         return node.left;
//       }

//       const temp = this.getMin(node.right);
//       node.data = temp;

//       node.right = this.removeNode(node.right, temp);
//       return node;
//     } else if (data < node.data) {
//       node.left = this.removeNode(node.left, data);
//       return node;
//     } else {
//       node.right = this.removeNode(node.right, data);
//       return node;
//     }
//   }
//   getMin(node) {
//     if (!node) {
//       node = this.root;
//     }

//     while (node.left) {
//       node = node.left;
//     }
//     return node.data;
//   }

//   preOeder(node, cb) {
//     if (node) {
//       if (cb) {
//         cb(node);
//       }

//       this.preOeder(node.left, cb);
//       this.preOeder(node.right, cb);
//     }
//   }

//   traverseDFS(cb, method) {
//     const current = this.root;

//     if (method) {
//       this[`${method}`](current, cb);
//     } else {
//       this.preOeder(current, cb);
//     }
//   }

//   printDFS() {
//     this.traverseDFS((node) => {
//       console.log(
//         `Node.data ${node.data}`,
//         `Node.left: ${node.left ? node.left.data : null}`,
//         `Node.left: ${node.right ? node.right.data : null}`
//       );
//     });
//   }
// }

// (function test() {
//   let tree = new BinarySearchTree();

//   tree.add(5);
//   tree.add(3);
//   tree.add(2);
//   //   console.log(tree);

//   tree.printDFS();

//   console.log("remove 5");
//   tree.remove(5);
//   //   console.log(tree);

//   tree.printDFS();
// })();
