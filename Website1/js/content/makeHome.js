function makeHome(layout){

    var contentBox = document.getElementById("contentBox"); // gets the contentBox, button, title, and the text and puts them in local vars
    var button = document.getElementById("home");
    var title = document.getElementById("contentTitle");
    var text = document.getElementById("contentText");

    contentBox.className = "home"; // changes class name so that the changePage function can determine the current page

    contentBox.style = layout; // sets style for info content box

    button.disabled = true; // disables button when clicked

    title.innerHTML = "Home"; // changes the title and text for the page
    text.innerHTML = "Welcome to my Website! Here you will find information about myself and what I do. You can navigate the site through the links on the left.";

    console.log("Home Page Selected");
}

