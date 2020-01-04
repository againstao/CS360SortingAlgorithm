 
 
 /*This function is what opens the different links inside the mobile view nav menu*/ 
 /*a*/

 //variable for the hamburger buttons
 var hamburgerimageclosed = document.getElementById('hamburgerimageclosed');
 var hamburgerimageopen = document.getElementById('hamburgerimageopen');

//variable for the hamburgers nav section
 var hamburgerpopoutsection = document.getElementById('hamburgerpopoutsection');

 //variables for the individual items inside the hamburger menu
 var homelinkbutton =  document.getElementById('hamburgeritemhome');
 var selectionlinkbutton = document.getElementById('hamburgeritemselection');
 var insertionlinkbutton = document.getElementById('hamburgeriteminsertion');
 var mergelinkbutton = document.getElementById('hamburgeritemmerge');
 var heaplinkbutton = document.getElementById('hamburgeritemheap');
 var bubblelinkbutton = document.getElementById('hamburgeritembubble');
 var quicklinkbutton = document.getElementById('hamburgeritemquick');

 /*

 
 id = "hamburgerimageclosed">
"hamburgerimage hidden" id = "hamburgerimageopen"
 
 
 */

 /*event listeners for the buttons for the links */
 homelinkbutton.addEventListener("click",goToPage);
 selectionlinkbutton.addEventListener("click",goToPage);
 insertionlinkbutton.addEventListener("click",goToPage);
 mergelinkbutton.addEventListener("click",goToPage);
 heaplinkbutton.addEventListener("click",goToPage);
 bubblelinkbutton.addEventListener("click",goToPage);
 quicklinkbutton.addEventListener("click",goToPage);

/*event listeners for the images that should hide or display the popout menu */
 hamburgerimageclosed.addEventListener("click",hideOrDisplayHamburgerNavMenu);
 hamburgerimageopen.addEventListener("click",hideOrDisplayHamburgerNavMenu);

 function goToPage(){

    switch(this){
         case homelinkbutton:
             //go to the homepage
             window.location.href = "../../index.html";
         break;
         case selectionlinkbutton:
             //go to the approrpiate page
             window.location.href = "../../pages/sortpage.html?sort=selection";
         break;
         case insertionlinkbutton:
             //go to approrpiate page
             window.location.href = "../../pages/sortpage.html?sort=insertion";
         break;
         case mergelinkbutton:
             //go to approrpiate page
             window.location.href = "../../pages/sortpage.html?sort=merge";
         break;
         case heaplinkbutton:
             //go to approrpiate page
             window.location.href = "../../pages/sortpage.html?sort=heap";
         break;
         case bubblelinkbutton:
            //go to approrpiate page
            window.location.href = "../../pages/sortpage.html?sort=bubble";
         break;
         case quicklinkbutton:
             //go to approrpiate page
             window.location.href = "../../pages/sortpage.html?sort=quick";
         break;
         /*
         relative links for all the different pages
         <a href="pages/sortpage.html?sort=selection">
         <a href="pages/sortpage.html?sort=insertion">
         <a href="pages/sortpage.html?sort=merge">
         <a href="pages/sortpage.html?sort=heap">
         <a href="pages/sortpage.html?sort=bubble">
         <a href="pages/sortpage.html?sort=quick">
        */
     } 
 }

function hideOrDisplayHamburgerNavMenu(){

    switch(this){
        case hamburgerimageclosed: 
        //open the menu, show the items, and display the open button
        hamburgerimageclosed.classList.add("hidden");
        hamburgerimageopen.classList.remove("hidden");
        hamburgerpopoutsection.classList.remove("hidden");
        break;

        case hamburgerimageopen: 
        //open the menu, show the items, and display the open button
        hamburgerimageopen.classList.add("hidden");
        hamburgerimageclosed.classList.remove("hidden");
        hamburgerpopoutsection.classList.add("hidden");
        break;

    }
}
 
