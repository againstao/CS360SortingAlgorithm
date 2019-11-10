import { BarDisplay, actionMoveIndicator, actionSwapIndices,
    populateJavaCode, highlightCodeDiv } from "./sortdisplay.js";

export { SortFactory,
    SelectionSort };
//



// factory class
function SortFactory() {
}
// type: string, initarray: array of comparable objects
SortFactory.prototype.createSort = function(type, initarray, targetDivID, javaDivID) {
    let sort;
    switch(type) {
        case 'selection':
            sort = new SelectionSort(new BarDisplay(initarray, targetDivID, javaDivID));
            break;
        case 'insertion':
            break;
        case 'merge':
            break;
        case 'bubble': // NOTE: THESE TYPES ARE STILL TENTATIVE AND COULD CHANGE IF NEED BE
            break;
        case 'heap':
            break;
        case 'bubble':
            break;
        case 'quick':
            break;
    }
    // applyGeneralGetters(sort);
    return sort;
}


// ======================
//  SORT IMPLEMENTATIONS
// ======================

// Sorts should have start(), pause(), nextStep(), undoStep(), restart()
// TODO: ALSO sorts should have a cleanup() to make way for new sorts in the same div;
//      the cleanup() will likely pass it on to the internal display object

// a utility function for redundancy removal; all sorting impls should have these functions
function applyCommonFunctions(aType) {
    aType.prototype.start = function() {
        this.timer = setInterval(() => {
            // console.log("the 'this' inside SelectionSort.start's lambda: " + this);
            console.log(this);
        }, this.timing);
    }
    aType.prototype.currentlyAuto = function() {
        return (this.timer !== 'undefined'); // check if there's a timer being tracked
    }
    aType.prototype.pause = function() {
        if(this.timer !== 'undefined') {
            clearInterval(this.timer);
        }
        this.timer = 'undefined'; // set it back to pseudo-undefined
    }
    aType.prototype.setTiming = function(millis) {
        const wasRunning = this.currentlyAuto(); // for auto-resuming purposes
        this.pause();
        this.timing = millis || this.timing;
        if(wasRunning) { // resume it, if applicable
            this.start();
        }
    }
}

const codeSS = [
    "public static void selectionSort(int[] array) {",
    "   I made this line really long just for testing purposes abcdefghijklm nopqrstuvwxyz 1234567890",
    // "   int indexOfSmallest = 0;",
    // "   int searchingIndex = 1;",
    "   for (int i = 0; i < array.length-1; i++) {",
    "       int small = i;",
    "       int search = i+1;",
    "       while (search < array.length) {",
    "           if (array[search] < array[small]) {",
    "               small = search;",
    "           }",
    "           search++;",
    "       }",
    "       int temp = array[small];",
    "       array[small] = array[search];",
    "       array[search] = temp;",
    "   }",
    "}"
];
function SelectionSort(displayObj) {
    populateJavaCode(displayObj, codeSS);
    // general variables
    this.disp = displayObj;
    this.elems = displayObj.elems; // note to implementations: treat this as READ-ONLY
    this.codedivs = displayObj.codedivs; // also treat this as READ-ONLY
    // Note: I'm using strings because: apparently the undefined object could be reassigned to something not actually undefined, because JavaScript's loose type checking is janky.
    this.timer = 'undefined';
    this.timing = 1000;
    // implementation-specific variables
    this.gradualIndex = 0; // for as-it-goes
    this.searchingIndex = 0; // for each gradualIndex, this finds the smallest
    this.curSearched = 0;
    // setup index pointers
    //TODO highlight elems
    highlightCodeDiv(this.codedivs, [2,3]);
}
SelectionSort.prototype.code = codeSS;
// releases appropriate resources and tells the display to clean itself up too
SelectionSort.prototype.cleanup = function () {
    delete this.codedivs;
    this.disp.cleanup();
    delete this.disp;
}
applyCommonFunctions(SelectionSort);
SelectionSort.prototype.nextStep = function() {
    // TODO develop the java code first? Then base the stuff off of each line(s)
}


// function BubbleSort(display) {
//     this.disp = display;
// }
// applyGeneralGetters(BubbleSort);

// TODO etc.
