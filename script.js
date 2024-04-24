class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
   constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
   }
   append(data) {
    let newNode = new Node(data);

    if(this.head === null) {
        this.head = newNode;
        return;
    }
    let current = this.head;
    while(current.next !== null) {
        current = current.next;
    }
    this.length++
    current.next = newNode;
   }


   prepend(data) {

    const newNode = new Node(data);

    newNode.next = this.head;

    this.head = newNode

    this.length++
 }

size() {
   let count = 0;
   let current = this.head;
   while(current) {
    count++;
    current = current.next;
   }
   console.log(count);
}

getFirst() {
    console.log(this.head)
}

getLast() {
    let lastNode = this.head;
    if(lastNode) {
        while(lastNode.next) {
            lastNode = lastNode.next
        }
    }
    console.log(lastNode);
}

at(index) {
    let currentNode = this.head;
    let count = 0;
    
    while(currentNode) {
        if(count === index) {
            console.log(currentNode);
        }
        count++
        currentNode = currentNode.next
    }
    return -1;
}

pop(data) {
    if(!this.head) {
        return null;
    }
  if(this.head.data === data) {
    this.head = this.head.next;
    this.length--;
    return this;
  }
  let current = this.head;
  while(current.next) {
    if(current.next.data === data) {
        current.next = current.next.next;
        this.length--;
        return this;
    }
    current = current.next;
  }
  return null
}

contains(value) {
    let currentNode = this.head;

    while(currentNode) {
        if(value === currentNode.data) {
            console.log(true);
        }
        currentNode = currentNode.next
    }
}

find(value) {
    let current = this.head;
    let count = 0;

    while(current) {
        if(current.data === value){
            console.log(count)
        }
        current = current.next;
        count++
    }
}

toString() {
    let result = "";
    let current = this.head;
    while(current) {
        result += `(${current.data}) ->`;
        current = current.next;
    }
    result += "null";
    console.log(result);
}

InsertAt(data, position) {
    let  newNode = new Node(data);
    if(position === 1) {
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
    let current = this.head;
    let i = 0;
    while(i < position - 1 && current) {
        current = current.next;
        i++;
    }
    if(current) {
        newNode.next = current.next;
        current.next = newNode;
    }
}

removeAt(index) {
    if(index < 0 || index >= this.length) return null;
    if(index === 0) return this.pop();
    let current = this.head;
    for(let i = 0; i < index - 1; i++) {
        current = current.next
    }
    current.next = current.next.next;
    this.length--
    return this;
}

   printAll() {
    let current = this.head;
    while(current) {
        console.log(current.data);
        current = current.next;
    }
   }
}


const list = new LinkedList();

list.append("node1")
list.append("node4")
list.append("node2")
list.prepend("node0")
list.getFirst();
list.getLast();
list.at(2)
list.size();
list.contains("node0")
list.find("node0");
list.toString();
list.InsertAt("node3", 2);
list.printAll()
