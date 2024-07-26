class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
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
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }


    append(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head

            while(prev.next){
                prev=prev.next

            }

            prev.next=node
        }
        this.size++
    }


    insert(value,index){
        if(index<0 || index>this.size){
            return
        }
        const node=new Node(value)
        if(index===0){

            this.prepend(value)

        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }

            node.next=prev.next
            prev.next=node
        }
        this.size++
    }


    removeFrom(index){
        if(index<0 || index>this.size){
            return null
        }
        let removedNode
        if(index===0){

            removedNode=this.head
            this.head=this.head.next
           

        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }

            removedNode=prev.next
            prev.next=removedNode.next
          
            
        }
        this.size--
        return removedNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let prev=this.head
            while(prev.next && prev.next.value !==value){
                prev=prev.next

            }
            if(prev.next){
                const removedNode=prev.next
                prev.next=removedNode.next
                this.size--
                return value
            }
            return null
        }
    }


    search(value){
        if(this.isEmpty()){
            return -1
        }else{
            let i=0
            let curnt=this.head
            while(curnt){
             if( curnt.value===value){
               return i
             }

              
              curnt=curnt.next
              i++
            }
            return -1
        }
    }


    reverse(){
        let prev=null
        let curnt=this.head
        while(curnt){
            let next=curnt.next

            curnt.next=prev
            prev=curnt
            curnt=next

        }
        this.head=prev


    }


    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }
        else{
            let curnt=this.head
            let listValues=""
            while(curnt){
                listValues+=`${curnt.value}=>`
                 curnt=curnt.next
            }
            console.log(listValues)
        }
    }
}


let list =new LinkedList()
list.insert(10,0)
list.insert(20,1)
list.insert(30,2)
list.print()
list.prepend(5)
list.print()
list.append(40)
list.print()
console.log(list.removeFrom(0))
list.print()

console.log(list.removeValue(20))
list.print()

console.log(list.search(30))

list.reverse()

list.print()
