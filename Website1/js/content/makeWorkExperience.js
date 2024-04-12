function makeWorkExperience(layout){
    
    var imgArr = [ // array of images for the image carousel
        "pics/shannondell at night small.png",
        "pics/shannondell dining room small.png",
        "pics/ritas small.png"
    ];

    imageCarousel(imgArr); // starts the image carousel using the array of images

    var contentBox = document.getElementById("contentBox"); // gets the content box, button, title, and the text and puts them in local vars
    contentBox.className = "workExperience"; // changes class name so that the changePage function can determine the current page
    var button = document.getElementById("workExperience");
    var title = document.getElementById("contentTitle");
    var text = document.getElementById("contentText");

    contentBox.style = layout; // sets style for info content box
    
    button.disabled = true; // disables button when clicked

    title.innerHTML = "Work Experience"; // changes the title and text for the page
    text.innerHTML = "Regarding my job experience, I have worked in the service industry ever since 2016. My first job was Rita's Italian Ice, "
                   + "where I served customers and cleaned kitchen equipment. I worked there for about one and a half years until I went to work "
                   + "as a lead server at Shannondell Retirement Communities, where I am currently employed. My experience in the service industry has "
                   + "helped me to gain skills to efficiently accomplish tasks while working in a team with my peers. As I finish my college education,"
                   + "I am currently searching for a full time position doing either frontend, backend, or full stack.";

    console.log("Work Experience Page Selected");
}

