 
 
 /*This function is what conntrols the paragraphs being displayed*/ 
 /*all the variables for the paragraphs*/
 var selectionparagraph = document.getElementById('upperselectionparagraph'); //selectionparagraph sort paragraph
 var selectionparagraph = document.getElementById('lowerselectionparagraph'); //selectionparagraph sort paragraph
 var insertionparagraph = document.getElementById('upperinsertionparagraph'); //insertion sort paragraph
 var insertionparagraph = document.getElementById('lowerinsertionparagraph'); //insertion sort paragraph
 var mergeparagraph = document.getElementById('uppermergeparagraph'); //merge sort paragraph
 var mergeparagraph = document.getElementById('lowermergeparagraph'); //merge sort paragraph
 var bubbleparagraph = document.getElementById('upperbubbleparagraph'); //bubble sort paragraph
 var bubbleparagraph = document.getElementById('upperbubbleparagraph'); //bubble sort paragraph
 var quickparagraph = document.getElementById('upperquickparagraph'); //quick sort paragraph
 var quickparagraph = document.getElementById('lowerquickparagraph'); //quick sort paragraph
 var heapparagraph = document.getElementById('upperheapparagraph');//heap sort paragraph
 var heapparagraph = document.getElementById('lowerheapparagraph');//heap sort paragraph

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
    lowerinsertionparagraph.classList.add("hidden")
         
    uppermergeparagraph.classList.add("hidden")
    lowermergeparagraph.classList.add("hidden")
         
    upperbubbleparagraph.classList.add("hidden")
    lowerbubbleparagraph.classList.add("hidden")

    upperquickparagraph.classList.add("hidden")
    lowerquickparagraph.classList.add("hidden")

    upperheapparagraph.classList.add("hidden")
    lowerheapparagraph.classList.add("hidden")

    upperselectionparagraph.classList.add("hidden")
    lowerselectionparagraph.classList.add("hidden")


    switch(this){
         case selectionbutton:
             //show the paragraph
             upperselectionparagraph.classList.remove("hidden")
             lowerselectionparagraph.classList.remove("hidden")
         break;
         case insertionbutton:
            //show the paragraph
             upperinsertionparagraph.classList.remove("hidden")
             lowerinsertionparagraph.classList.remove("hidden")
         break;
         case mergebutton:
             //show the paragraph
             uppermergeparagraph.classList.remove("hidden")
             lowermergeparagraph.classList.remove("hidden") 
         break;
         case heapbutton:
             //show the paragraph
             upperheapparagraph.classList.remove("hidden") 
             lowerheapparagraph.classList.remove("hidden") 
         break;
         case bubblebutton:
             //show the paragraph
             upperbubbleparagraph.classList.remove("hidden")
             lowerbubbleparagraph.classList.remove("hidden")
         break;
         case quickbutton:
             //show the paragraph
             upperquickparagraph.classList.remove("hidden")
             lowerquickparagraph.classList.remove("hidden")
         break;
         
     } 
 }


 
