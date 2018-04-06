class Map {
    constructor() {
    }

    set(key, value) {
        this[key] = value;
    }

    get(key) {
        return this[key];
    }

    contains(key) {
        return key in this;
    }

    deleteKey(key){
        delete this[key];
    }

    values() {
        let result = [];
        for(let key in this){
            result.push(this[key]);
        }
        return result;
    }

    keys() {
        let result = [];
        for(let key in this){
            result.push(key);
        }
        return result;

    }
}

const map1 = new Map();

map1.set('toto', 5);
map1.set('jean', undefined);
console.log(map1.contains('jean'));
map1.values();
console.log(map1.values());
console.log(map1.keys());