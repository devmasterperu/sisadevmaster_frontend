// se visualiza dentro del archivo scripts.js

document.addEventListener("DOMContentLoaded", () => {
    //   new Mmenu("#my-menu");
});

new Mmenu(document.querySelector('#menu'));

document.addEventListener('click', function(evnt) {
    var anchor = evnt.target.closest('a[href^="#/"]');
    if (anchor) {
        alert('Thank you for clicking, but that\'s a demo link.');
        evnt.preventDefault();
    }
});

jQuery(document).ready(function ($) {
  $('.open-popup-link').magnificPopup({
      type: 'inline',
      midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
      closeBtnInside: true
  });
});
