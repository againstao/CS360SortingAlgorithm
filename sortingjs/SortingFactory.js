import { DoublyLinkedList } from "./linkedList.js";
import { actionSwapIndices } from "./sortdisplay.js";
export { SortingFactory, Insertion, Bubble, Selection, Merge, Quick, Heap }
class SortingFactory {
    constructor(type, list) {
        let listcopy = list.slice(); // copy the list in memory
        this.create = this.sortingInstance(type, listcopy);
        //returns an object of sort based off the type and list
        this.unsortedList = list;
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
        this.linkedList.add('start',this.list.slice(),1);

        this.linkedList.add('check',this.list.slice(),3);

        if (this.list.length <= 1) {
            this.linkedList.add('end',this.list.slice(),5);
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
                
                }
                this.linkedList.add('comparator',minIndex,20);

            }
            let smallerNumber = this.list[indexStart];
            this.list[indexStart] = this.list[minIndex];
            this.list[minIndex] = smallerNumber;
            this.linkedList.add('swap',[minIndex,indexStart],27);
            
        }

       // this.linkedList.add('end',minIndex,29);

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

        this.linkedList.add('start', this.list.slice(), 1);
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
        this.list = list;
        this.linkedList = new DoublyLinkedList();
    }

    //the sorting instance of the respective class
    sort() {

        this.linkedList.add('check',this.list.length,3);

        //check if the array is a size of one if so just return the array
        if(this.list.length-1 <= 0){
            this.linkedList.add('end',this.list.length,5);
            return this.list;
        } else {
            let temp = this.mergeSort(this.list);
            return temp;
        }

        //divide down the array until we get to one
        //call the subMerge

    }

    mergeSort(currentArray){
        //determines the middlePoint
        let middlePoint = Math.floor((currentArray.length-1)/2);
        //gives the spilting index to the linked list
        this.linkedList.add('split',middlePoint,20);

        //determines the leftSubarray
        let leftSubArray = currentArray.slice(0,middlePoint+1);
        this.linkedList.add('highlightSubArray',[0,middlePoint+1],23);
        //console.log('leftsubarray' + leftSubArray);

        //determines the rightSubarray
        let rightSubArray = currentArray.slice(middlePoint+1,currentArray.length);
        this.linkedList.add('highlightSubArray',[middlePoint+1,currentArray.length-1],26);

        //if the current array is at least 2 elements long
        if(currentArray.length-1 > 0){
            //call the same function again and recursively split it
            leftSubArray = this.mergeSort(leftSubArray);
            rightSubArray = this.mergeSort(rightSubArray);
        } 
        
        return this.merge(leftSubArray,rightSubArray);
            

    }//takes in the array and divides it down until each array only has one element

    merge(leftSubArray, rightSubArray) {

        let currentArray = [];
        this.linkedList.add('additionalArray',currentArray,39);
        
        this.linkedList.add('comparator',leftSubArray[0],43);

        this.linkedList.add('comparee', rightSubArray[0],43);

        //while both sub arrays have elements
        while(leftSubArray.length > 0 && rightSubArray.length > 0){
            
            //if the first element in the left subarray is smaller than our equal to the first element in the right sub array
            if(leftSubArray[0] <= rightSubArray[0]){

                this.linkedList.add('addToArray',leftSubArray[0],44);

                this.linkedList.add('swap',leftSubArray[0],rightSubArray[0],69);

                //take the leftSubArray[0] and adds it to the currentArray
                currentArray.push(leftSubArray[0]);

                //remove the element from the leftSubArray
                leftSubArray.shift();

                this.linkedList.add('remove',leftSubArray[0],47);

                //update the comparator and the comparee
                this.linkedList.add('comparator',leftSubArray[0],43);
                this.linkedList.add('comparee', rightSubArray[0],43);

            }

            //else take the rightSubArray[0] and add it 
            else{
                //take the rightSubArray[0] and adds it to the currentArray
                currentArray.push(rightSubArray[0]);

                //remove the element from the rightSubArray
                rightSubArray.shift();

                this.linkedList.add('remove',rightSubArray[0],56);

                //update the comparator and the comparee
                this.linkedList.add('comparator',leftSubArray[0],43);
                this.linkedList.add('comparee', rightSubArray[0],43);
            }

        }

        //at this point either leftSubArray or rightSubArray

        //while the leftSubArray has elements, remove them and throw them into our current array
        while(leftSubArray.length-1 >= 0){

                this.linkedList.add('addToArray',leftSubArray[0],63);

                //take the leftSubArray[0] and adds it to the currentArray
                currentArray.push(leftSubArray[0]);

                //remove the element from the leftSubArray
                leftSubArray.shift();

                this.linkedList.add('remove',leftSubArray[0],65);

                //update the comparator
                this.linkedList.add('comparator',leftSubArray[0],43);
        }

        //while the rightSubArray has elements, remove them and throw them into our current array
        while(rightSubArray.length-1 >= 0){

            this.linkedList.add('addToArray',rightSubArray[0],69);

            //take the leftSubArray[0] and adds it to the currentArray
            currentArray.push(rightSubArray[0]);

            //remove the element from the leftSubArray
            rightSubArray.shift();

            this.linkedList.add('remove',rightSubArray[0],71);

            //update the comparator
            this.linkedList.add('comparator',rightSubArray[0],43);
    }

    this.linkedList.add('sortedSubArray',currentArray,74);

    return currentArray;
      
    }//compares and combines the subarrays

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

        this.linkedList.add('check', this.list.slice(), 3);

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
        this.linkedList.add('start', this.list.slice(), 1);

        this.list = this.buildMaxHeap();
        //build the heap, check if the array size is <= 1 is done there so didnt include it here

        this.linkedList.add('check', this.list.slice(), 41);

        if (this.list.length <= 1) {
            this.linkedList.add('end', this.list.slice(), 44);
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
        this.linkedList.add('start', this.list.slice(), 1);

        //see if the list length is less than or equal to one if so just return it
        if (this.list.length <= 1) {
            return this.list;
        }

        this.linkedList.add('check', this.list.length, 3);

        //default arewedone to false so we will scan through the list at least once
        let arewedone = false;
        
        this.linkedList.add('arewedone', this.list.length, 5);
        
        while (arewedone == false) {

            let didwechangeanything = false;
            //set a throw away variable to check if we are done, default to false

            for (let index = 0; index <= this.list.length - 1; index++) {
                
                this.linkedList.add('comparator', index, 5);
                this.linkedList.add('comparee', index+1, 5);

                if (this.list[index] > this.list[index + 1]) {
                    let temp = this.list[index];
                    this.list[index] = this.list[index + 1];
                    this.list[index + 1] = temp;

                    didwechangeanything = true;
                    //if we swap anything make didwechange true

                    this.linkedList.add('swap', [index, index + 1], 7);
                    
                }//if statment compare the current element to the next one

            }//inner for loop selects the neighbors

            this.linkedList.add('check', this.list, 7);

            //see if we changed anything
            if(didwechangeanything == false){
                arewedone = true;
                this.linkedList.add('doneSorting', this.list, 10);
            }

        }//while loop repeats the algorithim as long as didwechangeanything == true
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
      
    sort() {

        this.linkedList.add('check',this.list.length,3);

        if(this.list.length-1 <= 0){
            this.linkedList.add('end',this.list.length,5);
            return this.list;
        }//check to see if the list has none or one element if so just returns the list

        return this.partitionSort(0,this.list.length-1);

    }

    //sorts the quick sorts partitions using the passed in values of the arraystart locations and arrayend locations
    partitionSort(arrayStart,arrayEnd){

        let pivotIndex = this.medianOfThree(arrayStart,arrayEnd);
        //declare a pivot index from the array

        //all the linked list stuff for the median of three is handled inside that function

        this.list = this.swap(this.list,pivotIndex,arrayEnd);
        //move the current pivot to the end of the array to get it out of the way
        this.linkedList.add('swap',[pivotIndex,arrayEnd],12);
        this.linkedList.add('comparator',arrayEnd,12);

        let itemFromLeftIndex=arrayStart;
        //item from left is elements that are larger than the pivot on the left side of the pivot
        this.linkedList.add('comparee',itemFromLeftIndex,5);

        let itemFromRightIndex=arrayEnd-1;
        //item from right index is elements that are smaller than the pivot on the right side
        this.linkedList.add('comparee',itemFromRightIndex,5);

        while(itemFromLeftIndex <= itemFromRightIndex){
            
            if(this.list[itemFromLeftIndex] <= this.list[arrayEnd]){
                itemFromLeftIndex++;
                this.linkedList.add('comparee',itemFromLeftIndex,5); 
            }//if the item from left is less than our equal to our pivot move to the right

            else if(this.list[itemFromRightIndex] > this.list[arrayEnd]){ 
                itemFromRightIndex--;
                this.linkedList.add('comparee',itemFromRightIndex,5); 
            }//if the item from right is more than our pivot move to the left

            else{
                this.list = this.swap(this.list,itemFromLeftIndex,itemFromRightIndex);
                //swap the biggeritemfromleft with the smalleritemfromright

                this.linkedList.add('swap',[itemFromLeftIndex,itemFromRightIndex],5);
                
                itemFromLeftIndex++;
                itemFromRightIndex--;
                //update the new locations

                this.linkedList.add('comparee',itemFromLeftIndex,5);
                this.linkedList.add('comparee',itemFromRightIndex,5);
                

            }//swap itemFromLeft with itemFromRight
            
        }//while our itemfromleftindex is smaller than our itemfromrightindex value

        this.list = this.swap(this.list,itemFromLeftIndex,arrayEnd);
        //put the pivot back in the correct location

        this.linkedList.add('swap',[itemFromLeftIndex,arrayEnd],5); 
        
        pivotIndex = itemFromLeftIndex; 
        //update the pivot location 

        this.linkedList.add('pivotcorrectlocation',pivotIndex,5); 
        
        if(pivotIndex != arrayEnd){
            //call sort again but with our pivot as the starting index and the end

            this.partitionSort(pivotIndex+1,arrayEnd);
        }//if our pivot location does not equal our last index
        
        if(pivotIndex != arrayStart){
            //call sort again but with our arrayStart being the same while or pivot is at the end
            this.partitionSort(arrayStart,pivotIndex-1);
        }

        this.linkedList.add('end',this.list,5); 
        return this.list;
    }

    //finds median value from the array[firstindex], array[middleindex], and array[lastindex], and returns the index at which it is located
    medianOfThree(array){
        
        let lastindex = array.length-1;
        let firstindex = 0;
        let middleindex = Math.floor(((array.length-1)/2));

        if(array.length == 0){
            return null;
        }//check to see if the array has no elements if so just return null

        else if(((array[firstindex] <= array[middleindex]) && (array[firstindex] >= array[lastindex])) || ((array[firstindex] >= array[middleindex]) && (array[firstindex] <= array[lastindex])))  {
            return firstindex;
        }//see if the first array element is smaller than and bigger than either of the elements

        else if(((array[middleindex] <= array[firstindex]) && (array[middleindex] >= array[lastindex])) || ((array[middleindex] >= array[firstindex]) && (array[middleindex] <= array[lastindex]))) {
            return middleindex;
        }//see if the middle array element is smaller than and bigger than either of the elements

        else{
            return lastindex;
        }//else return the last index

        /* note this works so long as the first,last,and middle element are distinct values
            if any of them are equal it will simple default to giving the first duplicate element
        */

    }

    //finds the median value in this.list using the startIndex, and the endIndex as the parameters for where it searches
    medianOfThree(startIndex,endIndex){

        this.linkedList.add('check',this.list,5);

        if(startIndex-endIndex == 0){
            this.linkedList.add('return',startIndex,7);
            return startIndex;
        }//check to see if the array has only one element if so just return that value

        let middleIndex = (Math.floor(((endIndex-startIndex)/2))) + startIndex;
        //determine the middleindex

        //this.linkedList.add('comparee',startIndex,5);
        //this.linkedList.add('comparee',endIndex,5);
        //this.linkedList.add('comparee',middleIndex,9);

        //issue here with the animation cant declare multiple comparee statements

        if(((this.list[startIndex] <= this.list[middleIndex]) && (this.list[startIndex] >= this.list[endIndex])) || ((this.list[startIndex] >= this.list[middleIndex]) && (this.list[startIndex] <= this.list[endIndex])))  {
            this.linkedList.add('pivot',startIndex,9);
            //maybe add a clear comparee event?
            return startIndex;
        }//see if the first array element is smaller than and bigger than either of the elements

        else if(((this.list[middleIndex] <= this.list[startIndex]) && (this.list[middleIndex] >= this.list[endIndex])) || ((this.list[middleIndex] >= this.list[startIndex]) && (this.list[middleIndex] <= this.list[endIndex]))) {
            this.linkedList.add('pivot',middleIndex,9);
            //maybe add a clear comparee event
            return middleIndex;
        }//see if the middle array element is smaller than and bigger than either of the elements

        else{
            this.linkedList.add('pivot',endIndex,9);
            return endIndex;
        }//else return the last index

        /* note this works so long as the first,last,and middle element are distinct values
            if any of them are equal it will simple default to giving the first duplicate element
        */

    }

    //swaps array[indexone] with array[indextwo] and returns the array
    swap(array,indexone,indextwo){
        let temp =  array[indexone];
        array[indexone] = array[indextwo];
        array[indextwo] = temp;

        return array;
    }

    getLinkedList() {
        return this.linkedList;
    }

    getList() {
        return this.list;
    }

       
    }//done but linked list hasn't been unit tested


//sorts we might look into adding
//pigeon hole sort
//Tournament sort
//Gravity sort
//Counting sort

