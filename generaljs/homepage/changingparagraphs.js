 
 
 /*This function is what conntrols the paragraphs being displayed*/ 
 /*all the variables for the paragraphs*/
 var selectionparagraph = document.getElementById('upperselectionparagraph'); //selectionparagraph sort paragraph
 var lowerselectiontitle = document.getElementById('SelectionLowerSectionTitle'); //selectionparagraph sort paragraph
 var insertionparagraph = document.getElementById('upperinsertionparagraph'); //insertion sort paragraph
 var lowerinsertiontitle = document.getElementById('InsertionLowerSectionTitle'); //insertion sort paragraph
 var mergeparagraph = document.getElementById('uppermergeparagraph'); //merge sort paragraph
 var lowermergetitle = document.getElementById('MergeLowerSectionTitle'); //merge sort paragraph
 var bubbleparagraph = document.getElementById('upperbubbleparagraph'); //bubble sort paragraph
 var lowerbubbletitle = document.getElementById('BubbleLowerSectionTitle'); //bubble sort paragraph
 var quickparagraph = document.getElementById('upperquickparagraph'); //quick sort paragraph
 var lowerquicktitle = document.getElementById('QuickLowerSectionTitle'); //quick sort paragraph
 var heapparagraph = document.getElementById('upperheapparagraph');//heap sort paragraph
 var lowerheaptitle = document.getElementById('HeapLowerSectionTitle');//heap sort paragraph

 var selectionbutton =  document.getElementById('selectionbutton');
 var insertionbutton = document.getElementById('insertionbutton');
 var mergebutton = document.getElementById('mergebutton');
 var heapbutton = document.getElementById('heapbutton');
 var bubblebutton = document.getElementById('bubblebutton');
 var quickbutton = document.getElementById('quickbutton');

 selectionbutton.addEventListener("click",showParagraph);
 insertionbutton.addEventListener("click",showParagraph);
 mergebutton.addEventListener("click",showParagraph);
 heapbutton.addEventListener("click",showParagraph);
 bubblebutton.addEventListener("click",showParagraph);
 quickbutton.addEventListener("click",showParagraph);

 function showParagraph(){
    
    //hide all the paragraphs on call
    upperinsertionparagraph.classList.add("hidden")
    lowerinsertiontitle.classList.add("hidden")
         
    uppermergeparagraph.classList.add("hidden")
    lowermergetitle.classList.add("hidden")
         
    upperbubbleparagraph.classList.add("hidden")
    lowerbubbletitle.classList.add("hidden")

    upperquickparagraph.classList.add("hidden")
    lowerquicktitle.classList.add("hidden")

    upperheapparagraph.classList.add("hidden")
    lowerheaptitle.classList.add("hidden")

    upperselectionparagraph.classList.add("hidden")
    lowerselectiontitle.classList.add("hidden")


    switch(this){
         case selectionbutton:
             //show the paragraph
             upperselectionparagraph.classList.remove("hidden")
             lowerselectiontitle.classList.remove("hidden")
         break;
         case insertionbutton:
            //show the paragraph
             upperinsertionparagraph.classList.remove("hidden")
             lowerinsertiontitle.classList.remove("hidden")
         break;
         case mergebutton:
             //show the paragraph
             uppermergeparagraph.classList.remove("hidden")
             lowermergetitle.classList.remove("hidden") 
         break;
         case heapbutton:
             //show the paragraph
             upperheapparagraph.classList.remove("hidden") 
             lowerheaptitle.classList.remove("hidden") 
         break;
         case bubblebutton:
             //show the paragraph
             upperbubbleparagraph.classList.remove("hidden")
             lowerbubbletitle.classList.remove("hidden")
         break;
         case quickbutton:
             //show the paragraph
             upperquickparagraph.classList.remove("hidden")
             lowerquicktitle.classList.remove("hidden")
         break;
         
     } 
 }


 
