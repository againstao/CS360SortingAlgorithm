export { generateList, listToString, stringToList };


//////   function generateList
//  Generates a list of integers, which has a length of `size` and is populated according to `genType`
//  The optional parameters of `minValue` and `maxValue` are used
//     with the genTypes 'random', 'manysame', and 'allsame' to specify the range of values to pick from.
//  Only the optional parameter `minValue` is used
//     with the genTypes 'linear' and 'reversed' to specify where to start/end the ascending/descending generation.
//  Following are breakdowns of the different genTypes:
//        'random'         'linear'         'reversed'       'manysame'       'allsame'
//           |                      |      |
//           |   |                | |      | |              | |
//           | | |              | | |      | | |            | |
//       |   | | |            | | | |      | | | |          | | | |          | | | | | |
//       | | | | |          | | | | |      | | | | |        | | | |          | | | | | |
//       | | | | | |      | | | | | |      | | | | | |      | | | | | |      | | | | | |
function generateList(size, genType, minValue=1, maxValue=10) {
    let oldsize = size;
    size = Number(size);
    if (isNaN(size) || !Number.isFinite(size) || size <= 0) {
        throw 'generateList error: size must be a positive integer, not '+oldsize+'!';
    }
    // ensure minValue and maxValue are integers
    minValue = Math.floor(minValue);
    maxValue = Math.floor(maxValue);
    // ensure the values are not swapped
    if (minValue > maxValue) {
        let temp = minValue;
        minValue = maxValue;
        maxValue = temp;
    }
    // get normal range (from min up to but not including max)
    let range = maxValue - minValue;
    // inclusive range needs to include max, not up-to-but-not-including max
    let inclRange = range+1; // this is used in the random function, to ensure it includes maxValue
    // used in manysame and allsame
    let halfRange = Math.floor(0.5 * range);

    // determine the generator function to use
    let genFunction;
    switch (genType) {
        case 'random':
            genFunction = function(index) { return Math.floor( (Math.random() * (inclRange)) + minValue ); }
            break;
        case 'linear':
            genFunction = function(index) { return minValue + index; }
            break;
        case 'reversed':
            genFunction = function(index) { return minValue + (size - index - 1); }
            break;
        case 'manysame':
            let threshold1 = Math.floor(size/3); // one-third of the size
            let threshold2 = Math.floor(size*2/3); // two-thirds of the size
            genFunction = function(index) { return (index<threshold1 ? maxValue : (index<threshold2 ? minValue+halfRange : minValue)); }
            break;
        case 'allsame':
            genFunction = function(index) { return minValue + halfRange; }
            break;
        default:
            throw 'generateList error: "'+genType+'" is not a valid genType!' +
                        ' Valid genTypes: "random", "linear", "reversed", "manysame", "allsame"';
    }

    // actually generate the list!
    let list = []
    for (let i = 0; i < size; i++) {
        list.push(genFunction(i));
    }
    return list;
}



const _DELIM = ','; // the preferred list delimiter is a comma


function listToString(list) {
    if(!Array.isArray(list)) return undefined;
    else return list.join(_DELIM);
}


function stringToList(string) {
    if(typeof string !== 'string') return undefined;
    let list = string.split(_DELIM);
    // ensure list is actually made of finite numbers
    let failed = false;
    for (let ind = 0; ind < list.length; ind++) {
        let elem = list[ind];
        let elemToNumber = Number(elem);
        if(isNaN(elemToNumber) || !Number.isFinite(elemToNumber)) {
            failed = true;
            console.error('stringToList had a problem with "'+elem+'" being in ['+list+']! Needs to be a number!');
        } else {
            list[ind] = elemToNumber;
        }
    }
    if(failed) return undefined;
    return list;
}