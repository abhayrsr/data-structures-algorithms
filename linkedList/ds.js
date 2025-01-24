class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}


class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element){
        let node = new Node(element);
        let current;

        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index){
        if(index < 0 || index > this.size){
            return console.log("Please eneter a valid index.")
        } else {
            let node = new Node(element);
            let current = this.head;
            let count = 0;

            if(index == 0){
                node.next = this.head;
                this.head = node;
            } else {
                while(count !== index - 1){
                    current = current.next; 
                    count++;
                }
    
                if(current){
                    node.next = current.next;
                    current.next = node; 
                }
    
            }

            this.size++;
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return console.log("Please enter a valid index");
        } else {
            let current = this.head;
            let count = 0;

            if(index == 0){
                this.head = current.next;
            } else {

                while(count !== index ){
                    current = current.next;
                    count++;
                }

                current.next = current.next.next;
            
            }
            this.size--;
            return true;
        }
    }

    removeElement(element){
        let current = this.head;

        if(current !== null && current.element === element){
            this.head = current.next;;
            this.size--;
            return true;
        }
        
        while(current !== null){
            if(current.next.element === element){
                current.next = current.next.next
                break;
            }

            this.size--;
            current = current.next;
            return true;
        }
    }

    indexOf(element){
        let count = 0;
        let current = this.head;

        while(current != null){
            if(current.element === element){
                return count;
            }

            count++;
            current = current.next;
        }

        return console.log("Index not found");
    }

    isEmpty(){
        if(this.size === 0){
            return true;
        } else return false;
    }

    size_of_list(){
        let count = 0;
        let current = this.head;

        while(current !== null){
            count++;
            current = current.next;
        }

        return count;
    }

    printList(){
        let current = this.head;
        let str = "";

        while(current){
            str += current.element + " -> ";
            current = current.next;
        }
        console.log(str + "null");
    }
}

let ll = new LinkedList();

console.log(ll.isEmpty());

ll.add(10);

ll.printList();

console.log(ll.size_of_list());

ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();

console.log("is element removed ?" + ll.removeElement(50));

ll.printList();

console.log("Index of 40 " + ll.indexOf(40));

ll.insertAt(60, 2);

ll.printList();

console.log("is List Empty ? " + ll.isEmpty());

console.log(ll.removeFrom(3));

ll.printList();