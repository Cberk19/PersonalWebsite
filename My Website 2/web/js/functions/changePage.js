function changePage(pageName){

    document.getElementById(document.getElementById("contentBox1").className).disabled = false; // enables the current disabled button

    var contentBox1 = document.getElementById("contentBox1"); // gets the content box, button, title, and the text and puts them in local vars
    var contentBox2 = document.getElementById("contentBox2");
    var title = document.getElementById("contentTitle"); // gets the title and text and puts them in local vars
    var text = document.getElementById("contentText");

    var layout_small = [ // info on left, picture on right
        "left: 20%; width: 30%;", // styles for the main content box
        "left: -50rem; width: 80%;" // styles for secondary content box
    ];

    var layout_large = [ // info takes up whole screen
        "left: 20%; width: 80%;",
        "left: -50rem; width: 80%;"
    ];

    var layout_full = [ // info on right, projects on left
        "left: 70%; width: 30%;",
        "left: 20%; width: 80%;"
    ];

    title.style.animation = "none"; // refreshes animation
    text.style.animation = "none";
    
    switch(pageName){ // switches the page based on what id is passed when a button is pressed
        case "home":
            makeHome(layout_large);
            break;
        case "aboutMe":
            makeAboutMe(layout_small);
            break;
        case "education":
            makeEducation(layout_small);
            break;
        case "workExperience":
            makeWorkExperience(layout_small);
            break;
        case "portfolio":
            makePortfolio(layout_full);
            break;
        case "personalInfo":
            makePersonalInfo(layout_large);
            break;
    }
}