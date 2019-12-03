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
    start() {
        this.timer = setInterval(() => {
            this.nextStep();
        }, this.timing);
    }
    pause() {
        if(this.timer !== 'undefined') {
            clearInterval(this.timer);
        }
        this.timer = 'undefined'; // set it back to pseudo-undefined
    }
    restart() {
        this.record.goToStart();
    }

    currentlyAuto() {
        return (this.timer !== 'undefined'); // check if there's a timer being tracked
    }
    setTiming(millis) {
        const wasRunning = this.currentlyAuto(); // for auto-resuming purposes
        this.pause();
        this.timing = millis || this.timing;
        if(wasRunning) { // resume it, if applicable
            this.start();
        }
    }

    nextStep() {
        let action = this.record.goForward();
        console.log(action);
        // handleAction(action);
    }
    prevStep() {
        let action = this.record.goPrev();
        console.log(action);
        // handleActionReverse(action);
    }

}