import {Node, DoublyLinkedList } from "./linkedList.js";
export {SortingFactory,Insertion}
class SortingFactory {
    constructor(type,list){
        this.create = sortingInstance(type,list);
        //returns an object of sort based off the type and list
        this.unsortedList = this.create.getList();
        //gets the unsorted list
        this.sortedList = this.create.sort();
        //returns the final sorted array when it is sorted
        this.recordOfSort = this.create.getLinkedList();
        //returns all the records that the linked list created 
    }
    
    sortingInstance(type, list) {
        switch(type){
            case 'selection':
                return new Selection(list)
                break;
            case 'insertion':
                return new Insertion(list);
                break;
            case 'merge':
                return new Merge(list);
                break;
            case 'heap':
                return new Heap(list);
                break;
            case 'bubble':
                return new Bubble(list);
                break;
            case 'quick':
                return new Quick(list);
                break;
        }

    }//in a programming since a factory is just an object that creates
    //or manufactures different objects

    


}//sorting factory


//all the different instances of our objects
class Selection {
    constructor(list) {
        this.type = 'selection'
        this.sortedList = sort(list);
    }


    //the sorting instance of the respective class
    sort(list) {

    }


}

class Insertion {
    constructor(list) {
        this.type = 'insertion';
        this.list = list;
        this.linkedList = new DoublyLinkedList();
        //our linked list is a record from start to finish of
        //what the sorting algorithim did
      
    }

    //the sorting instance of the respective class, this generates everything from step 1 to step x
    sort() {
        this.linkedList.add('start',this.list,1);
        //save our starting point to the linked list
        //save the list as the data we will pass to the animation generator
        //save 1 as the jsline

        if(this.list.length === 1){
            return this.list;
        }//check to see if the array is only 1 long

        for (let comparator = 1; comparator < this.list.length ; comparator++) {
        
        this.linkedList.add('index',comparator,3);
        //save the first index to the linked list
        //save the indice as the data we will pass to the animation generator
        //save 3 as the jsline
          
           let comparee = comparator-1;
           //assign j equal to i

        this.linkedList.add('index',comparee,5);
        //save our smaller index to the linked list
        //save the indice as the data we will pass to the animation generator
        //save 3 as the jsline

           while(comparee>=0 && this.list[comparee] > this.list[comparator]){
                //if our comparee is greater than our index and 
                
                this.linkedList.add('compare',[comparee,comparator],7);
    
            let temp = this.list[comparee];
                //save the larger element in a temp variable
            this.list[comparee] = this.list[comparator];
                //overwrite the larger one with the smaller one, so bigger values float right
            this.list[comparator] = temp;
                //FUNCTION save event splice (we move it in front of the element that is smaller)
                this.linkedList.add('swap',[comparator,comparee],9);
            comparee--;
            comparator--;
            //move both are comparee and comparator down one

                this.linkedList.add('movesecondindex',comparee,11);
           }//while

        }//for
            
        return this.list;
    }//sort 
    //hasnt been unit tested

    getLinkedList(){
        return this.linkedList;
    }

    getList(){
        return this.list;
    }

}

class Merge {
    constructor(list) {
        this.type = 'merge';
        this.sortedList = list;
    }

    //the sorting instance of the respective class
    sort() {

    }

}

class Heap {
    constructor(list) {
        this.type = 'heap';
        this.sortedList = list;
    }

    //the sorting instance of the respective class
    sort() {

    }

}

class Bubble {
    constructor(list) {
        this.type = 'bubble';
        this.sortedList = list;
    }


    //the sorting instance of the respective class
    sort() {

    }


}

class Quick {
    constructor(list) {
        this.type = 'quick';
        this.sortedList = list;
    }


    //the sorting instance of the respective class
    sort() {

    }


}
