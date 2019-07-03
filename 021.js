// Stacks

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // show the top
    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }

        this.length++
        return this
    }

    // remove from the top
    pop() {
        if (this.top === null) {
            return null
        }
        // const holdingPointer = this.top
        this.top = this.top.next
        this.length--
        return this
    }

    isEmpty() {

    }
}

const myStack = new Stack()
console.log(myStack.push('google'))