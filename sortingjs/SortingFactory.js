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
        this.linkedList.add('start',this.list,1);

        this.linkedList.add('check',this.list,3);

        if (this.list.length <= 1) {
            this.linkedList.add('end',this.list,5);
            return this.list;
        }//check to see if the list is only one element or shorter

        for (let indexStart = 0; indexStart <= this.list.length - 1; indexStart++) {

            this.linkedList.add('iterator',indexStart,11);

            let minIndex = null;

            this.linkedList.add('minindex',minIndex,13);

            for (let indexIterator = indexStart; indexIterator <= this.list.length - 1; indexIterator++) {
                
                this.linkedList.add('comparator',minIndex,16);
                this.linkedList.add('comparee',indexIterator,18);
                
                if (this.list[indexIterator] < this.list[minIndex] || minIndex === null) {
                    minIndex = indexIterator;//searching for lowest index
                this.linkedList.add('comparator',minIndex,20);
                }

            }
            let smallerNumber = this.list[indexStart];
            this.list[indexStart] = this.list[minIndex];
            this.list[minIndex] = smallerNumber;
            this.linkedList.add('swap',minIndex,27);
        }

        this.linkedList.add('end',minIndex,29);

        return this.list;
    }//sort

    getLinkedList() {
        return this.linkedList;
    }

    getList() {
        return this.list;
    }

}//done but linked list hasnt been unit tested

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

        this.linkedList.add('check', this.list.length, 5);
        //save the event, the data that involves this event, and the line of JS

        if (this.list.length <= 1) {
            this.linkedList.add('end', this.list.length, 3);
            //save the event, the data that involves this event, and the line of JS
            return this.list;
        }//check to see if the array is only 1 long or lower


        for (let comparator = 1; comparator < this.list.length; comparator++) {

            this.linkedList.add('comparator', comparator, 7);
            //save the event, the data that involves this event, and the line of JS

            let comparee = comparator - 1;
            //assign j equal to i

            this.linkedList.add('comparee', comparee, 9);
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

                this.linkedList.add('comparee', comparee, 15);
                this.linkedList.add('comparator', comparator, 16);
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

}//done but linked list hasn't been unit tested

//MERGE SORT

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

//HEAP SORT

class Heap {
    constructor(list) {
        this.type = 'heap';
        this.list = list;
        this.linkedList = new DoublyLinkedList();
    }

    buildMaxHeap() {

        if (this.list.length <= 1) {
            return this.list;
        }//check

        this.linkedList.add('check', this.list, 3);

        for (let indexIterator = 0; indexIterator <= this.list.length - 1; indexIterator++) {

            this.linkedList.add('comparator', indexIterator, 5);

            let leftChild = (indexIterator * 2) + 1;
            let rightChild = (indexIterator * 2) + 2;

            this.linkedList.add('comparee', indexIterator, 7);
            this.linkedList.add('comparee', indexIterator, 8);

            //if the left child is smaller than the parent    
            if (this.list[indexIterator] < this.list[leftChild] && leftChild <= this.list.length - 1) {
                let temp = this.list[leftChild];
                this.list[leftChild] = this.list[indexIterator];
                this.list[indexIterator] = temp;
                this.linkedList.add('swap', [indexIterator, leftChild], 13);
                indexIterator = 0;
            }//swap them

            //if the right child is smaller than the parent  
            if (this.list[indexIterator] < this.list[rightChild] && rightChild <= this.list.length - 1) {
                let temp = this.list[rightChild];
                this.list[rightChild] = this.list[indexIterator];
                this.list[indexIterator] = temp;
                this.linkedList.add('swap', [indexIterator, rightChild], 20);
                indexIterator = 0;
            }//swap them

        }
        return this.list;

    }//builds the heap so that the largest element is on top 

