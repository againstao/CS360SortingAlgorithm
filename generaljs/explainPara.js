function GetURLParameter(sParam) {
   var sPageURL = window.location.search.substring(1);
   var sURLVariables = sPageURL.split('&');
   for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam) {
         return sParameterName[1];
      }
   }
}

let tempsort = GetURLParameter('sort');

function showExplainationParagraph(tempsort) {
   selectionParagraph.classList.add("hidden");
   insertionParagraph.classList.add("hidden");
   mergeParagraph.classList.add("hidden");
   heapParagraph.classList.add("hidden");
   bubbleParagraph.classList.add("hidden");
   quickParagraph.classList.add("hidden");


   switch (tempsort) {
      case 'selection':
         //show the paragraph
         selectionParagraph.classList.remove("hidden")
         break;
      case 'insertion':
         //show the paragraph
         insertionParagraph.classList.remove("hidden")
         break;
      case 'merge':
         //show the paragraph
         mergeParagraph.classList.remove("hidden")
         break;
      case 'heap':
         //show the paragraph
         heapParagraph.classList.remove("hidden")
         break;
      case 'bubble':
         //show the paragraph
         bubbleParagraph.classList.remove("hidden")
         break;
      case 'quick':
         //show the paragraph
         quickParagraph.classList.remove("hidden")
         break;

   }
}

showExplainationParagraph(tempsort);


