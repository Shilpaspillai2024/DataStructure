class Node{
    constructor(value){
        this.value=value
        this.node=null
        
    }
}
class LinkedList{
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
    
    print(){
        if(this.isEmpty()){
            console.log("the linked list is empty")
        }else{
            let listValues=""
            let curnt=this.head
            while(curnt){
                listValues+=`${curnt.value} `
                curnt=curnt.next
            }
            console.log(listValues)
        }
    }
    
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
           node.next=this.head
           this.head=node
        }
        this.size++
    }
    
    sort(){
        this.head=this.mergeSort(this.head)
    }
    
    mergeSort(head){
        if(!head || ! head.next){
            return head
        }
        const middle=this.getMiddle(head)
        const left=this.mergeSort(head)
        const right=this.mergeSort(middle)
        
        return this.mergeSortedList(left,right)
    }
    
    getMiddle(head){
        if( !head || !head.next){
            return head
        }
        
        let slow=head
        let fast=head.next
        
        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        const middle=slow.next
        slow.next=null
        return middle
    }
    
    mergeSortedList(l1,l2){
        let dummy=new Node(null)
        let tail=dummy
        
        while(l1 && l2){
            if(l1.value<l2.value){
                tail.next=l1
                l1=l1.next
            }else{
                tail.next=l2
                l2=l2.next
            }
            tail=tail.next
        }
        tail.next = l1 || l2
        return dummy.next
    }
}

const list=new LinkedList()
list.prepend(20)
list.prepend(10)
list.prepend(40)
list.prepend(30)
list.print()
list.sort()
list.print()