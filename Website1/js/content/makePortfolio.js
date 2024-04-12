function makePortfolio(layout){
    
    var contentBox = document.getElementById("contentBox"); // gets the content box, button, title, and the text and puts them in local vars
    contentBox.className = "portfolio"; // changes class name so that the changePage function can determine the current page

    var button = document.getElementById("portfolio");
    var title = document.getElementById("contentTitle");
    var text = document.getElementById("contentText");
    var portfolio = document.getElementById("portfolioBox");

    contentBox.style = layout; // sets style for info content box

    //portfolio.style.animation = "fade-in 2s forwards";
    
    button.disabled = true; // disables button when clicked

    title.innerHTML = "Portfolio"; // changes the title and text for the page
    text.innerHTML = "Email Address - christianberkhimer@gmail.com<br>"
                   + "Phone Number - +1-484-687-8014";
                   
    console.log("Contact Me Page Selected");
}