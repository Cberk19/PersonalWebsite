function makeAboutMe(layout){
    
    var imgArr = [ // array of images for the image carousel
        "pics/me at hershey small.png",
        "pics/me w the sis small.png",
        "pics/m w the boys small.png",
        "pics/me w woody small.png",
        "pics/me on the trail small.png",
        "pics/me w woody 2 small.png"
    ];

    imageCarousel(imgArr); // starts the image carousel using the array of images

    var contentBox = document.getElementById("contentBox"); // gets the content box, button, title, and the text and puts them in local vars
    contentBox.className = "aboutMe"; // changes class name so that the changePage function can determine the current page
    var button = document.getElementById("aboutMe");
    var title = document.getElementById("contentTitle");
    var text = document.getElementById("contentText");

    contentBox.style = layout; // sets style for info content box

    button.disabled = true; // disables button when clicked

    title.innerHTML = "Who am I?"; // changes the title and text for the page
    text.innerHTML = "Hello! My name is Christian Berkhimer, and I am an enthusiast of everything related to technology. I graduated from Temple University with a Bachelors of Science"
    +" in Information Science and Technology in December of 2023, and I am currently looking for a position where I can utilize my skillset. Regarding my skillset, I am adept in a variety"
    +" of different languages, such as C#, .NET, Java, HTML, Javascript, CSS, SQL and MySQL. I also have experience utilizing the Agile development methodology, and I have also created multiple"
    +" RESTful APIs which all executed specific database stored procedures using both SQL and MySql. <br><br> In my spare time, I really enjoy creating art in Photoshop, and I also have a large"
    +" passion for music. I am actively trying to teach myself guitar by immitating some of my favorite songs. One of my long term goals is to"
    +" get good enough to be able to play some of my favorite tracks from the Isley Brothers and Steely Dan."/*"Hello! My name is Christian Berkhimer, and I am an IS&T major at Temple University and am planning on graduating in December of 2023. "
                   + "I have experience in a variety of different languages, such as C#, SQL, HTML, Javascript, CSS, Java and a little bit in C. "
                   + "I have been coding for around six years, and I still enjoy coding in my free time, whether it be for school or personal projects. "
                   + "Besides coding, in my free time I enjoy listening to music, reading, playing video games, practicing the guitar, cooking, and hanging "
                   + "out with my friends in Philadelphia.";*/

    console.log("About Me Page Selected");
}

