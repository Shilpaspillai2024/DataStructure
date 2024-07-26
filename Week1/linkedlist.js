class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class linkedlist {
    constructor() {
        this.head = null
        this.size = 0

    }

    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }


    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            node.next = this.head
            this.head = node
        }

        this.size++
    }


    // append a node in empty list

    append(value) {
        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node
        }
        // append a node in exsisting list
        else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++

    }
    insert(value, index) {
        if (index < 0 || index > list.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        }
        else {
            const node = new Node(value)
            let prev = this.head

            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }

            node.next = prev.next
            prev.next = node
            this.size++
        }

    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null
        }
        //index ===0
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next

        }
        // index > 0

        else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next

            }
            removedNode = prev.next
            prev.next = removedNode.next

        }
        this.size--
        return removedNode.value
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }

            if (prev.next) {
               const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null

        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty")
        }
        else {
            let curnt = this.head
            let listValues = ''
            while (curnt) {
                listValues += `${curnt.value} -> `
                curnt = curnt.next
            }

            console.log(listValues)
        }
    }
}


const list = new linkedlist()
// console.log('liskedlist is empty', list.isEmpty())
// console.log('liskedlist is size', list.getSize())
// list.print()
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()


// append
// list.append(10)
// list.print()

// list.append(20)
// list.append(30)
// list.print()

//insert

list.insert(20, 0)
list.print()
list.insert(10, 0)
list.print()
list.insert(30, 1)
list.print()
list.insert(40, 2)
list.print()
// console.log(list.getSize())

// console.log(list.removeFrom(6))

// console.log(list.removeFrom(1))
// list.print()


// console.log(list.removeValue(25))

// console.log(list.removeValue(30))
// list.print()