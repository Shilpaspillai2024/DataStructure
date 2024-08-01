class Stackk{
    constructor(){
        this.items=[]
    }

    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
       return this.items.length===0
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }

    sort(){
        let ausStack=[]

        while(!this.isEmpty()){
            let temp= this.pop()
            while(ausStack.length> 0 && ausStack[ausStack.length-1] > temp){
                this.push(ausStack.pop())
            }
            ausStack.push(temp)

        }
        while (ausStack.length > 0) {
            this.push(ausStack.pop());
        }
    }
}

const stack=new Stackk
stack.push(20)
stack.push(100)
stack.push(30)
stack.push(10)
stack.push(50)
stack.print()
console.log(stack.pop())
stack.print()
console.log(stack.peek())
stack.sort();
console.log("Sorted Stack:");
stack.print();