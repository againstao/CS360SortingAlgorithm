

/* This page is for the explaination paragraphs for the pullup bar within the sortpage.html */
//These are the variables for the individual paragraphs for the explainations
var explainselection = document.getElementById('selectionParagraph'); //Explaination of Selection
var explaininsertion = document.getElementById('insertionParagraph'); //Explaination of Insertion
var explainmerge = document.getElementById('mergeParagraph'); //Explaination of Merge
var explainheap = document.getElementById('heapParagraph'); //Explaination of Heap
var explainbubble = document.getElementById('bubbleParagraph'); //Explaination of Bubble
var explainquick = document.getElementById('quickParagraph'); //Explaination of Quick

var navSelection =  document.getElementById('navSelection');
var navInsertion = document.getElementById('navInsertion');
var navMerge = document.getElementById('navMerge');
var navHeap = document.getElementById('navHeap');
var navBubble = document.getElementById('navBubble');
var navQuick = document.getElementById('navQuick');

navSelection.addEventListener("click",showExplaination);
navInsertion.addEventListener("click",showExplaination);
navMerge.addEventListener("click",showExplaination);
navHeap.addEventListener("click",showExplaination);
navBubble.addEventListener("click",showExplaination);
navQuick.addEventListener("click",showExplaination);

//Hide all of the paragraphs when called
function showExplaination(){
    explainselection.classList.add("hidden")
    explaininsertion.classList.add("hidden")
    explainmerge.classList.add("hidden")
    explainheap.classList.add("hidden")
    explainbubble.classList.add("hidden")
    explainquick.classList.add("hidden")

    //This is to show selected paragraph
    switch(this){
        case navSelection:
            explainselection.classList.remove("hidden")
         break;
         case navInsertion:
            explaininsertion.classList.remove("hidden")
         break;
         case navMerge:
            explainmerge.classList.remove("hidden")
         break;
         case navHeap:
            explainheap.classList.remove("hidden")
         break;
         case navBubble:
            explainbubble.classList.remove("hidden")
         break;
        case navQuick:
            explainquick.classList.remove("hidden")
         break;
    }

}