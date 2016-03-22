var main = function() {

  $('.button').click(function() {
    $('#login').modal('show');
    $('.landing').dimmer('show');
  });

}

$(document).ready(main);
