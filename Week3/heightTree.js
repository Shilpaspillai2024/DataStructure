


class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}
class Tree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }

    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)  // the insertNode is a helper function to insert the node
        }

    }


    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
               root.left=newNode 
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }

    }

// Height of the tree or maximum depth of a binary tree

    height(node=this.root)
    {
        if(node===null){
            return -1
        }

        let lefthgt=this.height(node.left)
        let righthgt=this.height(node.right)
   return Math.max(lefthgt,righthgt) +1 
    }



}

const bt=new Tree()
bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(3);
bt.insert(7);
console.log("Height of the tree:", bt.height());