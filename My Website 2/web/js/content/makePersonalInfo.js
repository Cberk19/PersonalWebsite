function makePersonalInfo(layout){
    

    var contentBox = document.getElementById("contentBox"); // gets the content box, button, title, and the text and puts them in local vars
    contentBox.className = "personalInfo"; // changes class name so that the changePage function can determine the current page
    var button = document.getElementById("personalInfo");
    var title = document.getElementById("contentTitle");
    var text = document.getElementById("contentText");
    var LinkedIn = document.createElement("a");
    var GitHub = document.createElement("a");

    LinkedIn.href = "https://www.linkedin.com/in/christian-berkhimer-90a369221/"; // My LinkedIn and GitHub links
    GitHub.href = "https://github.com/Cberk19"

    LinkedIn.innerHTML = "LinkedIn - " + LinkedIn.href + "<br>";
    GitHub.innerHTML = "GitHub - " + GitHub.href + "<br>";

    LinkedIn.target = "_blank"; // Makes it so that it opens a new tab when clicking on the links
    GitHub.target = "_blank";

    contentBox.style = layout; // sets style for info content box

    title.offsetHeight; // refreshes animation
    text.offsetHeight;

    title.style.animation = "fade-in 2s"; // fade in animation for text when loading in
    text.style.animation = "fade-in 2s";
    
    button.disabled = true; // disables button when clicked

    title.innerHTML = "Personal Info"; // changes the title and text for the page

    

    text.innerHTML = "Email Address - christianberkhimer@gmail.com<br>"
                    + "Phone Number - +1-484-687-8014<br>";

    text.appendChild(LinkedIn); // adds the links to the text
    text.appendChild(GitHub);
                   
    console.log("Personal Info Page Selected");
}

