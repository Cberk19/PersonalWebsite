function imageCarousel(imgArr, index = 0){

    parent = document.getElementById("imageCarousel"); // Grabs the imageCarousel element, puts it into parent, and gets rid of all the children
    parent.textContent = '';

    child = document.createElement("img"); // Creates an img element, makes the src the next image in the array, then appends it to imageCarousel
    child.src = imgArr[index];
    child.style.animation = "fade-in-out 5s";
    child.addEventListener("animationend", function(){ // Detects when animation ends so it can get rid of the image and call the function again
        parent.textContent = '';
        index++
        if(index === imgArr.length)
            index = 0;
        imageCarousel(imgArr, index);
    });

    parent.appendChild(child);
}

/*
-----------------------------Synopsis-----------------------------
This function creates a loop by taking an array of images, adding 
an animation to those images, and detects when the animation 
ends by using and event listener so that it knows when to switch 
to the next image in the array, creating a looping carousel
------------------------------------------------------------------
*/