
$(document).ready(function() {
  $('.dropdown').on('show.bs.dropdown', function() {
    var dropdownContainer = $(this).closest('.dropdown-container');
    var buttonsBelow = dropdownContainer.find('.buttons-below');
    buttonsBelow.css('margin-top', dropdownContainer.find('.dropdown-menu').outerHeight());
  });
  
  $('.dropdown').on('hide.bs.dropdown', function() {
    var buttonsBelow = $(this).closest('.dropdown-container').find('.buttons-below');
    buttonsBelow.css('margin-top', 0);
  });
});


$(document).ready(function() {
    $('.dropdown').hover(
      function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      },
      function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
      }
    );
  });