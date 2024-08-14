class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class Binarytree{
    constructor(){
        this.root=null
    }
    isEmpty() {
        return this.root === null;
      }
    

 insert(value){
    const newNode=new Node(value)
    if (this.isEmpty()){
        this.root=newNode

    }else{
        this.insertNode(this.root, newNode);
    }

 }

 insertNode(root, newNode){
    if (newNode.value < root.value){
        if (root.left === null) {
            root.left = newNode;
          } else {
            this.insertNode(root.left, newNode);
          }
        } else {
          if (root.right === null) {
            root.right = newNode;
          } else {
            this.insertNode(root.right, newNode);
          }

    }
 }


 printTree(node=this.root){
    if(node !==null){
        this.printTree(node.left)
        console.log(node.value)
        this.printTree(node.right)
    }

 }


 // tree traversal using in -order,pre- order,post-order

 preOrder(node= this.root){
    if(node !==null){
        console.log(node.value)
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
 }

 inOrder(node= this.root){
    if(node !==null){
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
    }
 }
 postOrder(node = this.root){
    if(node !==null){
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value)
    }
 }
}

const tree=new Binarytree()
tree.insert(8)
tree.insert(3)
tree.insert(10)
tree.insert(1)
tree.insert(0)
tree.printTree()
console.log("Pre-order Traversal:");
tree.preOrder();

console.log("In-order Traversal:");
tree.inOrder();

console.log("Post-order Traversal:");
tree.postOrder();