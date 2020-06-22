//Objective is to make a new linked list by connecting all of the odd indexed
//nodes first then connect it with the even indexed nodes.

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)


//O(n) solution that gets all of the odd indexed nodes first then connects
//the even indexed nodes afterwards

let odd = head
let even = head.next
//Keep the head of the evens for reference to connect later
let evenHead = even 

//Don't have to check the odds since it'll always be behind the evens
while (even !== null && even.next !== null) {
    //connect the 1st to the 3rd
    odd.next = even.next
    //let the odd pointer jump to the 3rd
    odd = odd.next
    //connect the 2nd to the 4th
    even.next = odd.next 
    //let the even pointer jump to the 4th
    even = even.next
}

//Connect the odd tail w/ the even head
odd.next = evenHead 
return head