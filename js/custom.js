

  $(':root').css("--main-color", localStorage.getItem("mainColor"));

  $(window).on("load", function(){
       $('.loader').fadeOut('slow');
   }) 

   $('html').niceScroll({
    cursorcolor         : 'var(--main-color)',
    cursorwidth         : '7px',
    cursorborder        : 'var(--main-color)',
    cursorborderradius  : '0'
   });

  // set  header height
  $('.mainHeader').height($(window).height());

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-btn').fadeIn('slow');
      $('.section-dots').fadeIn('slow');
    } else {
      $('.back-btn').fadeOut('slow');
      $('.section-dots').fadeOut('slow');
    }
  });

  if ($(this).scrollTop() > 100) {
    $('.back-btn').fadeIn('slow');
    $('.section-dots').fadeIn('slow');
  }

  $('.back-btn').click(function() {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
  });
  

  // Initiate the wowjs animation library
  new WOW().init();

  // type paragraph

    var typed3 = new Typed('#typed', {
      strings: ['Design All Things sunt in culpamollit.', 'Colored Your Lifesunt in culpa qui officit.', 'Change Your Traditionssunt ineserunt mollit.'],
      typeSpeed: 100,
      backSpeed: 30,
      cursorChar: '',
      shuffle: true,
      smartBackspace: false,
      loop: true
    });
   

    $('.bars-menu').click(function(){
         $('.links').slideToggle('slow');
    });

    $('.Sethings').click(function(){
         $('.color-menu').fadeToggle('slow');
    });

    $('.color-container span').click(function(){
         localStorage.setItem("mainColor", $(this).data('color'));
         $(':root').css("--main-color", localStorage.getItem("mainColor"));
    });

    
    $('.chat .header').click(function(){
         $('.chat form').slideToggle('slow');
    });
     
     // show mobile chat form 
     
     $('.mobile-chat').click(function(){
         $('.chat').slideToggle('slow');
         $('.chat form').slideToggle('1000');
    });

    $('.chat form .contact-area input').focus(function(){
         $('.chat form .contact-area button').fadeIn('slow');
    });
    
    // Customer Auto Slider
    (function autoSlider(){
        $('.slider .active').each(function(){

           if (!$(this).is('last-child')){
              
              $(this).delay(3000).fadeOut(1000, function(){

                $(this).removeClass('active').next().addClass('active').fadeIn();

                autoSlider();
              });
           }else {

             $(this).delay(3000).fadeOut(1000, function(){

                $(this).removeClass('active');

                $('.slider div:first-child').addClass('active').fadeIn();

                autoSlider();
             });
           }
        });
    }());