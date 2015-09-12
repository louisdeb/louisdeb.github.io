$(function() {
  console.log('main.js loaded');
  currentProjectIndex = 0;

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
    showProject(currentProjectIndex, false);
    setTimeout(function() {
      $('#next-arrow').fadeIn();
    }, 500);
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

  //Portfolio navigation arrow code

  //next-arrow listener
  $('#next-arrow').click(function() {
    projects = $('.project');
    if((currentProjectIndex + 1) == projects.length) return;
    fadeOutProject();
    currentProjectIndex++;
    showProject(currentProjectIndex, true);
    currentProjectIndex > 0 && $('#prev-arrow').fadeIn();
  });

  //prev-arrow listener
  $('#prev-arrow').click(function() {
    if(currentProjectIndex == 0) return;
    fadeOutProject();
    currentProjectIndex--;
    showProject(currentProjectIndex, true);
    currentProjectIndex == 0 && $('#prev-arrow').fadeOut();
  });

  $('html').keypress(function(e) {
    //39 is right
    //37 is left
    if($('#portfolio').is(':visible')) {
      if(e.keyCode == 39) {
        $('#next-arrow').click();
      } else if(e.keyCode == 37) {
        $('#prev-arrow').click();
      }
    }

    if($('#home').is(':visible')) {
      if(e.keyCode == 40) {
        $('#nav-portfolio').click();
      }
    } else {
      if(e.keyCode == 38) {
        $('#nav-home').click();
      }
    }
  });

  $('html').swipe(function() {
    if($('#portfolio').is(':visible')) {
      if(swipe.direction == 'left') {
        $('#next-arrow').click();
      } else if(swipe.direction == 'right') {
        $('#prev-arrow').click();
      }
    }

    if(!$('home').is(':visible')) {
      if(swipe.direction == 'up') {
        $('#nav-home').click();
      }
    }
  });
});

function showSection(sectionName) {
  $('body').css('overflow', 'visible');
  $(sectionName).css('display', 'block');
  setTimeout(function() {
    $('#home').css('display', 'none');
    $('body').css('overflow', 'hidden');
  }, 500);
};

function showProject(index, fade) {
  projects = $('.project');
  currentProject = projects[index];
  fade ? $(currentProject).fadeIn() : $(currentProject).css('display', 'block');

  currentProjectIndex < (projects.length - 1) ? $('#next-arrow').fadeIn() : $('#next-arrow').fadeOut(); //Fade out next arrow if last element reached

};

function fadeOutProject() {
  projects = $('.project');
  currentProject = projects[currentProjectIndex];
  $(currentProject).fadeOut();
}
