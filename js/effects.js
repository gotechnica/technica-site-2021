// faq accordion
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('accordion-active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

//changing background color + navbar items on scroll
$(function () {
  $(document).scroll(function () {
    var $main = $('.main');

    //hero
    if ($(window).scrollTop() >= $('#hero-nav').offset().top - 100) {
      $('.navbar-nav li').removeClass("active");
    }

    //about
    if ($(window).scrollTop() >= $('#about').offset().top - 100) {
      $('.navbar-nav li').removeClass("active");
      $('.navbar-nav li.about-nav').addClass("active");
    }

    //what you can do
    if ($(window).scrollTop() >= $('#what-can-you-do').offset().top - 100) {
      $main.addClass('scroll-what-can-you-do');
    } else {
      $main.removeClass('scroll-what-can-you-do');
    }

    //tracks
    if ($(window).scrollTop() >= $('#tracks').offset().top - 100) {
      $main.addClass('scroll-tracks');
    } else {
      $main.removeClass('scroll-tracks');
    }

    //registration
    if ($(window).scrollTop() >= $('#registration').offset().top - 100) {
      $('.navbar-nav li').removeClass("active");
      $main.addClass('scroll-registration');
      $('.navbar-nav li.reg-nav').addClass("active");
    } else {
      $main.removeClass('scroll-registration');
    }

    //schedule
    if ($(window).scrollTop() >= $('#schedule').offset().top - 100) {
      $('.navbar-nav li').removeClass("active");
      $main.addClass('scroll-schedule');
      $('.navbar-nav li.sched-nav').addClass("active");
    } else {
      $main.removeClass('scroll-schedule');
    }

    //faq
    if ($(window).scrollTop() >= $('#faq').offset().top - 100) {
      $('.navbar-nav li').removeClass("active");
      $main.addClass('scroll-faq');
      $('.navbar-nav li.faq-nav').addClass("active");
    } else {
      $main.removeClass('scroll-faq');
    }

    //contact
    if ($(window).scrollTop() >= $('#contact').offset().top - 100) {
      $('.navbar-nav li').removeClass("active");
      $('.navbar-nav li.contact-nav').addClass("active");
    }
  });
});

// scrolling effect
$(document).ready(function () {
  $('.nav-link').click(function (e) {
    var linkedHref = $(this).attr('href');
    if (linkedHref == '#about') {
      $('html, body').animate(
        {
          scrollTop: $(linkedHref).offset().top - 45,
        },
        1000
      );
    } else {
      $('html, body').animate(
        {
          scrollTop: $(linkedHref).offset().top - 85,
        },
        1000
      );
    }
    e.preventDefault();
  });
});

// testimonial carousel
var flky = new Flickity('.gallery', {
  // options, defaults listed
  accessibility: true,
  // enable keyboard navigation, pressing left & right keys
  adaptiveHeight: false,
  // set carousel height to the selected slide
  autoPlay: false,
  cellAlign: 'center',
  // alignment of cells, 'center', 'left', or 'right'
  // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)
  cellSelector: undefined,
  // specify selector for cell elements
  contain: false,
  // will contain cells to container
  // so no excess scroll at beginning or end
  // has no effect if wrapAround is enabled
  draggable: '>1',
  // enables dragging & flicking
  // if at least 2 cells
  dragThreshold: 3,
  // number of pixels a user must scroll horizontally to start dragging
  // increase to allow more room for vertical scroll for touch devices
  freeScroll: false,
  // enables content to be freely scrolled and flicked
  // without aligning cells
  friction: 0.2,
  // smaller number = easier to flick farther
  groupCells: false,
  // group cells together in slides
  initialIndex: 0,
  // zero-based index of the initial selected cell
  lazyLoad: true,
  // enable lazy-loading images
  // set img data-flickity-lazyload="src.jpg"
  // set to number to load images adjacent cells
  percentPosition: true,
  // sets positioning in percent values, rather than pixels
  // enable if items have percent widths
  // disable if items have pixel widths, like images
  prevNextButtons: true,
  // creates and enables buttons to click to previous & next cells
  pageDots: true,
  // create and enable page dots
  resize: true,
  // listens to window resize events to adjust size & positions
  rightToLeft: false,
  // enables right-to-left layout
  setGallerySize: false,
  // sets the height of gallery
  // disable if gallery already has height set with CSS
  watchCSS: false,
  // watches the content of :after of the element
  // activates if #element:after { content: 'flickity' }
  wrapAround: true,
  // at end of cells, wraps-around to first for infinite scrolling
});

//schedule
$(function () {
  var $sat = $("#sattogglecontainer");
  var $sun = $("#suntogglecontainer");
  $("#sattoggle").click(function() { $sat.addClass('active-day'); $sun.removeClass('active-day');});
  $("#suntoggle").click(function() { $sun.addClass('active-day'); $sat.removeClass('active-day');});
});
