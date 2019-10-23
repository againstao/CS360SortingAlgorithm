
/*
   If using this, make sure you put
   <script src="path/to/this/file/main.js" type="module"></script>
   somewhere in your desired html file, preferably near the end for loading-order reasons
*/


import { BarDisplay, actionSwapIndices, actionMoveIndicator } from './sortdisplay.js';
import { SortFactory, SelectionSort } from './sorts.js';

// console.log(new InsertionSort(null));
// console.log(new InsertionSort(null).prototype);

// console.log(typeof(new InsertionSort(null)));
// console.log(typeof(new InsertionSort(null)).prototype);

// console.log(InsertionSort.prototype);
// console.log(new InsertionSort(null).__proto__);

// console.log(InsertionSort.prototype == new InsertionSort(null).__proto__);




// let disp = new BarDisplay([1,2,3,5,4,10,12,7,8], 'sortdisplay');
// setTimeout(() => {
//     console.log('testing display clean up!');
//     disp.cleanup();
// }, 2000);

let sort = new SortFactory().createSort('selection',[1,3,2,4,3,5,4,6],'sortdisplay');
// console.log(sort);

// setTimeout(() => {
//     console.log('testing sort clean up!');
//     sort.cleanup();
//     console.log(sort);
// }, 2000);

let id1 = '1', id2 = 'test2';

actionMoveIndicator(sort.disp, id1, 1); // creating indicator id1 and putting it at index 1

// sort.start();
// setTimeout(()=>sort.pause(),2000);

// sort.setTiming(1500);
sort.start();
setTimeout(() => { console.log('adjusting timing'); sort.setTiming(500) }, 3000);
setTimeout(() => {
    sort.pause();
    sort.setTiming(600); // just a check to ensure that setTiming won't always start it up
}, 6000);


// setTimeout(() => {
//     console.log('test: moving an indicator bar');
//     actionMoveIndicator(sort.disp, id1, 2);

//     setTimeout(() => {
//         console.log('test: moving both ind and reg bars at once');
//         actionSwapIndices(sort.disp, 2, 4)
//         actionMoveIndicator(sort.disp, id1, 4);

//         setTimeout(() => {
//             console.log('test: putting in another bar');
//             actionMoveIndicator(sort.disp, id2, 1);

//             setTimeout(() => {
//                 console.log('test: moving two ind bars at once');
//                 actionMoveIndicator(sort.disp, id1, 2);
//                 actionMoveIndicator(sort.disp, id2, 5);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);



// if(false) {

//     let disp = new BarDisplay([1,2,3,5,4,10,12,7,8], 'sortdisplay');

//     // actionSwapIndices(disp, 6, 8);

//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//     function getRandomInt(max) {
//         return Math.floor(Math.random() * Math.floor(max));
//     }

//     let i=0;
//     let timer = setInterval(() => {
//         i++;
//         actionSwapIndices(disp, getRandomInt(disp.elems.length), getRandomInt(disp.elems.length));
//         if (i>=10) {
//             // as opposed to clearTimeout
//             console.log("it's stopping now; did "+(i));
//             clearInterval(timer);
//         }
//     }, 300);

//     setTimeout(() => {
//         console.log('testing multiple swaps simultaneously')
//         actionSwapIndices(disp, 0,2);
//         actionSwapIndices(disp, 1,4);
//         actionSwapIndices(disp, 3,8);
//         setTimeout(() => {
//             console.log('testing mirroring swaps')
//             actionSwapIndices(disp, 3,5);
//             actionSwapIndices(disp, 2,6);
//             actionSwapIndices(disp, 1,7);
//             actionSwapIndices(disp, 0,8);
//             setTimeout(() => {
//                 console.log('testing mirroring swaps again')
//                 actionSwapIndices(disp, 3,5);
//                 actionSwapIndices(disp, 2,6);
//                 actionSwapIndices(disp, 1,7);
//                 actionSwapIndices(disp, 0,8);

//                 let i2=0;
//                 let timer2 = setInterval(() => {
//                     i2++;
//                     console.log('testing linear swapping all the way through')
//                     actionSwapIndices(disp, i2-1,i2);
//                     // console.log(i2 + ' ' + disp.elems.length);
//                     // console.log(i2 > disp.elems.length);
                    
//                     if(i2+2 > disp.elems.length) {
//                         console.log('stopping');
//                         clearInterval(timer2);
//                     }
//                 }, 500);

//             }, 1000);
//         }, 1000);
//     }, 300*10+1000);

// }