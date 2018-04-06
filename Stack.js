class Stack {
    constructor() {
        this.length = 0;

    }

    add(elm) {
        this[this.length++] = elm;
    }

    delete() {
        this.length--;
        delete this[this.length];
    }

    concat(stack) {
        for (let i = 0; i < stack.length; i++) {
            this.add(stack[i]);
        }
    }

    reverse() {
        let newStack = new Stack();
        for (let elm = this.length - 1; elm >= 0; elm--) {
            newStack.add(this[elm]);
        }
        return newStack;
    }

    [Symbol.iterator]() {
        return (function* () {
            for (let i = 0; i < this.length; i++) {
                yield this[i];
            }
        }).call(this);
    }
}

const stack1 = new Stack();
const stack2 = new Stack();
console.log(stack1, stack2);

stack1.add("toto");
stack2.add("Alfred");
console.log(stack1, stack2);

stack1.concat(stack2);
console.log(stack1, stack2);

stack1.delete();
console.log(stack1, stack2);

stack1.add('Jean');
stack1.add('Mark');

console.log(stack1.reverse())