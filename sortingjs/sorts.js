import { BarDisplay } from "./sortdisplay.js";

export { SortFactory,
    SelectionSort };
//



// factory class
function SortFactory() {
}
// type: string, initarray: array of comparable objects
SortFactory.prototype.createSort = function(type, initarray, targetDivID) {
    let sort;
    switch(type) {
        case 'selection':
            sort = new SelectionSort(new BarDisplay(initarray, targetDivID));
            break;
        case 'bubble': // NOTE: THESE TYPES ARE STILL TENTATIVE AND COULD CHANGE IF NEED BE
            break;
        case 'merge':
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


// function applyGeneralGetters(sort) {
//     let classPrototype = sort.__proto__;
//     classPrototype =;
// }
// function applyGeneralGetters(sortType) {
//     sortType.prototype.getElems = function() {
//         return this.disp.elems;
//     }
//     sortType.prototype.getElems = function() {
//         return this.disp.elems;
//     }
// }
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


function SelectionSort(displayObj) {
    // general variables
    this.disp = displayObj;
    this.elems = displayObj.elems; // note to implementations: treat this as READ-ONLY
    // Note: I'm using strings because: apparently the undefined object could be reassigned to something not actually undefined, because JavaScript's loose type checking is janky.
    this.timer = 'undefined';
    this.timing = 1000;
    // implementation-specific variables
    this.gradualIndex = 0; // for as-it-goes
    this.searchingIndex = 0; // for each gradualIndex, this finds the smallest
    this.curSearched = 0;
}
// releases appropriate resources and tells the display to clean itself up too
SelectionSort.prototype.cleanup = function () {
    this.disp.cleanup();
    delete this.disp;
}
// SelectionSort.prototype.start = function() {
//     this.timer = setInterval(() => {
//         // console.log("the 'this' inside SelectionSort.start's lambda: " + this);
//         console.log(this);
//     }, 400);
// }
// SelectionSort.prototype.pause = function() {
//     clearInterval(this.timer);
// }
applyCommonFunctions(SelectionSort);


// function BubbleSort(display) {
//     this.disp = display;
// }
// applyGeneralGetters(BubbleSort);

// TODO etc.
