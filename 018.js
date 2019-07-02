class Node {
    constructor(pre, value) {
        this.value = value
        this.next = null
        this.prev = pre
    }
}
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(this.tail, value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(null, value)
        newNode.next = this.head
        this.head.prev = newNode
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
        const leader = this.traverseToIndex(index - 1)
        const newNode = new Node(leader, value)
        const holdPointer = leader.next
        leader.next = newNode
        newNode.next = holdPointer
        holdPointer.prev = newNode
        this.length++
        return this.printList()
    }

    remove(index) {

        const leader = this.traverseToIndex(index - 1)
        const holdPointer = leader.next
        leader.next = holdPointer.next
        leader.next.prev = holdPointer.prev
        this.length--
        return this.head
    }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.insert(1, 4))
let node = new Node(null, null)
node = myLinkedList.remove(1)

while (node.next !== null) {
    console.log(node)
    node = node.next
    if (node.next === null) {
        console.log(node)
    }
}

