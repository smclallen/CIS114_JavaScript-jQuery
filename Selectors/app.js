// get element by id method
var firstItem = document.getElementById("item1");
console.log(firstItem);

// get elements by class name
var myList = document.getElementsByClassName("myList");
console.log(myList);

// get elements by tag name
var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//get elements by selector
var images = document.querySelectorAll("img");
console.log(images);

var submitBtn = document.getElementById("submit"), container = document.querySelector(".container");
console.log(submitBtn);

container.addEventListener("mouseenter", mouseEnterContainer);

function mouseEnterContainer() {
    console.log("There is a mouse enter event happening:");
    container.removeEventListener('mouseenter', mouseEnterContainer);
    }

    document.addEventListener("keyup", function (event) { console.log(event.keyCode); });

// Affect Stuff! -------------------------------------------------------------------------

//firstItem.style.color= "red";

// Hide 2nd list index 1
//myList[1].style.display = "none";

// Loop to change paragraph text color
for (var p = 0;p < paragraphs.length; p++){
    paragraphs[p].style.color = "green";
}

// Loop to add border to images
for (var img = 0; img < images.length; img++){
    images[img].style.border = "5px solid green";
    //images[img].style.display = "inlineBlock";
    images[img].style.borderRadius = "15px";
}


