$(function() {
  console.log('main.js loaded');

  //nav-home listener
  $('#nav-home').click(function() {
    console.log('nav-home click');
    setTimeout(function() {
      $('.section').css('display', 'none');
    }, 500); //Delay stops jumping to home immediately
  });

  //nav-portfolio listener
  $('#nav-portfolio').click(function() {
    console.log('nav-portfolio click');
    showSection('#portfolio');
  });

  //nav-about listener
  $('#nav-about').click(function() {
    console.log('nav-about click');
    showSection('#about');
  });

  //nav-contact listener
  $('#nav-contact').click(function() {
    console.log('nav-contact click');
    showSection('#contact');
  });

  //TODO: make any visible .section invisible when user scrolls back to title screen.
  //TODO: or don't allow user to scroll back to title screen

});

function showSection(sectionName) {
  $('body').css('overflow', 'visible');
  $(sectionName).css('display', 'block');
  setTimeout(function() {
    $('body').css('overflow', 'hidden');
  }, 500);
}
