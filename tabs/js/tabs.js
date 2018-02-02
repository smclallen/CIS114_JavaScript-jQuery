// Add event listener to get click
document.addEventListener('click', tabClick);

// Function to filter unwanted click events on the document
function tabClick(event) {
    var elem = event.target,
        elemHREF = elem.getAttribute('href'), // gets string with value of attribute 'href'
        tabs = document.querySelectorAll('.tabs li a'),
        tabContents = document.querySelectorAll('.tab-contents li');

    // If we click an element with the value 'href' that contains 'tab-, proceed
    if (elemHREF != null && elemHREF.indexOf('tab-') != -1) {
        event.preventDefault();

        // If tab clicked is not active make it active
        if (elem.className.indexOf('active') == -1) {
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
                tabContents[i].classList.remove('visible');
            }
            // Add the active class to the clicked element and the visible class to the corresponding tab
            elem.classList.add('active');
            document.getElementById(elemHREF).classList.add('visible')
        }

    }

}



