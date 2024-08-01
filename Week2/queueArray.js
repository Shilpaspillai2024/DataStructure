class Queue{
    constructor(){
        this.items=[]

    }

    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length===0
    }
    peek(){
        if(!this.isEmpty()){
             return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }

    reverse(){
        let stack=[]

        while(!this.isEmpty()){
            stack.push(this.dequeue())
        }

        while(stack.length>0){
            this.enqueue(stack.pop())
        }
    }
}

const queue=new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()
console.log(queue.size())
console.log(queue.dequeue())
queue.print()
console.log("Reversed Queue:");
queue.reverse()
queue.print();