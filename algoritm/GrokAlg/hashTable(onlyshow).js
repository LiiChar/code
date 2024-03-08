

class hashTable {
    constructor() {
        this.basket = Array(32).fill(null)
        this.list = []
    }

    hash(key) {
        let result = 0;
        for (let i = 0; i < key.length; i++) {
            result += key.charCodeAt(i);
        }
        return result;
    }

    set(key, value) {
        this.basket[this.hash(key)] = value
    }

    get(key) {
        return this.basket[this.hash(key)]
    }

    delete(key) {
        if (this.basket[key]) {
            this.basket.slice(this.hash(key))
        }
    }
}

let a = new hashTable()

a.set('bab', 1231)

console.log(a.get('bab'));