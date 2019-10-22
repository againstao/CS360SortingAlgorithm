// import { SortFactory } from "./sorts.js";
export { setupTransitions, setOffsetPercent,
    BarDisplay,
    actionSwapIndices };

// const TARGET_DIV_ID = 'sortdisplay';

// function setOffset(sd, top, left) {
//     sd.style.position = 'absolute';
//     sd.style.top = top + 'px';
//     sd.style.left = left + 'px';
// }
// function changeOffset(sd, top, left) {
//     sd.style.position = 'absolute';
//     sd.style.top = sd.offsetTop   + top + 'px';
//     sd.style.left = sd.offsetLeft + left + 'px';
// }

const WIDTH_PERCENT = 0.6;

function setupTransitions(elem) {
    elem.style.transition = 'left 0.4s ease-out 0s';
}

function setOffsetPercent(elem, index, total) {
    // each index will be centered & justified like 'space-between' in flex
    /*
        ...   elem    space   elem    ...
        ,---|###:###|---,---|###:###|---,
    */
    elem.style.position = 'absolute';
    let part = 100/(total); // in terms of percentage; elem's justification width
    // console.log('part: ' + part);
    
    let width = (part*WIDTH_PERCENT);
    let leftOffset = part*(index+0.5*(1-WIDTH_PERCENT));
    
    elem.style.width = width + '%';
    elem.style.left = leftOffset + '%';
    // console.log(width);
    // console.log(leftOffset);
    
    // console.log(elem);
    
}



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


// contains the display stuff that sorts and actions will use as context
// also initializes the display with stuff needed

const MIN_HEIGHT_PERCENT = 20;

function BarDisplay(initarray, targetDivID) {
    this.elems = initarray;
    const maxElem = arrayMax(initarray);
    const minElem = arrayMin(initarray);
    const range = maxElem - minElem;
    
    // populate the divs using the initarray
    this.divs = [];
    let parent = document.getElementById(targetDivID);
    parent.classList.add('sdparent');
    for (let i = 0; i < initarray.length; i++) {
        const elem = initarray[i];
        let div = document.createElement('div');
        div.classList.add('sdbar');
        // div.style.height = this.elems[i]*heightincrement + HEIGHT_UNIT;
        div.style.height = MIN_HEIGHT_PERCENT
                + ((this.elems[i]-minElem)/range)*(100-MIN_HEIGHT_PERCENT) + '%';
        div.style.bottom = '0px';

        // div.style.textAlign = 'center';
        // div.innerHTML = this.elems[i];
        let text = document.createElement('div');
        text.innerHTML = this.elems[i];
        text.classList.add('sdbar-text');

        // div.id='sd'+i;
        setOffsetPercent(div, i, initarray.length);
        setupTransitions(div);
        parent.appendChild(div);
        div.appendChild(text);
        this.divs[i] = div;
    }
}

function TreeDisplay(initarray) {
}

// note to self: don't need this syntax after all?
// class BarDisplay {
//     constructor(initarray) {
//         stuff
//     }
// }



// apply actions to the display

// note: actions don't need to have an un-apply; unapplying will be handled by the sorts classes

function actionSwapIndices(displayContext, ind1, ind2) {
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
// SwapIndicesAction.prototype.apply = function() {
// }
