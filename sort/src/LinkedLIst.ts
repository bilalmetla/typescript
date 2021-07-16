import { Sorter } from "./Sorter";


class Node {
    next: Node | null = null;
    constructor(public value: number){}
}

export class LinkedLIst extends Sorter {

    head: Node | null = null;
    tail: Node | null = null;
    listLength: number = 0;

    add(value: number): number {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            if (this.tail instanceof Node) {
                this.tail.next = newNode
                this.tail = newNode
            }

        }
        this.listLength++
        return this.listLength
    }

    get length(): number {
        return this.listLength
    }

    at(index: number): Node {
        if (!this.head || index < 0 || index > this.listLength) {
            throw new Error('Index out of bounds')
        }

        let counter = 0
        let current: Node | null = this.head
        
        while (current) {
            if (counter === index) {
                return current
            }
            counter++
            current = current.next
        }

        throw new Error('Index Out Of Bound!')
        
    }


    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error('List is empty!')
        }
        return this.at(leftIndex).value > this.at(rightIndex).value        
    }

    //swap rather then swap node jsut swap the values is easy
    swap(leftIndex: number, rightIndex: number): void{
        const leftNode = this.at(leftIndex)
        const rightNode = this.at(rightIndex)

        let leftNodeData = leftNode.value
        leftNode.value = rightNode.value
        rightNode.value = leftNodeData

    }
}


