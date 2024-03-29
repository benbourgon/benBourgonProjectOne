

// Create a variable that changes based on whether the menu is open or closed.
let hamburgerOpen = false;

// Store the button and navigation elements as javascript variables
const hamburgerButton = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger i')
const navigationList = document.querySelector('.navMenu')
const navigationListItem = document.querySelectorAll('.navMenu li')

function openHamburgerNav(){
    // change the "x" icon to the hamburger icon
    hamburgerIcon.classList.add('fa-xmark');
    hamburgerIcon.classList.remove('fa-bars');
    // add the navOpen class to the nav menu list
    navigationList.classList.add('navOpen');

    // The menu is now open
    hamburgerOpen = true;
    // Add inline style to keep the "x" icon in the top right regardless of change in viewport size.
    hamburgerButton.style.left = "85%";
    hamburgerButton.style.top = "20px";
}
function closeHamburgerNav(){
    // change the hamburger icon to the "x" icon.
    hamburgerIcon.classList.remove('fa-xmark');
    hamburgerIcon.classList.add('fa-bars');
    // add the navOpen class to the nav menu list
    navigationList.classList.remove('navOpen');

    // The menu is now closed
    hamburgerOpen = false
    // remove the inline styling to allow the hamburger icon to be positioned offscreen.
    hamburgerButton.style.transition = "none";
    hamburgerButton.style.left = "";
    hamburgerButton.style.top = "";
}

function hamburgerClick() {
    // When the hamburger button is clicked:
    // If the hamburger menu is open, close it
    if(hamburgerOpen){
        closeHamburgerNav();
    // If it's closed, open it.
    } else{
        openHamburgerNav();
    }
}

// Create an event listener method for the hamburger menu button click.
hamburgerButton.addEventListener('click', hamburgerClick);