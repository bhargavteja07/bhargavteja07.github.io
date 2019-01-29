$(function() {
  // animate sticky header on displays over 500px
  // show brand icon on scroll
  var bgColor = '#90A4AE';
  var headerColor = '#37474F';
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      if ($(this).width() > 500) {
        $('header').addClass('sticky');
      }
      $('#brand').css('display', 'inline');
      $('.nav, header').css('background-color', headerColor);
    }
    else {
      if ($(this).width() > 500) {
        $('header').removeClass('sticky');
      }
      $('#brand').css('display', 'none');
      $('.nav, header').css('background-color', bgColor);
    }
  });

  // toggle mobile navigation and change hamburger icon to 'x' on click
  var collapsed = true;
  $('#nav-toggle-icon').click(function() {
    $('.nav').toggleClass('open');
    var newHtml = (collapsed) ? 'close' : 'menu';
    $('#nav-toggle-icon').html(newHtml);
    collapsed = (collapsed) ? false : true;
  });
  // close menu after clicking a link
  $('a').click(function() {
    if (!collapsed && $(window).width() <= 500) {
      $('.nav').removeClass('open');
      $('#nav-toggle-icon').html('menu');
      collapsed = true;
    }
  });


});