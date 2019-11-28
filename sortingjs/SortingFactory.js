import { DoublyLinkedList } from "./linkedList.js";
import { actionSwapIndices } from "./sortdisplay.js";
export { SortingFactory, Insertion, Bubble, Selection, Merge, Quick, Heap }
class SortingFactory {
    constructor(type, list) {
        this.create = sortingInstance(type, list);
        //returns an object of sort based off the type and list
        this.unsortedList = this.create.getList();
        //gets the unsorted list
        this.sortedList = this.create.sort();
        //returns the final sorted array when it is sorted
        this.recordOfSort = this.create.getLinkedList();
        //returns all the records that the linked list created 
    }

    sortingInstance(type, list) {
        switch (type) {
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
//SELECTION SORT

class Selection {
    constructor(list) {
        this.type = 'selection'
        this.list = list;
        this.linkedList = new DoublyLinkedList();
    }


    //the sorting instance of the respective class
    sort() {

        if (this.list.length <= 1) {
            return this.list;
        }//check to see if the list is only one element long or shorter

        for (let indexStart = 0; indexStart <= this.list.length - 1; indexStart++) {

            let minIndex = null;

            for (let indexIterator = indexStart; indexIterator <= this.list.length - 1; indexIterator++) {
                if (this.list[indexIterator] < this.list[minIndex] || minIndex === null) {
                    minIndex = indexIterator;//searching for lowest index
                }
            }
            let smallerNumber = this.list[indexStart];
            this.list[indexStart] = this.list[minIndex];
            this.list[minIndex] = smallerNumber;
        }
        return this.list;
    }//sort

    getLinkedList() {
        return this.linkedList;
    }

    getList() {
        return this.list;
    }

}//done but hasnt been unit tested or linked list hasnt been created

//INSERTION SORT

class Insertion {
    constructor(list) {
        this.type = 'insertion';
        this.list = list;
        this.linkedList = new DoublyLinkedList();
        //our linked list is a record from start to finish of what the sorting algorithim did

    }

    //the sorting instance of the respective class, this generates everything from step 1 to step x
    sort() {

        this.linkedList.add('start', this.list, 1);
        //save the event, the data that involves this event, and the line of JS

        if (this.list.length <= 1) {
            this.linkedList.add('end', this.list.length, 3);
            //save the event, the data that involves this event, and the line of JS
            return this.list;
        }//check to see if the array is only 1 long or lower

        this.linkedList.add('check', this.list.length, 5);
        //save the event, the data that involves this event, and the line of JS

        for (let comparator = 1; comparator < this.list.length; comparator++) {

            this.linkedList.add('index', comparator, 7);
            //save the event, the data that involves this event, and the line of JS

            let comparee = comparator - 1;
            //assign j equal to i

            this.linkedList.add('index', comparee, 9);
            //save the event, the data that involves this event, and the line of JS

            while (comparee >= 0 && this.list[comparee] > this.list[comparator]) {
                //if our comparee is bigger than the comparator

                this.linkedList.add('compare', [comparee, comparator], 11);
                //save the event, the data that involves this event, and the line of JS

                let temp = this.list[comparee];
                //save the larger element in a temp variable
                this.list[comparee] = this.list[comparator];
                //overwrite the larger one with the smaller one, so bigger values float right
                this.list[comparator] = temp;

                this.linkedList.add('swap', [comparator, comparee], 13);
                //save the event, the data that involves this event, and the line of JS
                comparee--;
                comparator--;
                //move both are comparee and comparator down one

                this.linkedList.add('index', comparee, 15);
                this.linkedList.add('index', comparator, 16);
            }//while

        }//for
        this.linkedList.add('end', this.list, 19);
        return this.list;
    }//sort 
    //hasnt been unit tested

    getLinkedList() {
        return this.linkedList;
    }

    getList() {
        return this.list;
    }

}//done but hasnt been unit tested

class Merge {
    constructor(list) {
        this.type = 'merge';
        this.sortedList = list;
        this.linkedList = new DoublyLinkedList();
    }

    //the sorting instance of the respective class
    mergeSort() {
        const sortedArray = [...list]; //new array with content of list.
        const length = sortedArray.length;

        //Base Case
        //If there are 0 or 1 elements, stop splitting.
        if (length < 2) {
            return list;
        }

        const mid = Math.floor(length / 2); //Math.floor rounds down.
        const left = sortedArray.slice(0, mid); // Left sub-array [0] to [mid-1].
        const right = sortedArray.slice(middle)// Right sub-array from index[middle] to [length-1];

        //Recursive Step
        return merge(mergeSort(left), mergeSort(right));
    }

    merge(left, right) {
        const aux = []; //Auxillary array
        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                aux.push(left.shift());
            }//If the first value in left sub-array, remove and add to auxillary array.
            else {
                aux.push(right.shift());
            }//else, remove and add first value in right sub-array to auxillary array.
            return aux.concat(left, right);//Merge remaining items of left and right sub-arrays with the new array. 

        }
    }//Helper function

    getLinkedList() {
        return this.linkedList;
    }

    getSortedList() {
        return this.sortedList;
    }
}

class Heap {
    constructor(list) {
        this.type = 'heap';
        this.list = list;
        this.linkedList = new DoublyLinkedList();
    }

