

//imports generateList to generate the random list with the correct type, 
//and import string to list to read in users custom data

//determine what paragraph is not hidden

//whichever button was clicked, take in that size and use it to generate the list

//the buttons on index.html that 
var sortedbutton = document.getElementById('sortedpicture');
var fewuniquebutton = document.getElementById('fewuniquepicture');
var randombutton = document.getElementById('randompicture');
var custominputbutton = document.getElementById('custominputbutton');

//the variables for the size inside the input box the user entered
var sortedsize = document.getElementById("sortedsize").value;
var fewuniquesize =  document.getElementById("fewuniquesize").value;
var randomsize = document.getElementById("randominputbox").value;
var custominput = document.getElementById("customlist").value;

//the events the  trigger the class  to be created
sortedbutton.addEventListener("click",  passParametersToPage);
fewuniquebutton.addEventListener("click", passParametersToPage);
randombutton.addEventListener("click", passParametersToPage);
custominputbutton.addEventListener("click",passParametersToPage);


function passParametersToPage () {

let x;

    switch(this){
        case sortedbutton:

            //get the value from the input box
            let sortedsize = document.getElementById("sortedsize").value;
            
            //make a new object for that list and sort method
            x = new ListAndSortMethod ("linear",sortedsize,null); 
            
        break;

        case fewuniquebutton:
            
            let fewuniquesize =  document.getElementById("fewuniquesize").value;

            x = new ListAndSortMethod ("manysame",fewuniquesize,null); 
            
        break;

        case randombutton:
            let randomsize = document.getElementById("randominputbox").value;

            x = new ListAndSortMethod ("random",randomsize,null); 

        break;

        case custominputbutton:
            let custominput = document.getElementById("customlist").value;
            
            x = new ListAndSortMethod("custom",null,custominput); 

        break;

    }
  

}



//the object that uses generateList and String to list functions
class ListAndSortMethod  {

    //constructor for the different types 
    constructor(type,size,list){
        this.size = size;
        this.list = list;
        this.typeOfSort = type;
        this.sortMethod = this.findActiveParagraph();
        //this.listGenerator();
        this.gotoSortPage();

    }

//looks at the list and size variables and assigns the appropriate values based off the parameters
listGenerator(){
    let minValue=1;
    let maxValue=100;

    if(this.size !== null){
       //actually generate the list, and assign it the list value
        this.list = this.generateList(this.size,this.typeOfSort, minValue, maxValue);
    }
    else{
        let temp = this.listToString(this.list);
        this.list = temp;
    }
 
}

//finds the paragraph that does not have the hidden class on index.html
findActiveParagraph()  {

    //all the varaibles for the different sorting algorithims
    var selectionpara = document.getElementById("upperselectionparagraph");
    var insertionpara = document.getElementById("upperinsertionparagraph");
    var mergepara = document.getElementById("uppermergeparagraph");
    var heappara = document.getElementById("upperheapparagraph");
    var bubblepara = document.getElementById("upperbubbleparagraph");

    if (!(selectionpara.classList.contains("hidden"))){
        //console.log("selection is the active paragraph");
        return "selection";
    }
    
    else if  (!(insertionpara.classList.contains("hidden"))){ 
        //console.log("insertion is the active paragraph");
        return "insertion";
    }

    else if  (!(mergepara.classList.contains("hidden"))){ 
       // console.log("merge is the active paragraph");
        return "merge";
    }

    else if  (!(heappara.classList.contains("hidden"))){ 
        //console.log("heap is the active paragraph");
        return "heap";
    }

    else if  (!(bubblepara.classList.contains("hidden"))){ 
       //console.log("bubble is the active paragraph");
        return "bubble";
    }

    else{ 
        //console.log("quick is the active paragraph");
        return "quick";
    }
    
}//findActiveparagraph

gotoSortPage(){
    location.replace("/pages/sortpage.html?sort="+this.sortMethod+"&size="+this.size+"&list="+this.list+"&type="+this.typeOfSort);
}

//generates a  list based off the parameters provided
generateList(size, genType, minValue=1, maxValue=100) {
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

listToString(list) {
    if(!Array.isArray(list)) return undefined;
    else return list.join(_DELIM);
}

//makes a user entered string into a list
stringToList(string) {
    const _DELIM = ','; // the preferred list delimiter is a comma
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

/*
function generateList(size, genType, minValue=1, maxValue=100) {
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
*/

}//class createTheList