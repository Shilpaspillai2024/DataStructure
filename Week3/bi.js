class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }

    Insert(value){
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
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        let queue=[]
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

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }
           else if(value<root.value){
               return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
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
    delete(value){
        this.root=this.deleteNode(this.root,value)

    }

    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }

            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root

    }

    kthsmallest(k){
        if(!this.root){
            return null
        }

        let curr=this.root
        let stack=[]
        let count=0

        // perform in order traversal(left,root,right)
        while(stack.length>0 || curr){
            while(curr){
                stack.push(curr)
                curr=curr.left
            }
            curr=stack.pop()
            count++

            if(count===k){
                return curr.value
            }
            curr=curr.right
        }
        return null
    }
    kthlargest(k){
        if(!this.root){
            return null
        }
        let curr=this.root
        let stack=[]
        let count=0
         
        while(stack.length>0 || curr){
            while(curr){
                stack.push(curr)
                curr=curr.right
            }

            curr=stack.pop(curr)
            count++

            if(count===k){
                return curr.value
            }
            curr=curr.left
        }
        return null
    }

    closestValue(root,target){
        let closest=root.value
        while(root!==null){
            if(Math.abs(target-closest)>Math.abs(target-root.value)){
                closest=root.value
            }
            if(target<root.value){
                root=root.left
            }else if(target>root.value){
                root=root.right
            }else{
                break
            }
        }
        return closest
    }
}

const bst=new BST()
bst.Insert(40)
bst.Insert(20)
bst.Insert(33)
bst.Insert(10)
bst.Insert(45)
bst.Insert(49)
console.log("preOrder:")
bst.preOrder(bst.root)
console.log("inOrder:")
bst.inOrder(bst.root)
console.log("postOrder:")
bst.postOrder(bst.root)
console.log("levelOrder:")
bst.levelOrder(bst.root)
bst.delete(33)
console.log(bst.search(bst.root,49))
console.log(bst.kthsmallest(2))
console.log(bst.kthlargest(3))
console.log(bst.closestValue(bst.root,50))