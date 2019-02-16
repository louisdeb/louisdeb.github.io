$(document).ready(function() {
  $('.album-title').click(titleClicked);
});

function titleClicked(elem) {
  var id = elem.currentTarget.parentElement.id;

  // Hide every section content except for this sections
  $('.album-content').each(function(i, o) {
    var content = $(this)[0];
    var contentId = content.parentElement.id;
    content.hidden = contentId != id;
  });

  // Set photo to relevant
  // Might choose to use an external func and have some fade
  $('#photo').attr('src', 'images/' + id + '.png');
}
