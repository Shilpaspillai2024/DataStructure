class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
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
        let node = new Node(value)

        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }



    append(value) {
        let node = new Node(value)

        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log("the list is empty")
        }
        else {
            let curnt = this.head
            let listValues = ''
            while (curnt) {
                listValues += `${curnt.value}=>`
                curnt = curnt.next
            }
            console.log(listValues)
        }
    }


    insert(value, index) {
        if (index < 0 || index > list.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            let node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }

            node.next = prev.next
            prev.next = node
        }
        this.size++

    }


    reverse() {
        if (this.isEmpty()) {
            return -1
        } else {
            let prev = null
            let curnt = this.head
            while (curnt) {
                let next = curnt.next

                curnt.next = prev
                prev = curnt
                curnt = next

            }
            this.head = prev
        }
    }


    removeFrom(index) {
        if (index < 0 || index > list.size) {
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
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
                let removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return -1
        }
    }


    removeMiddle() {
        if (this.isEmpty()) {
            return -1
        }
        else {
            let prev = null
            let slow = this.head
            let fast = this.head

            if (this.size === 1) {
                this.head = this.head.next
                this.size--
                return slow.value
            }

            while (fast && fast.next) {
                prev = slow
                slow = slow.next
                fast = fast.next.next
            }

            if (prev) {
                prev.next = slow.next
            }
            this.size--
            return slow.value
        }
    }
    search(value) {
        if (this.isEmpty()) {
            return null
        } else {
            let i = 0
            let curnt = this.head
            while (curnt) {
                if (curnt.value === value) {
                    return i

                }
                curnt = curnt.next
                i++
            }
            return -1
           
        }
    }
}


let list = new LinkedList()

list.insert(20, 0)
list.insert(30, 1)
list.insert(40, 2)
list.prepend(10)
list.append(50)

list.print()
// list.reverse()
//list.print()
// console.log(list.removeFrom(0))

// console.log(list.removeValue(40))
// console.log(list.removeMiddle())
list.print()
console.log(list.search(40))
