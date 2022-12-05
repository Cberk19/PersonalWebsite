function changePage(pageName){

    document.getElementById(document.getElementById("contentBox").className).disabled = false; // enables the current disabled button

    var title = document.getElementById("contentTitle"); // gets the title and the text and puts them in local vars
    var text = document.getElementById("contentText");

    var layout_small = "left: 20%; width: 30%;" // info on left, picture on right;

    var layout_large = "left: 20%; width: 80%;"; // info takes up whole screen

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