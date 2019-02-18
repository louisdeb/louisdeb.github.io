$(document).ready(function() {
  $('.album-title').click(titleClicked);
  $('.album-content').each(function(i, o) {
    if(i != 0)
      $(this)[0].style.height = 0;
  });
  $('.album-title')[0].click();
});

function changePhoto(id) {
  var photo1 = $('#photo1');
  var photo2 = $('#photo2');

  photo1.hide();
  photo1.bind('load', function() {
    photo1.fadeIn(function() {
      photo2.attr('src', 'images/' + id + '.png')
    });
  }).attr('src', 'images/' + id + '.png');
}

function titleClicked(elem) {
  var id = elem.currentTarget.parentElement.id;

  // Hide every section content except for this sections
  $('.album-content').each(function(i, o) {
    var content = $(this)[0];
    var contentId = content.parentElement.id;
    if(contentId != id)
      content.style.height = 0;
    else
      content.style.height = content.scrollHeight + 'px';
  });

  changePhoto(id);
}
