import { BarDisplay } from "./sortdisplay";

export { SortFactory }


// sorts have nextStep(), undoStep(), and  which each give back an action to apply



// factory class
function SortFactory() {
}
// type: string, initarray: array of comparable objects
SortFactory.prototype.createSort = function(type, initarray) {
    switch(type) {
        case 'insertion':
            return new BarDisplay(); // TODO
    }
}