    buildMaxHeap() {

        for (let indexIterator = 0; indexIterator <= this.list.length - 1; indexIterator++) {

            let leftChild = (indexIterator * 2) + 1;
            let rightChild = (indexIterator * 2) + 2;

            //if the left child is smaller than the parent    
            if (this.list[indexIterator] < this.list[leftChild] && leftChild <= this.list.length - 1) {
                let temp = this.list[leftChild];
                this.list[leftChild] = this.list[indexIterator];
                this.list[indexIterator] = temp;

                indexIterator = 0;
            }//swap them

            //if the right child is smaller than the parent  
            if (this.list[indexIterator] < this.list[rightChild] && rightChild <= this.list.length - 1) {
                let temp = this.list[rightChild];
                this.list[rightChild] = this.list[indexIterator];
                this.list[indexIterator] = temp;

                indexIterator = 0;
            }//swap them

        }
        return this.list;

    }//builds the heap so that the largest element is on top 

    heapify(index, list) {

        let leftChild = index * 2 + 1;
        let rightChild = index * 2 + 2;

        //if the left child is bigger than the current element we are examining
        if (this.list[leftChild] > this.list[index] && leftChild <= this.list.length - 1) {

            let temp = this.list[leftChild];
            this.list[leftChild] = this.list[index];
            this.list[index] = temp;
            //swap them

            this.heapify(leftChild, list);
            //call heapify again but with the index for the left child since we swapped them

        }//swap them than call heapify again  

        //if the right child is bigger than the current element we are examining
        if (this.list[rightChild] > this.list[index] && rightChild <= this.list.length - 1) {

            let temp = this.list[rightChild];
            this.list[rightChild] = this.list[index];
            this.list[index] = temp;
            //swap them call heapify again

            this.heapify(rightChild, list);
            //call heapify again but with the index for the right child since we swapped them
        }

        else {
            return list;
        }//base case neither the left nor the right child are bigger than the current value
         //

    }//assume that we only have the top element out of place in the heap
    //goes through based on that and sorts it until it is in a correct spot

    //the sorting instance of the respective class
    sort() {
        this.list = this.buildMaxHeap();
        //build the heap
        
        let currentArray=[];
        //make a default array

        
        while(this.list.length > 0){

            currentArray.unshift(this.list[0]);
            //unshift function adds the max element to our currentArray 

            this.list.shift();
            //shift function removes the first element in the array,which in a heap is our max

            this.heapify(0,this.list);
            //recrusively scan to see if our new max is the correct one
        }
        
        
        //declare our max as the top of the array
        //swap the top of the heap with the bottom

        //place the top of the array at the end of a new array
        //rebuild the heap
        //assign the currentArray we have built as the new list
        this.list = currentArray; 
        return this.list;
    }//sort




}//class heap: Minor issue with it source from where i based my code https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-3.php



class Bubble {
    constructor(list) {
        this.type = 'bubble';
        this.list = list;
        this.linkedList = new DoublyLinkedList();
    }


    //the sorting instance of the respective class
    sort() {
        this.linkedList.add('start', this.list, 1);
        //save the event, the data for that event, and the line of javascript code

        if (this.list.length <= 1) {
            return this.list;
        }//see if the list length is less than or equal to one if so just return it
        this.linkedList.add('check', this.list.length, 3);
        //save the event, the data for that event, and the line of javascript code

        let arrayLength = this.list.length;
        //set the arrayLength equal to the length of the elements in the list
        this.linkedList.add('maxtorepeat', this.list.length, 5);
        //save the event, the data for that event, and the line of javascript code
        for (arrayLength; arrayLength > 0; arrayLength--) {

            for (let index = 0; index <= this.list.length - 1; index++) {

                this.linkedList.add('comparator', index, 5);
                //save the event, the data for that event, and the line of javascript code
                this.linkedList.add('comparee', index, 5);
                //save the event, the data for that event, and the line of javascript code

                if (this.list[index] > this.list[index + 1]) {
                    let temp = this.list[index];
                    this.list[index] = this.list[index + 1];
                    this.list[index + 1] = temp;

                    this.linkedList.add('swap', [index, index + 1], 7);
                    //save the event, the data for that event, and the line of javascript code

                }//if statment compare the current element to the next one
            }//inner for loop selects the neighbors
        }//outter for loop repeats the algorithim for n times
        this.linkedList.add('end', this.list, 10);

        return this.list;
    }

    getLinkedList() {
        return this.linkedList;
    }

    getList() {
        return this.list;
    }
}//done but hasn't been unit tested or linked list hasnt been created

class Quick {
    constructor(list) {
        this.type = 'quick';
        this.list = list;
        this.linkedList = new DoublyLinkedList();
    }


    //the sorting instance of the respective class
    sort() {

        if (this.list.length <= 1) {
            return this.list;
        }//check to see if the list is = to or smaller than 1
        //choose a pivot point here were using the median of three principle
    }

    getLinkedList() {
        return this.linkedList;
    }

    getList() {
        return this.list;
    }

}
