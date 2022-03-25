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

// Store the page elements in javascript variables
const hamburgerButton = document.querySelector('.hamburger');
const navigationList = document.querySelector('.navMenu')
const navigationListItem = document.querySelectorAll('.navMenu li')

// Create an event listener method for the hamburger menu button, when it is clicked.
hamburgerButton.addEventListener('click', function(event){
    // When the hamburger button is clicked
    // If the hamburger menu is open
});
