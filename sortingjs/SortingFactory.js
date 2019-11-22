import {Node, DoublyLinkedList } from "./linkedList.js";
export {Insertion,SortingFactory}
class SortingFactory {
    constructor(type,list){
        this.create = sortingInstance(type,list);
        //returns an object of sort based off the type and list
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

        for (let i = 1; i < this.list.length - 1; i++) {
        
        this.linkedList.add('index',i,3);
        //save the first index to the linked list
        //save the indice as the data we will pass to the animation generator
        //save 3 as the jsline
          
           let j = i;
           //assign j equal to i

        this.linkedList.add('index',j,5);
        //save our smaller index to the linked list
        //save the indice as the data we will pass to the animation generator
        //save 3 as the jsline

           while(j>0 && this.list[j-1] > this.list[j]){
                //while j is greater than 0, and the previous element is greater than the current
                
                this.linkedList.add('compare',[j,j-1],7);
    
            let temp = this.list[j];
                //save the smaller element in a temp variable
            this.list[j] = this.list[j-1];
                //overwrite the smaller one with the larger one, so bigger values float right
            this.list[j-1] = temp;
                //FUNCTION save event splice (we move it in front of the element that is smaller)
                this.linkedList.add('swap',[j,j-1],9);
            j--;
                this.linkedList.add('movesecondindex',j-1,11);
           }//while

        }//for
            
        
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
