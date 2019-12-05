export{Node, DoublyLinkedList}


//this is our indiviudal objects that will go inside the linked list
class Node{
    
    //paramatized for our objects
    constructor(eventType, data, jsLineIndices){
        this.event =  eventType; 
        //this will be the event that took place
        this.data = data;
        //this will be the elements the event affected or the indicies
        //of the element 
        this.javaLines = jsLineIndices;
        //this will be lines of code at which the event took place
        this.next = null;
        //a pointer to the next item in the list
        this.prev = null;
        //a pointer to the previous item in the list
    }
    setNext(nextNode){
        this.next = nextNode;
    }
    setPrev(prevNode){
        this.prev = prevNode;
    }
    getNext(){
        return this.next;
    }
    getPrev(){
        return this.prev;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head =  null;
        this.tail = null;

        //this is the current node we are on at any given time when iterating
        this.index = null;
    }
    //add item
    add(eventType,data,jsLineIndices){
        
        //create an instance of our node using these parameters
        let node = new Node(eventType,data,jsLineIndices);
        
        //special case: no nodes in the list
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }
        //general case: we have a head, add this 
        else if(this.head !== null){
            //set the provided node previous pointer, to the tail
            node.setPrev(this.tail); 
            
            //set the tail to point to the node provided
            this.tail.setNext(node);
           
            //reassign the new node to be the tail
            this.tail = node;
        }
    
    }
    //remove item
//getters
        //get first
    getHead(){
        return this.head;
    }
        //get last
    getTail(){
        return this.tail;
    } 
    
        //goes to the next node
    goForward(){
        
        if(this.index === null){
            //check if index has been initialized, if not put it to head
            return this.index = this.head;
        }
        
        else if(this.index === this.tail){
            //check if the index is at the end of the list if so dont
            //let them go past the end
            return this.index = this.tail;
        }
        
        return this.index = this.index.getNext();
    }

        //goes to the prev node
    goPrev(){

        if(this.index === null){
        //check if index has been initialized, if not put it to head
            return this.index = this.head;
        }

        else if(this.index === this.head){
            //check if we are at the beginning of the linked list 
            // if so don't let them got past the head 
            return this.index = this.head;
        }
    
        return this.index = this.index.getPrev();
    }

        //goes to the very beginning of the list
    goToStart(){
        return this.index = this.getHead();
    }
        //goes to the end of the list
    goToEnd(){
        return this.index = this.getTail();
    }

    //returns whether or not the iterator is at the end of this list
    isAtEnd(){
        return (this.index === this.tail);
    }

}































