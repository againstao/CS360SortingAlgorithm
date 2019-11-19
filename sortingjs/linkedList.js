//this is our indiviudal objects that will go inside the linked list
class Node{
    
    //paramatized for our objects
    constructor(intArray, targetedInts, eventsArray){
        this.intArray =  intArray; 
        //this will be starting what the sorting looks like at a particular point in time
        this.targetedInts = targetedInts;
        //this will a list of the elements that were targeted at this step
        this.eventsArray = eventsArray;
        //this will be an array of events that happened and what order they happened in
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

class doublyLinkedList extends Node{
    constructor(){
        this.head =  null;
        this.tail = null;
    }
    //add item
    add(intArray,targetedInts,eventsArray){
        
        //create an instance of our node using these parameters
        let node = new Node(intArray,targetedInts,eventsArray);
        
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
    //setters
        //set first
    setHead(node){
        this.head = node;
    }
        //set last
    setTail(node){
        this.tail = node;
    }
}































