class Node{
    constructor(value){
        this.value=value
        this.prev=null
        this.next=null
    }
}

class Doubly{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
            
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++
    }

    
  


    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }
        else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
        this.size++
    }


    print(){
        if(this.isEmpty()){
            console.log("the list is empty")
        }
        else{
            let curr=this.head
            let list=''
            while(curr){
                list+=`${curr.value}<->`
                curr=curr.next
            }
            console.log(list)
        }
    }
   
}

const list=new Doubly()
list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.print()