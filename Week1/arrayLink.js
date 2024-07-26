class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head=null
        this.size = 0
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
        }
        else{
            node.next=this.head
            this.head=node

        }

        this.size++

    }

    print(){

        if(this.isEmpty()){
            console.log("the list is empty")
        }else{
            let curnt=this.head
            let listValues=''

            while(curnt){
                listValues+=`${curnt.value}=>`
                curnt=curnt.next
            }
            console.log(listValues)
        }
    }
}

function arrayToLinked(array){
    const list=new LinkedList()
   array.forEach(element => list.prepend(element));
   return list
}


const array=[10,20,30,40]

const linkedlist=arrayToLinked(array)
linkedlist.print()