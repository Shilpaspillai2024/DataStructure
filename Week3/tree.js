class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
    newChild(node) {
      this.children.push(node);
    }
  }
  let node = new TreeNode(0);
  
  let node1 = new TreeNode(10);
  let node2 = new TreeNode(20);
  
  let node21 = new TreeNode(21);
  let node22 = new TreeNode(22);
  
  node.newChild(node1);
  node.newChild(node2);
  
  node2.newChild(node21);
  node2.newChild(node22);
  
  function traverse(n) {
    console.log(n.value);
    for (child of n.children) {
      traverse(child);
    }
  }
  traverse(node);