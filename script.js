//when user clicks on the hamburger menu icon, the menu that is currently hidden to the side will appear on the screen

// select the menu
// select the hamburger icon
// select the X icon
    const nav = document.querySelector('.navigation');
    const hamburgerIcon = document.querySelector('.fa-bars');

//make a click event on the hamburger icon
    hamburgerIcon.addEventListener('click', function(event){
        displayNav(nav);
        // if (event.target.tagName === 'I') {
        //     updateHamburger(event.target);
        // }
    })

//call the function that will bring the hidden menu onto the screen
    function displayNav(e){
        e.classList.toggle('showHamMenu');
    }

//once hamburger icon is clicked, change it to an 'X' 
    // function updateHamburger(iconE){
    //     iconE.classList.remove('fa-bars');
    //     iconE.classList.add('fa-window-close');
    //     console.log(iconE);
    // }

//use 'x' icon to close menu







