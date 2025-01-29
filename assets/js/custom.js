$(document).ready(function () {

  // Tab Section
  $(".tabBtn").click(function () {
    var tab_id = $(this).attr("data-id");

    $(".tabBtn").removeClass("active");
    $(".tab-content").removeClass("active");

    $(this).addClass("active");
    $("#" + tab_id).addClass("active");
  });

  // To add Loading Lazy to all img and iframes in site
  $('img, iframe').attr('loading', 'lazy');

  // footer Section Srolling
  $('a[rel]').on('click', function (e) {
    e.preventDefault(); // Prevent the default behavior
    var targetSection = $('#' + $(this).attr('rel')); // Get the target section by rel
    if (targetSection.length) {
      $('html, body').animate(
        {
          scrollTop: targetSection.offset().top - 90, // Add the offset of 90px
        },
        800 // Animation duration in milliseconds
      );
    }
  });


  // Slide To Top Button
  var btn = $('.bckTop');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });


  // About Page Sec 2
  $('.absoluteSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    autoplaySpeed: 2000,
  });

  // About Client Review
  $('.clientRewSlider').slick({
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    autoplaySpeed: 4000,
    autoplay: true,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  // Hamberger Menu
  $(document).click(function (event) {
    // Check if the click is outside the menu and hamburger button
    if (!$(event.target).closest(".psNav-container, .line-menu-sec").length) {
      $(".line-menu-sec").removeClass("activeline"); // Remove active state
      $(".psNav-container").removeClass("menu-open"); // Slide out the menu
      $("body").removeClass("menu-open no-scroll"); // Remove overlay and scroll lock
    }
  });

  $(".line-menu-sec").click(function (event) {
    event.stopPropagation(); // Prevent the click from bubbling up to `document`
    $(this).toggleClass("activeline");
    $(".psNav-container").toggleClass("menu-open"); // Toggle slide-in effect

    if ($(this).hasClass("activeline")) {
      $("body").addClass("menu-open no-scroll");
    } else {
      $("body").removeClass("menu-open no-scroll");
    }
  });

  // Close menu on click of .closeHam
  $(".closeHam").click(function () {
    $(".line-menu-sec").removeClass("activeline"); // Remove active state
    $(".psNav-container").removeClass("menu-open"); // Slide out the menu
    $("body").removeClass("menu-open no-scroll"); // Remove overlay and scroll lock
  });


  // navigation
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.mainHeader').addClass('stickyHead');
    } else {
      $('.mainHeader').removeClass('stickyHead');
    }
  });

  // home head slide
  $('.mainSlides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true
  });


  // happy client
  $('.psCustomSlide').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,
    arrows: false,
    fade: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });


  // foot slider
  $('.ftSlideBox').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    arrow: false,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 0,  // Continuous scrolling
    cssEase: 'linear',  // Smooth linear animation
    pauseOnHover: false,
    swipe: false,  // Disable swipe to keep marquee consistent

    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });


  // Initial state: All accordions are closed
  $(".accord-cont").slideUp();

  // Handle accordion behavior
  $(".accordBtn").click(function () {
    const content = $(this).siblings(".accord-cont"); // Find the sibling content
    const isOpen = content.is(":visible");

    // Close all accordions and reset arrows and classes
    $(".accord-cont").slideUp();
    $(".accord-arrow-1").removeClass("accord-arrow-up-1");
    $(".accord-arrow-2").removeClass("accord-arrow-up-2");
    $(".accord-btn").removeClass("accord-open");

    // Open the clicked accordion if it was closed
    if (!isOpen) {
      content.slideDown();
      $(this).find(".accord-arrow-1").addClass("accord-arrow-up-1");
      $(this).find(".accord-arrow-2").addClass("accord-arrow-up-2");
      $(this).closest(".accord-btn").addClass("accord-open"); // Add the class to the closest parent with accord-btn class
    }
  });





});