// Add event listener to get click
document.addEventListener('click', lightboxClick);

// Function to filter unwanted click events on the document
function lightboxClick(event) {
    var elem = event.target,
        elemID = elem.getAttribute('id'),
        lightboxImg = document.getElementById('lightbox-image'),
        lightbox = document.getElementById("lightbox-overlay"),
        newImg = new Image();

    // If we click an element with the attribute "data-lightbox" then show the lightbox
    if(elem.hasAttribute('data-lightbox')) {
        event.preventDefault();  //stop normal function of a tag. see mozilla developer API:Event/preventDefault

        newImg.onload = function() {
            lightboxImg.src = this.src;
        }

        lightboxImg.src = '';
        newImg.src = elem.getAttribute('data-lightbox');
        lightbox.classList.add('visible');
    }

    // If we click any 2 elements, close the lightbox
    if (elemID == 'lightbox-image' || elemID == 'lightbox-overlay') {
        event.preventDefault();
        lightbox.classList.remove('visible');
    }

}
