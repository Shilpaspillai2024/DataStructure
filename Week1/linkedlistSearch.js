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
        if(this.isEmpty())
        {
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
        }
        else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }

            prev.next=node

        }
        this.size++

    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        else{
            let i=0
            let curnt=this.head
            while(curnt){
                if(curnt.value===value){
                    return i
                }
                curnt=curnt.next
                i++
            }
            return -1
        }
    }


    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }
        else{
            let curnt=this.head
            let listValues=''
            while(curnt){

                listValues+=`${curnt.value}->`
                curnt=curnt.next
            }
            console.log(listValues)

        }

    }

   
}


const list=new LinkedList()
list.print()

list.prepend(10)
list.print()
list.append(20)
list.append(30)
list.append(40)
list.print()

console.log(list.search(40))