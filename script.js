// hamburger menu requirements:

// - display only at a certain screen size
// - be sticky positioned above all other elements and have the menu positioned above as well.
// - when closed, click to open and display the full nav on the page.
//    - Transform the hamburger button into an "x". <i class="fa-solid fa-xmark-large"></i>
//    - create an semi-transparent overlay to add contrast to the menu 
// - when the menu is open, click the "X" to close again
//     - remove the overlay and hide the navigation items

// Create a variable that changes based on whether the menu is open or closed.
let hamburgerOpen = false;

// Store the button and navigation elements as javascript variables
const hamburgerButton = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger i')
const navigationList = document.querySelector('.navMenu')
const navigationListItem = document.querySelectorAll('.navMenu li')

function hamburgerClick() {
    // When the hamburger button is clicked
    // If the hamburger menu is open, close it
    if(hamburgerOpen){
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
        console.log(hamburgerIcon.classList);
        hamburgerOpen = false
    // If it's closed, open it.
    } else{
        hamburgerIcon.classList.add('fa-xmark');
        hamburgerIcon.classList.remove('fa-bars');
        console.log(hamburgerIcon.classList);
        hamburgerOpen = true;
    }
}

// Create an event listener method for the hamburger menu button click.
hamburgerButton.addEventListener('click', hamburgerClick);