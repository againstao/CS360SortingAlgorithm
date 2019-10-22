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


function SelectionSort(displayObj) {
    // general variables
    this.disp = displayObj;
    this.elems = displayObj.elems; // note to implementations: treat this as READ-ONLY
    // implementation-specific variables
    this.gradualIndex; // for as-it-goes
    this.searchingIndex; // for each gradualIndex, this finds the smallest
    this.curFound;
}
// applyGeneralGetters(InsertionSort);


// function BubbleSort(display) {
//     this.disp = display;
// }
// applyGeneralGetters(BubbleSort);

// TODO etc.
