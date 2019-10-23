// se visualiza dentro del archivo assets/js/app.js
new Mmenu(document.querySelector('#menu'));

document.addEventListener('click', function(evnt) {
    var anchor = evnt.target.closest('a[href^="#/"]');
    if (anchor) {
        alert('Thank you for clicking, but that\'s a demo link.');
        evnt.preventDefault();
    }
});

// jQuery(document).ready(function ($) {
//   $('.open-popup-link').magnificPopup({
//       type: 'inline',
//       midClick: true,
//       closeBtnInside: true
//   });
// });
