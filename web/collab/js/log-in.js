$(function() {
  console.log('listeners.js loaded');

  //Log In header button listener
  $('#log').click(function() {
    $('#log-sign-container').fadeIn();
    $('#submit-button').prop('value', 'log in');
  });

  //Sign Up header button listener
  $('#sign').click(function() {
    $('#log-sign-container').fadeIn();
    $('#submit-button').prop('value', 'sign up');
  });

  //Log Sign exit button listener
  $('#log-sign-exit').click(function() {
    $('#log-sign-container').fadeOut();
  });

});
