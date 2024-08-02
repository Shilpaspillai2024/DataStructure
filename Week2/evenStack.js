class Stack{
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
    print(){
        console.log(this.items)
        
    }
    isEmpty(){
        return this.items.length===0
        
    }
    getSize(){
        return this.item.length
        
    }
    sort(){
        
        let tempStack=[]
        while(!this.isEmpty()){
            let item=this.pop()
            while(tempStack.length>0 && tempStack[tempStack.length-1]>item){
                this.push(tempStack.pop())
            }
            
            tempStack.push(item)
        }
        while(tempStack.length>0){
            this.push(tempStack.pop())
        }
            
    
    }
    
    evenStack(){
         const evenStack=new Stack()
         let tem=[]
         
         while(!this.isEmpty()){
             let item=this.pop()
             
             if(item %2===0){
                 evenStack.push(item)
             }
             tem.push(item)
         }
         
         while(tem.length>0){
             this.push(tem.pop())
         }
         return evenStack
        
    }
    
}

const stack=new Stack()
console.log(stack.isEmpty())
stack.push(20)
stack.push(30)
stack.push(75)
stack.push(103)
stack.push(10)
stack.print()
// stack.sort()
console.log(stack.evenStack())
// stack.print()