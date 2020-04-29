class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert Node At Head
    insertNodeAtHead(){
        var new_data = document.getElementById("node-at-head");
        var result = document.getElementById("result");
        if (new_data.value.length > 0){
            this.head = new Node(new_data.value, this.head);

            result.innerHTML = this.head.data + " " ;
            console.log("Size of linked list: " + this.size);
            this.size++;
        }
    }

    insertNodeAtTail(){
        var new_data = document.getElementById("node-at-head");
        var result = document.getElementById("result");

        let node = new Node(new_data.value);

        if (new_data.value.length > 0){
            result.innerHTML = " " ;
            result.innerHTML += new_data.value + " " ;
            console.log("Size of linked list: " + this.size++);
        }

        var current;

        // If empty make head
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }

    }

    // Insert at index
    insertByIndex(){
        var new_data = document.getElementById("node-at-head");
        var index = document.getElementById("index");

        // If index is out of range
        if(index.value > 0 && index.value > this.size){
            return;
        }

        // If first index
        if(index.value == 0){
            this.insertNodeAtHead();
            return;
        }

        // If index is not zero
        if(index.value > 0 && index.value <= this.size){
            console.log("it Works");
        }

        this.size++;
    }

    // Remove at index
    removeAt(){
        var index = document.getElementById("index");
        var result = document.getElementById("result");

        if(index.value > 0 && index.value > this.size){
            return;
        }

        var current = this.head;
        var previous;
        var count = 0;

        // Remove first
        if(index.value == 0){
            this.head = current.next;
            //console.log("From remove: " + index.value);
            result.innerHTML = "You have cleared node at index: " + index.value;
        }
        // }else{
        //     while(count < index.value){
        //         count++;
        //         previous = current;
        //         current = current.next;
        //     }

        //     previous.next = current.next;
        //     result.innerHTML = current;
        // }

        if (index.value.length == 0){
            result.innerHTML = "";
   
        }

        this.size--;

    }

    // Clear List
    clearList(){
        var result = document.getElementById("result");
        if (this.head != null){
            this.size = 0;
            this.head = null;
            // console.log("Data of linked list: " + this.head);
            // console.log("Size of linked list: " + this.size);
            result.innerHTML = "Linked List Cleared !";
        }
    }

    // Print List Data
    printListData(){
        if(this.head != null){
            var result = document.getElementById("result");
            let current = this.head;
            result.innerHTML = "You have entered: <br/>";
            while(current){
                // console.log(current.data);
                result.innerHTML += current.data + "<br>";
                // this.size--;
                current = current.next;
            }
        }
    }

}


var node = new LinkedList();

// insert Node At Head
function insertNodeAtHead(){
    node.insertNodeAtHead();
}

// insert Node At Tail
function insertNodeAtTail(){
    node.insertNodeAtTail();
}

// Insert By Index
function insertByIndex(){
    node.insertByIndex();
}

// Remove By Index
function removeAt(){
    node.removeAt();
}

// Clear List
function clearList(){
    node.clearList();
}
// Print List 
function printListData(){
    node.printListData();
}