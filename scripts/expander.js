$(document).ready(function() {
  $('.album-title').click(titleClicked);

  // ok i know! i'm just hacking...
  setTimeout(function() {
    $('#photo1').show();
    $('#photo2').show();
    $('#photo3').show();
  }, 500);
});

function changePhoto(id) {
  var photos = $('.photo');

  photos.each(function() {
    var elem = $(this);
    var isTarget = elem[0].src.indexOf(id) != -1;
    if (isTarget) {
      elem.fadeIn();
    } else {
      elem.fadeOut();
    }
  });
}

function titleClicked(elem) {
  var id = elem.currentTarget.parentElement.id;

  // Hide every section content except for this sections (¿que?)
  $(".album-content").each(function (i, o) {
    var content = $(this)[0];
    var contentId = content.parentElement.id;
    if (contentId != id) 
      $(this).animate({height: 0}, 20, "linear");
    else 
      $(this).animate({height: content.scrollHeight + "px"}, 20, "linear");
  });

  changePhoto(id);
}
