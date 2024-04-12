function makeEducation(layout){

    var imgArr = [ // array of images for the image carousel
        "pics/bell tower small.png",
        "pics/temple station small.png",
        "pics/temple flag small.png"
    ];

    imageCarousel(imgArr); // starts the image carousel using the array of images

    var contentBox = document.getElementById("contentBox"); // gets the content box, button, title, and the text and puts them in local vars
    contentBox.className = "education"; // changes class name so that the changePage function can determine the current page
    var button = document.getElementById("education");
    var title = document.getElementById("contentTitle");
    var text = document.getElementById("contentText");

    contentBox.style = layout; // sets style for info content box
    
    button.disabled = true; // disables button when clicked

    title.innerHTML = "Education"; // changes the title and text for the page
    text.innerHTML = "The very first coding class that I took was an Intro to Java course in my sophomore year of high school, and I loved every second of it. I decided to pursue this path further"
    +" so I took a few other technology related classes during my time in high school. In junior year I took a robotics course, and was even a part of the robotics club for a brief period. To round"
    +" out my high school education, I took AP Computer Science in my senior year.<br><br>"
    +" I started my college education at Temple University towards the end of August 2019 and I started out in the Computer Science major. While in the major, I took courses like Discrete Math and"
    +" Data Structures, which taught me some very important fundamentals. After my sophomore year, I decided to switch to the Information and Science major, because the courseplan suited my interests"
    +" moreso than Computer Science did. After switching majors, I took classes such as Database Management, Client Side Scripting, Server Side Scripting, and my two capstone courses where my team and"/*"I started my college education at Temple University during August of 2019. I am an Information Science and Technology major in my fourth year "*/
    +" I created a dashboard for Temple student and professors alike to mangage their independent study applications"/*               + "and I am expected to graduate in December of 2023. I have taken a lot of different courses over the years covering various coding languages "
                   + "and techniques such as Java, C#, and SQL just to name a few. ";*/

    console.log("Education Page Selected");
}

