// Связаный списко

class LinkedList {
    constructor() {
        this.size = 0,
        this.root = null
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value);
            this.size += 1;
            return true;
        }
        let node = this.root
        while (node.next) {
            node = node.next
        }
        let newNode = new Node(value)
        node.next = newNode
        this.size += 1
    }
    getSize() {
        return this.size
    }
    print() {
        let result = []
        let node = this.root
        while (node) {
            result.push(node.value)
            node = node.next
        }
        console.log(result); 
    }
}

class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

const list = new LinkedList()
list.add(5)
list.add(3)
list.add(5)
list.add(1)
list.add(23)

list.print()


// Бинарное древо

class BinaryTree {
    constructor() {
        this.root = null
    }

    add(value) {
        if (!this.root) {
            this.root = new treeNode(value)
        } else {
            let node = this.root
            let newNode = new treeNode(value)
            while (node) {
                if (value > node.value) {
                    if (!node.right) {
                        break
                    }
                    node = node.right
                } else {
                    if (!node.left) {
                        break
                    }
                    node = node.left

                }
            }
            if (value > node.value) {
                node.right = newNode
             } else {
                node.left = newNode
             }
        }
    }

    print(root = this.root) {
        if (!root) {
            return true
        }
        console.log(root.value);
        this.print(root.left)
        this.print(root.right)
    }
}

class treeNode {
    constructor(value) {
            this.value = value,
            this.left = null,
            this.right = null
    }
}

const tree = new BinaryTree()

tree.add(5)
tree.add(2)
tree.add(4)
tree.add(8)
tree.add(4)

tree.print()