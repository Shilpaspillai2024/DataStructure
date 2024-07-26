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


    insert(value, index) {

        if (index < 0 || index > this.size) {
            return
        }
        if (index == 0) {
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


    reverse() {
        let prev = null
        let curnt = this.head
        while (curnt) {
            let next = curnt.next

            curnt.next=prev
            prev=curnt
            curnt=next
        }
        this.head=prev
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty")
        }
        else {
            let curnt = this.head
            let listValue = ''

            while (curnt) {
                listValue += `${curnt.value}->`

                curnt = curnt.next
            }
            console.log(listValue)

        }
    }
}


const list = new LinkedList()

list.print()
list.insert(20, 0)
list.insert(30, 1)
list.insert(40, 2)
list.print()

list.reverse()
list.print()