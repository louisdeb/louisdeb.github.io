$(function() {
  console.log('main.js loaded');

  //nav-home listener
  $('#nav-home').click(function() {
    console.log('nav-home click');
    $('.section').css('display', 'none'); //remove jump using a delay
  });

  //nav-portfolio listener
  $('#nav-portfolio').click(function() {
    console.log('nav-portfolio click');
    $('#portfolio').css('display', 'block');
  });

  //nav-about listener
  $('#nav-about').click(function() {
    console.log('nav-about click');
    $('#about').css('display', 'block');
  });

  //nav-contact listener
  $('#nav-contact').click(function() {
    console.log('nav-contact click');
    $('#contact').css('display', 'block');
  });

  //TODO: make any visible .section invisible when user scrolls back to title screen.
  //TODO: or don't allow user to scroll back to title screen

});
