
const toggleBar = $(".hambar-div");
const hamburgerMenu = $(".hamburger-button-toggle");
const crossButton = $(".cross-button");
const body = $(".light-mode-body");
const img = $(".mode-img");
const logoImg = $(".brand-Logo");
const navbar = $(".navbar-div");
const lightImg = "img/mode-button-light.png";
const darkImg = "img/mode-button-dark.png";
const brandLogoDark = "img/navlogoDark.png";
const brandLogoLight = "img/navlogoLight.png";


 
// menuLinks.forEach(link => {
//   link.addEventListener('click', (event) => {
//     // remove the "active" class from all menu links
//     menuLinks.forEach(link => {
//       link.classList.remove('active-menu');
//     });

//     // add the "active" class to the clicked menu link
//     event.target.classList.add('active-menu');
//   });
// });
const menuLinks = $('.content-name-link');
menuLinks.on('click', function(event) {
    event.preventDefault();
    // remove the "active" class from all menu links
    menuLinks.removeClass('active-menu');

    // add the "active" class to the clicked menu link
    $(this).addClass('active-menu');
  });

//   This code first selects all elements with the class "menu-link" using 
//   the jQuery selector $('.menu-link'). Then, it adds a click event listener to each of 
//   these elements using the .on() method. When a menu link is clicked, 
//   the code uses the .removeClass() method to remove the "active" class from all menu links, 
//   and then uses the $(this) 
//   selector to add the "active" class to the clicked menu link using the .addClass() method.


img.click( ()=> {


    if (body.hasClass("dark-mode-body") === true && body.hasClass("light-mode-body") === true){
        body.toggleClass("dark-mode-body");
        img.attr("src", lightImg);
        logoImg.attr("src", brandLogoLight);
        
    }
    
    else if(body.hasClass("light-mode-body") === true){
        body.toggleClass("dark-mode-body");
        img.attr("src",darkImg);
        logoImg.attr("src", brandLogoDark);
        
    }
} );


    
hamburgerMenu.click ( ()=> {

    if(body.hasClass("dark-mode-body") === true && body.hasClass("light-mode-body") === true){

        setTimeout(() => {
            toggleBar.toggleClass("toggle-hambar-div");
        }, 200);
    }
    else if (body.hasClass("light-mode-body") === true){

        setTimeout(() => {
            toggleBar.toggleClass("toggle-hambar-div");
        }, 200);

    }

});
crossButton.click ( ()=> {
    
    if(body.hasClass("dark-mode-body") === true && body.hasClass("light-mode-body") === true){

        setTimeout(() => {
            toggleBar.toggleClass("toggle-hambar-div");
            body.toggleClass("opacity");
        }, 200);
    }
    else if (body.hasClass("light-mode-body") === true){

        setTimeout(() => {
            toggleBar.toggleClass("toggle-hambar-div");
        }, 200);

    }
    
});



// In this code, the first line uses JavaScript 
// to select all the menu links using the .querySelectorAll() method. 
// Then, we add a click event listener to each menu link using the .forEach() method. 
// When a menu link is clicked, we first remove the "active" class from all menu links to ensure 
// that only one link has the "active" class at a time. Then, we add the "active" class to the 
// clicked menu link using the event.target property, which refers to the clicked element.

// Finally, we use CSS to style the "active" class to give the active menu link a different color.