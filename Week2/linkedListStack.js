const LinkedList = require('./linkedList')

class linkedListSatck{
    constructor(){
        this.list=new LinkedList()
    }
    push(value){
        this.list.prepend(value)

    }
    pop(){
        return this.list.removeFromfront()

    }
    peek(){
        return this.list.head.value

    }

    print(){
        return this.list.print()

    }

    isEmpty(){
        return this.list.isEmpty()

    }
    getSize(){
        return this.list.getSize()

    }
}

const stack=new linkedListSatck()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
console.log(stack.pop())
stack.print()
console.log(stack.getSize())
console.log(stack.peek())
