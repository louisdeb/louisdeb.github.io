$(function() {
  console.log('main.js loaded');

  //nav-home listener
  $('#nav-home').click(function() {
    console.log('nav-home click');
    $('body').css('overflow', 'visible');
    $('.section').fadeOut();
    setTimeout(function() {
      $('#home').fadeIn();
      $('body').css('overflow', 'hidden');
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
});

function showSection(sectionName) {
  $('body').css('overflow', 'visible');
  $(sectionName).css('display', 'block');
  setTimeout(function() {
    $('#home').css('display', 'none');
    $('body').css('overflow', 'hidden');
  }, 500);
}
