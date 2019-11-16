import { BarDisplay, actionMoveIndicator, actionSwapIndices,
    populateJavaCode, highlightCodeDiv } from "./sortdisplay.js";
import { StateQueue } from "./statequeue.js";

export { SortFactory,
    SelectionSort };
//



// factory class
function SortFactory() {
}
// the parameters:  type: string, initarray: array of comparable objects
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



// ========================
//   SORT IMPLEMENTATIONS
// ========================

// Sorts should have start(), pause(), nextStep(), undoStep(), restart()
// TODO: ALSO sorts should have a cleanup() to make way for new sorts in the same div;
//      the cleanup() will  pass it on to the internally referenced display object


// a utility function for redundancy removal; all sorting impls should have these functions
function applyCommonFunctions(aType) {
    aType.prototype.start = function() {
        this.timer = setInterval(() => {
            this.nextStep();
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


// >>>>>
//  >>>>>  SELECTION SORT
// >>>>>

const CODE_SS = [
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
const IND_SS_SORT = "sort"; // SelectionSort's Indicator's ID & name
const IND_SS_SEARCH = "search"; // another of SS's Indicator's ID & name
const IND_SS_SMALL = "small"; // another of SS's Indicator's ID & name

function SelectionSort(displayObj) {
    populateJavaCode(displayObj, CODE_SS);
    // general variables
    this.disp = displayObj;
    this.elems = displayObj.elems; // note to implementations: treat this as READ-ONLY
    this.codedivs = displayObj.codedivs; // also treat this as READ-ONLY
    // Note: I'm using strings because: apparently the undefined object could be reassigned to something not actually undefined, because JavaScript's loose type checking is janky.
    this.timer = 'undefined';
    this.timing = 1000;
    // implementation-specific variables
    this._state = 'loopsearch';
    this.sortIndex = 0; // for as-it-goes
    this.searchingIndex = 0; // for each gradualIndex, this finds the smallest
    this.smallIndex = 0; // tracks the index of the smallest elem found
    this.curSearched = 0;
    // setup index pointers
    //TODO highlight elems
    actionMoveIndicator(this.disp, IND_SS_SORT, this.sortIndex);
    actionMoveIndicator(this.disp, IND_SS_SEARCH, this.searchingIndex);
    actionMoveIndicator(this.disp, IND_SS_SMALL, this.smallIndex);
    highlightCodeDiv(this.codedivs, [2,3,5,7,420]);
}
SelectionSort.prototype.code = CODE_SS;
// releases appropriate resources and tells the display to clean itself up too
SelectionSort.prototype.cleanup = function () {
    delete this.codedivs;
    delete this.elems;
    this.disp.cleanup();
    delete this.disp;
}
applyCommonFunctions(SelectionSort);
SelectionSort.prototype.nextStep = function() {
    // TODO develop the java code first? Then base the stuff off of each line(s)
    // switch(this._state) {
    //     case 'loopsearch': // startup another loop
    //         this.sortIndex += 1;
    //         this.smallIndex = this.sortIndex;
    //         this.searchingIndex = this.sortIndex + 1;
    //         actionMoveIndicator(this.disp, IND_SS_SORT, this.sortIndex);
    //         actionMoveIndicator(this.disp, IND_SS_SEARCH, this.searchingIndex);
    //         actionMoveIndicator(this.disp, IND_SS_SMALL, this.smallIndex);
    //         highlightCodeDiv(this.codedivs, [3,4,5]);
    //         // TODO set a description in the java code desc div!!!
    //         this._state = 'incsearch';
    //         break;
    //     case 'incsearch': // in the middle of searching; increment it
    //         //
    //         if () {
    //             this._state = 'loopsearch';
    //         }
    //         //
    //         if () {
    //             this._state = 'checksmall';
    //         }
    //         break;
    //     case 'checksmall': // check if small is small
    //         this._state = 'incsearch';
    //         break;
    //     default:
    //         console.error('Unexpected state "'+this._state+'"! Now it\'s broke :(');
    // }
}
SelectionSort.prototype.undoStep = function() {
    // TODO develop the java code first? Then base the stuff off of each line(s)
}


// >>>>>
//  >>>>>  BUBBLE SORT
// >>>>>

// function BubbleSort(display) {
//     this.disp = display;
// }
// applyGeneralGetters(BubbleSort);

// TODO etc.
