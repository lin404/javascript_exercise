class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this.printList()
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this.printList()
    }

    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index, value) {

        if (index >= this.length - 1) {
            this.append(value)
            return this.printList()
        }
        const newNode = new Node(value)
        const leader = this.traverseToIndex(index - 1)
        const holdPointer = leader.next
        leader.next = newNode
        newNode.next = holdPointer
        this.length++
        return this.printList()
    }

    remove(index) {

        const leader = this.traverseToIndex(index - 1)
        const holdPointer = leader.next
        leader.next = holdPointer.next
        this.length--
        return this.printList()
    }

    reverse() {

        if (this.length === 1) {
            return this
        }

        let first = this.head
        this.tail = this.head
        let second = this.head.next
        while (second !== null) {
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
        return this.printList()

    }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
// console.log(myLinkedList.prepend(1));
// console.log(myLinkedList.insert(1, 4))
// console.log(myLinkedList.remove(2))
console.log(myLinkedList.reverse())