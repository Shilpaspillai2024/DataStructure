class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class binarySearchTree{
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
                this.insertNode(this.root,newNode)

            }
        
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }
        else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }
        else{
            if(root.value===value){
                // return value
                return true
            }
            else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }


    // dfs
    //1.preOrder traversal
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    //2.InOrder

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    // 3. post Order
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }


    //Bfs is levelOrder

    levelOrder(){
        const queue=[]
      queue.push(this.root)
      while(queue.length){
        let curr=queue.shift()
        console.log(curr.value)
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
      }

    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }

    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    

    // delete a node in bst

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }


    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }
        else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left 
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }

//Find the closest value to a given number in a Tree.

    closestValue(root,target){
        let closest=root.value
        while(root !==null){
            if(Math.abs(target-closest)> Math.abs(target-root.value)){
                closest=root.value
            }

            if(target<root.value){
                root=root.left
            }
            else if(target>root.value){
                root=root.right
            }else{
                break
            }
        }
        return closest


    }

    //Validate whether a given tree is BST or not.

    isValidbst(root,min=-Infinity,max=Infinity){
        if(root===null){
            return true
        }
        if(root.value<=min || root.value>=max){
            return false
        }
        return this.isValidbst(root.left,min,root.value) && this.isValidbst(root.right,root.value,max)
    }



    // function to find second largest

    secondLargest(){
        if(!this.root ||( !this.root.left && !this.root.right)){
            return null
        }
        let curr=this.root
        let parent=null

        while(curr.right){
            parent=curr
            curr=curr.right
        }

        if(curr.left){
            curr=curr.left
            while(curr.right){
                curr=curr.right
            }
            return curr.value
        }
        return parent.value
    }

}
const bst=new binarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

// console.log(bst.search(bst.root,5))
// console.log(bst.search(bst.root,8))
// console.log(bst.search(bst.root,15))
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder()
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// bst.delete(15)
// bst.levelOrder()
console.log(bst.closestValue(bst.root,6))
console.log(bst.isValidbst(bst.root))
// console.log(bst.secondLargest())