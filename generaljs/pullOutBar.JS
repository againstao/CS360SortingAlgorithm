  /*declare variables*/

        /*all the variables for extending the bottom display*/
        var expandpulloutdisplay = document.getElementById('pullupbar'); //the section as a whole
        var expandpulloutbarsections = document.getElementById('pullupbarsection'); //the two sections as a whole
        var expandexplanationsection = document.getElementById('explanationsection'); //the explanation section
        var expandjavasection = document.getElementById('javasection'); //the java section

        /*varaibles for swapping out the buttons*/
        var hidepulloutbutton = document.getElementById('pulloutbuttonimg');
        var showpulloutbutton = document.getElementById('pulloutbuttonimg');
        var hidepushinbutton = document.getElementById('pushinbuttonimg');
        var showpushinbutton = document.getElementById('pushinbuttonimg');

        /*this is basically saying that when the pulloutbutton is clicked do the following function*/
        document.getElementById('pulloutbuttonimg').addEventListener('click', function () {

            expandpulloutdisplay.classList.add('expandpullupbarsection');
            expandexplanationsection.classList.add('expandexplanationsection');
            expandjavasection.classList.add('expandjavasection');
            /*the above formats the explanation and java sections*/
            hidepulloutbutton.classList.add('pulloutbuttonimghide');
            /*this changes out the buttons so that the user can close the menu again*/
            showpushinbutton.classList.add('revalpushinbutton');
        })

        document.getElementById('pushinbuttonimg').addEventListener('click', function () {

            expandpulloutdisplay.classList.remove('expandpullupbar');
            expandpulloutdisplay.classList.remove('expandpullupbarsection');
            expandexplanationsection.classList.remove('expandexplanationsection');
            expandjavasection.classList.remove('expandjavasection');
            /*the above formats the explanation and java sections*/
            hidepulloutbutton.classList.remove('pulloutbuttonimghide');
            /*this changes out the buttons so that the user can close the menu again*/
            showpushinbutton.classList.remove('revalpushinbutton');
        });