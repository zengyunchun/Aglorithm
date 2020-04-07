class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        var node = new Node(element);

        if (this.head == null) {
            this.head = node;
            node.next = this.head; // 自己指向自己 **与普通链表不同之处**
        } else {
            var current = this.head;
            while (current.next !== this.head) { //   **与普通链表不同之处**
                current = current.next;
            }
            // 增加到尾部
            current.next = node;
            node.next = this.head; //  **与普通链表不同之处**

        }
        this.size++;
    }

    insertAt(element, index) {
        if (index > 0 && index > this.size) {
            return false;
        } else {
            var node = new Node(element);
            var curr, prev;

            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
                // 找到插入的索引节点
                while (it < index) {
                    // curr当前存入prev变量
                    prev = curr;
                    // 下一个变量存入curr当前
                    curr = curr.next;
                    it++;
                }
                prev.next = node;
                node.next = curr;
            }
        }
        this.size++;
    }


    // removes an element from the 
    // specified location 
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element 
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the 
                // position to removce an element 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element 
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element 
            return curr.element;
        }
    }



    // removes a given element from the 
    // list 
    removeElement(element) {
        var current = this.head;
        var prev = null;
        var indexCheck = 0;   //   **与普通链表不同之处**
        // iterate over the list 
        while (current != null && indexCheck < this.size) {    //   **与普通链表不同之处**
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element === element) {
                if (indexCheck == 0) { //   **与普通链表不同之处**
                    this.head = current.next; 
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
            indexCheck++;  //   **与普通链表不同之处**
        }
        return -1;
    }

    reverse() {
        var prev = null;
        var curr = this.head;
        var indexCheck = 0; //   **与普通链表不同之处**
        while (curr != null && indexCheck < this.size) {  //   **与普通链表不同之处**
            var temp = curr.next;
            // 调转指针
            curr.next = prev; 
            // 当前作为下一轮的前者
            prev = curr;
            // 往后移动指针
            curr = temp;
            indexCheck++;
        }
        this.head.next = prev; //   **与普通链表不同之处**
        // 更新头指针
        this.head = prev;
    }

    // finds the index of element 
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list 
        while (current != null && count < this.size) {//   **与普通链表不同之处**
            // compare each element of the list 
            // with given element 
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        // not found 
        return -1;
    }

    // checks the list for empty 
    isEmpty() {
        return this.size == 0;
    }

    // gives the size of the list 
    size_of_list() {
        console.log(this.size);
    }



    // prints the list items 
    printList() {
        var curr = this.head;
        var str = "",   indexCheck = 0;
        while (curr && indexCheck < this.size) { //   **与普通链表不同之处**
            str += curr.element + " ";
            curr = curr.next;
            indexCheck++;
        }
        console.log(str);
    }

}


// 例子

// creating an object for the 
// Linkedlist class 
var ll = new CircularLinkedList(); 
  
// testing isEmpty on an empty list 
// returns true 
console.log(ll.isEmpty()); 
  
// adding element to the list 
ll.add(10); 
  
// prints 10 
ll.printList(); 
  
// returns 1 
console.log(ll.size_of_list()); 
  
// adding more elements to the list 
ll.add(20); 
ll.add(30); 
ll.add(40); 
ll.add(50); 
  
// returns 10 20 30 40 50 
ll.printList(); 
  
// prints 50 from the list 
console.log("is element removed ?" + ll.removeElement(50)); 
  
// prints 10 20 30 40 
ll.printList(); 
  
// returns 3 
console.log("Index of 40 " + ll.indexOf(40)); 
  
// insert 60 at second position 
// ll contains 10 20 60 30 40 
ll.insertAt(60, 2); 
  
ll.printList(); 
  
// returns false 
console.log("is List Empty ? " + ll.isEmpty()); 
  
// remove 3rd element from the list 
console.log(ll.removeFrom(3)); 
  
// prints 10 20 60 40 
ll.printList();
ll.reverse();
ll.printList();

