class node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
class linkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    prependNode(value){
        const newNode = new node(value, this.head);
        this.head = newNode;
        this.length++
    }
    appendNode(value){
        let current = this.head;
        const newNode = new node(value, null);
        for(let i = 0; i < this.length -1; i++){
            current = current.next;
        }
        current.next = newNode;
        this.length++;
    }
    size(){
        return this.length;
    }
    firstNode(){
        return this.head;
    }
    lastNode(){
        return this.tail;
    }
    at(index){
        if(index < 0 || index>= this.length){
            return null;
        }else{
            let current = this.head;
            for(let i = 0; i< index; i++){
                current = current.next;
            }
            return current;
        }
    }
    removeLast(){
        let current = this.head;
        for(let i = 0; i < this.length -2; i++){
            current = current.next;
        }
        current.next = null;
        this.length--;
    }
    contains(value){
        let current = this.head;
        for(let i = 0; i < this.length; i++){
            if(current.value == value){
                return true;
            }
            current = current.next
            if(current == null){
                return false;
            }
        }
    }
    find(value){
        let current = this.head;
        for(let i = 0; i < this.length; i++){
            if(current.value == value){
                return i;
            }
            current = current.next
            if(current == null){
                return null;
            }
        }
    }
    toString(){
        let current = this.head;
        let newString = '';
        for(let i = 0; i < this.length; i++){
            newString += ` ( ${current.value} ) ->`
            current = current.next;
        }
        newString += ` null`
        return newString;
    }
}

const ll = new linkedList();
ll.prependNode(5);
ll.prependNode(6);
ll.prependNode(8);
ll.prependNode(4);
ll.appendNode(100);
//ll.removeLast();
//ll.contains(8)
//ll.find(6);
//console.log(ll.toString());
console.log(ll)
//console.log(ll.size());
//console.log(ll.firstNode());
//console.log(ll.firstNode());
//console.log(ll.at(3));
// console.log(ll.lastNode());