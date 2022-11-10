function makePortfolio(layout){

    document.getElementById("contentBox1").className = "portfolio"; // changes class name so that the changePage function can determine the current page

    var contentBox1 = document.getElementById("contentBox1"); // gets the content box, button, title, and the text and puts them in local vars
    var contentBox2 = document.getElementById("contentBox2");
    var button = document.getElementById("portfolio");
    var title = document.getElementById("contentTitle");
    var text = document.getElementById("contentText");

    contentBox1.style = layout[0]; // sets style for info content box
    contentBox2.style = layout[1]; // sets style for portfolio content box

    title.offsetHeight; // refreshes animation
    text.offsetHeight;

    title.style.animation = "fade-in 2s"; // fade in animation for text when loading in
    text.style.animation = "fade-in 2s";
    
    button.disabled = true; // disables button when clicked

    title.innerHTML = "Portfolio"; // changes the title and text for the page
    text.innerHTML = "Click on a box to get more information about the project"

    console.log("Portfolio Page Selected");
}

