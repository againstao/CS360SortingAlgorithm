import { SortingFactory } from './SortingFactory.js';
import { BarDisplay } from './BarDisplay.js';

export { AnimationGenerator };

class AnimationGenerator {

    constructor (type, list, javaCode, targetDivID, javaDivID) {
        this.sortingObj = new SortingFactory(type, list);
        this.initList = this.sortingObj.unsortedList;
        this.record = this.sortingObj.recordOfSort;
        this.displayObj = new BarDisplay(this.initList, javaCode, targetDivID, javaDivID);
    }

    //
    // aType.prototype.start = function() {
    //     this.timer = setInterval(() => {
    //         this.nextStep();
    //     }, this.timing);
    // }
    // aType.prototype.pause = function() {
    //     if(this.timer !== 'undefined') {
    //         clearInterval(this.timer);
    //     }
    //     this.timer = 'undefined'; // set it back to pseudo-undefined
    // }
    // // TODO: restart() will need to empty the queue

    // aType.prototype.currentlyAuto = function() {
    //     return (this.timer !== 'undefined'); // check if there's a timer being tracked
    // }
    // aType.prototype.setTiming = function(millis) {
    //     const wasRunning = this.currentlyAuto(); // for auto-resuming purposes
    //     this.pause();
    //     this.timing = millis || this.timing;
    //     if(wasRunning) { // resume it, if applicable
    //         this.start();
    //     }
    // }

}