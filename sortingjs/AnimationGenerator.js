import { SortingFactory } from './SortingFactory.js';
import { BarDisplay } from './BarDisplay.js';

export { AnimationGenerator };

class AnimationGenerator {

    constructor (type, list, javaCode, targetDivID, javaDivID) {
        this.sortingObj = new SortingFactory(type, list);
        this.initList = this.sortingObj.unsortedList.slice();
        this.record = this.sortingObj.recordOfSort;
        this.displayObj = new BarDisplay(this.initList, javaCode, targetDivID, javaDivID);
        this.timing = 1000;
        this.timer = 'undefined';
    }

    //
    start() {
        this.timer = setInterval(() => {
            this.nextStep();
            if(this.isAtEnd()) {
                this.pause();
            }
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
        console.log(this.initList);
        this.displayObj.resetElements(this.initList);
        this.displayObj.hideAllIndicators();
        // this.nextStep();
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
    isAtEnd() {
        return this.record.isAtEnd();
    }

    nextStep() {
        let actionNode = this.record.goForward();
        console.log(actionNode);
        this._handleAction(actionNode);
    }
    prevStep() {
        let actionNode = this.record.goPrev();
        console.log(actionNode);
        this._handleActionReverse(actionNode);
    }


    // Stuff that actually interprets the action and calls the relevant functions on the display because of it

    _handleAction(actionNode) {
        switch(actionNode.event) {
            // "start" event
            case "start":
                this.displayObj.resetElements(actionNode.data);
                break;
            // "comparator" event
            case "comparator":
                this.displayObj.setIndicator('comparator', actionNode.data);
                break;
            case "comparee":
                this.displayObj.setIndicator('comparee', actionNode.data);
                break;
            // case "compare":
            //     this.displayObj.setIndicator('comparee', actionNode.data[0]);
            //     this.displayObj.setIndicator('comparator', actionNode.data[1]);
            //     break;
            case "swap":
                this.displayObj.swapElements(actionNode.data[0], actionNode.data[1]);
                break;
            default:
                console.error("Uh oh! unknown event type \""+actionNode.event+"\"");
                break;
        }
    }

}