export { BarDisplay }


class BarDisplay {

    constructor (initarray, javaCode, /* actionQueue, */ targetDivID, javaDivID, explainDivID) {
        this.javaCode = javaCode.slice(); // effectively clones the list (for new reference purposes)
        // this.actionQueue = actionQueue;
        this.elems = initarray.slice(); // effectively clones the list (for new reference purposes)
        this.minElem = arrayMin(elem);
        this.maxElem = arrayMin(elem);
        this.elemRange = this.maxElem - this.minElem;
        this.targetDiv = document.getElementById(targetDivID);
        this.javaDiv = document.getElementById(javaDivID);
        this.explainDiv = document.getElementById(explainDivID);
        this.elemDivs = [];
        this.javaDivs = [];
        // populate targetDiv using elems
        this.targetDiv.classList.add('sdparent'); // setup parent div
        for (let i = 0; i < this.elems.length; i++) {
            // const elem = this.elems[i];
            let div = createElemDiv(this);
            this.targetDiv.appendChild(div);
        }
        // populate javaDiv
        populateJavaCode(this);
    }

    //TODO functions for swapping, indicator divs, set explanation, etc.

    //
    setupElementList(elemList) {
        // if(typeof(this.elems) === 'undefined') { // 'elems' doesn't exist on 'this', or it's set to undefined
        // }
        todo
    }

    // swap the elements on-screen
    swapElements(index1, index2) {        
        console.log('swapping ' + ind1 + ' and ' + ind2);
        // shortcut if possible
        if(ind1 == ind2) return;
        // swap elems
        let elems = displayContext.elems;
        let tempelem = elems[ind1];
        elems[ind1] = elems[ind2];
        elems[ind2] = tempelem;
        // swap divs
        let divs = displayContext.divs;
        let div1 = divs[ind1];
        let div2 = divs[ind2];
        divs[ind1] = div2;
        divs[ind2] = div1;
        // update visuals
        setOffsetPercent(div1,ind2,elems.length);
        setOffsetPercent(div2,ind1,elems.length);
    }

    // moves the indicator with ID of indicID to the position at index
    //   note: automatically shows it too
    moveIndicator(indicID, index) {

    }

    hideIndicator(indicID) {

    }

    hideAllIndicators() {
        forEach
    }

    highlightCode(, lineIndices) {

    }

    setExplanation(explanation) {
        this.explainDiv.innerHTML = explanation.toString();
    }


    // CLEANUP the display when releasing resources. Preferably call this if you're getting rid of the display.
    cleanup() {

    }

    // just some utilities for this; don't call these publicly
    _cleanupList() {
        this.elemDivs.forEach(div => {
            this.targetDiv.removeChild(div);
        });
        delete this.elemDivs;
        delete this.targetDiv;
    }
    _cleanupIndics() {

    }
    _cleanupJava() {

    }

}



// =========================
//     UTILITY FUNCTIONS
// =========================


////// CONSTANTS //////

// how much of the width of each bar is there, out of how much width is possible.
//   (example: 0.6 will make each bar take up 60% of the total possible width)
const WIDTH_RATIO = 0.6;

// how much height (in percent) to ensure the bars have.
//   this ensures the bars will have at least some height, even if they're the smallest element
const MIN_HEIGHT_PERCENT = 20;

// the classes applied to the element divs ("sdbar" stands for "sorting display bar")
const SDBAR_CLASS = 'sdbar'; // for all divs
const SDBAR_TEXT_CLASS = 'sdbar-text'; // for the text that's on the divs
// the classes applied to the java code lines
const JC_CLASS = 'javacode-line'; // for all lines
const HLT_CLASS = 'javacode-highlight'; // added and removed when highlighting


////// SMALLER UTILITY FUNCTIONS //////

// used to calculate the height for an elem, in percentage
function calcHeight(elem, minElem, range) {
    return ( MIN_HEIGHT_PERCENT
        + ((elem-minElem)/range)*(100-MIN_HEIGHT_PERCENT) );
}

// some array utility functions
// https://stackoverflow.com/a/13440842
function arrayMin(arr) {
    var len = arr.length, min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
};
function arrayMax(arr) {
    var len = arr.length, max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
};

function populateJavaCode(displayObj) {
    let divs = displayObj.javaDivs; // the list (would probably be empty at this moment)
    let parentdiv = displayObj.javaDiv; // the div element
    let code = displayObj.javaCode; // the strings of java code
    for (let i = 0; i < code.length; i++) {
        let codeline = code[i];
        // fix the innerHTML auto-trimming issue
        codeline = codeline.replace(/    /g,"&nbsp;&nbsp;&nbsp;&nbsp;");
        codeline = codeline.replace(/   /g,"&nbsp;&nbsp;&nbsp;&nbsp;");
        // create & setup the div
        let lineElem = createJavaCodeDiv();
        divs.push(lineElem);
        // asdf.innerHTML = "Hello World " + i ;
        lineElem.innerHTML = codeline;
        parentdiv.appendChild(lineElem);
    }
}

function setupTransitions(div) {
    div.style.transition = 'height 0.4s ease-out 0s, left 0.4s ease-out 0s';
}

function setOffsetPercent(elem, index, total) {
    // each index will be centered & justified like 'space-between' in flex
    /*
        ...   elem    space   elem    ...
        ,   |###:###|   ,   |###:###|   ,
        ,   |###:###|   ,   |###:###|   ,
        ,---|###:###|---,---|###:###|---,
    */
    elem.style.position = 'absolute'; // ensure div gets positioned correctly

    let part = 100/(total); // in terms of percentage; elem's justification width
    let width = (part*WIDTH_RATIO);
    let leftOffset = part*(index+0.5*(1-WIDTH_RATIO));

    elem.style.width = width + '%';
    elem.style.left = leftOffset + '%';
}


////// OBJECT CREATORS //////

// will create a new instance of a bar div depending on the
function createElemDiv(displayObj, index) {
    let elems = displayObj.elems;
    let minElem = displayObj.minElem;
    let range = displayObj.elemRange;
    let div = document.createElement('div');
    // div.id = parentDiv.id+'_sdbar_'+index;
    div.setAttribute('name', 'sdbar_'+index);
    div.classList.add(SDBAR_CLASS);
    // div.classList.add('sorted');
    // div.style.height = this.elems[i]*heightincrement + HEIGHT_UNIT;
    div.style.height = calcHeight(elems[index], minElem, range) + '%';
    div.style.bottom = '0px';
    // div.style.textAlign = 'center';
    // div.innerHTML = this.elems[i];
    let textDiv = document.createElement('div');
    textDiv.innerHTML = elems[index];
    textDiv.classList.add(SDBAR_TEXT_CLASS);
    setOffsetPercent(div, i, initarray.length);
    setupTransitions(div);
    // parentDiv.appendChild(div);
    div.appendChild(textDiv);
}

function createJavaCodeDiv() {
    let elem = document.createElement('div');
    elem.classList.add(JC_CLASS);
    return elem;
}