    heapify(index, list) {
        this.linkedList.add('comparator', index, 22);

        let leftChild = index * 2 + 1;
        let rightChild = index * 2 + 2;

        this.linkedList.add('comparee', leftChild, 24);
        this.linkedList.add('comparee', rightChild, 25);

        if (this.list.length <= 1) {
            return this.list;
        }
        this.linkedList.add('check', rightChild, 28);

        //if the left child is bigger than the current element we are examining
        if (this.list[leftChild] > this.list[index] && leftChild <= this.list.length - 1) {

            let temp = this.list[leftChild];
            this.list[leftChild] = this.list[index];
            this.list[index] = temp;
            //swap them
            this.linkedList.add('swap', [index, leftChild], 32);

            this.heapify(leftChild, this.list);
            //call heapify again but with the index for the left child since we swapped them

        }//swap them than call heapify again  

        //if the right child is bigger than the current element we are examining
        if (this.list[rightChild] > this.list[index] && rightChild <= this.list.length - 1) {

            let temp = this.list[rightChild];
            this.list[rightChild] = this.list[index];
            this.list[index] = temp;
            //swap them 
            this.linkedList.add('swap', [index, rightChild], 37);
            this.heapify(rightChild, this.list);
            //call heapify again but with the index for the right child since we swapped them
        }

        else {
            return this.list;
        }//base case neither the left nor the right child are bigger than the current value
        //

    }//assume that we only have the top element out of place in the heap
    //goes through based on that and sorts it until it is in the correct spot

    //the sorting instance of the respective class
    sort() {
        this.linkedList.add('start', this.list, 1);

        this.list = this.buildMaxHeap();
        //build the heap, check if the array size is <= 1 is done there so didnt include it here

        this.linkedList.add('check', this.list, 41);

        if (this.list.length <= 1) {
            this.linkedList.add('end', this.list, 44);
            return this.list;
        }
        //check if the array size is less than our equal to 1


        let currentArray = [];
        //make a default array

        //while this.list still has elements in it
        while (this.list.length > 0) {

            let temp = this.list[0];
            this.list[0] = this.list[this.list.length-1];
            this.list[this.list.length-1] = temp;
            //swap the "max" with the last element in our tree

            currentArray.unshift(this.list[this.list.length-1]);
            //add the max to our new array

            this.list.pop();
            //remove the max from the end location

            this.linkedList.add('additionalarray', currentArray, 53);

            this.heapify(0, this.list);
            //recrusively scan to see if our new max is the correct one
        }//throw the max into currentArray, delete the max from this.list, and check to make sure that it works


        this.list = currentArray;
        this.linkedList.add('end', currentArray, 59);
        return this.list;
    }//sort
    
    getLinkedList() {
        return this.linkedList;
    }

    getList() {
        return this.list;
    }

}//class heap linked list hasn't been unit tested

//BUBBLE SORT

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
}//done but linked list hasn't been unit tested

//QUICK SORT

class Quick {
    constructor(list) {
        this.type = 'quick';
        this.list = list;
        this.linkedList = new DoublyLinkedList();
    }
//////////////////////////////////////////////////////////////////////////////
/* This function takes last element as pivot, 
       places the pivot element at its correct 
       position in sorted array, and places all 
       smaller (smaller than pivot) to left of 
       pivot and all greater elements to right 
       of pivot */
       partition(list, low, high) {
            let pivot = list[high];
            let i= (low-1);
            for(let j=low; j<high; j++){
                if(list[j]<pivot){
                    i++;

                    let temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
            }
            let temp = list[i+1];
            list[i+1] = list[pivot];
            list[pivot] = temp;
            return i+1;
       }

       sort() {
        while(true){ 
            if (this.list.length <= 1) {
                return this.list;
            }//check to see if the list is = to or smaller than 1
            let arrayLength = this.list.length;//set the arrayLength equal to the length of the elements in the list
            let pivot = this.list[arrayLength%arrayLength/2];
            let low=0;
            let high=0;
            for(let i=0; i<arrayLength; i++){
                if(pivot < this.list[i]){
                    low=this.list[i];
                }
                if(pivot > this.list[i]){
                    high=this.list[i];
                }
            }
            if (low < high) 
            { 
                /* pi is partitioning index, arr[pi] is  
                    now at right place */
                let pi = this.partition(this.list, low, high);
                
                // Recursively sort elements before 
                // partition and after partition 
                
            } //the sorting instance of the respective class
            
            return this.list;
            }
       }
    getLinkedList() {
        return this.linkedList;
    }

    getList() {
        return this.list;
    }

       
    }

