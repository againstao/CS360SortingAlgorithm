import {generateList,stringToList} from  "./listutils";
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
var custominput = document.getElementById('custominputbox').value;

//the events the  trigger the class  to be created
sortedbutton.addEventListener("click", new(ListAndSortMethod ("sorted",sortedsize)));
fewuniquebutton.addEventListener("click", new(ListAndSortMethod ("fewunique",fewuniquesize)));
randombutton.addEventListener("click", new(ListAndSortMethod ("random",randomsize)));
custominputbutton.addEventListener("click",new(ListAndSortMethod(custominput)));

//the object that uses generateList and String to list functions
class ListAndSortMethod  {
    //constructor for the custom list the user entered
    constructor(list){
        this.list = list;
        this.sortMethod = this.findActiveParagraph;
    }


    //constructor for the different types 
    constructor(type,size){
        this.size = size;
        this.typeOfSort = type;
        this.sortMethod = this.findActiveParagraph;
    }


//finds the paragraph that does not have the hidden class on index.html
findActiveParagraph()  {
    if  (!document.getElementById("upperselectionparagraph").contains(hidden)){
        console.log("selection is the active paragraph");
        return "selection";
    }
    
    else if  (!document.getElementById("upperinsertionparagraph").contains(hidden)){ 
        console.log("insertion is the active paragraph");
        return "insertion";
    }

    else if  (!document.getElementById("uppermergeparagraph").contains(hidden)){ 
        console.log("merge is the active paragraph");
        return "merge";
    }

    else if  (!document.getElementById("upperheapparagraph").contains(hidden)){ 
        console.log("heap is the active paragraph");
        return "heap";
    }

    else if  (!document.getElementById("upperbubbleparagraph").contains(hidden)){ 
        console.log("bubble is the active paragraph");
        return "bubble";
    }

    else{ 
        console.log("quick is the active paragraph");
        return "quick";
    }
    
}//findActiveparagraph



}//class createTheList