$(function(){
    /**
    * bxSlider
    */
    $('.slider1').bxSlider({
        minSlides: 3,
        moveSlides:1,  
        maxSlides: 3,
        slideMargin: 11,
        slideWidth:326,
        infiniteLoop:false,
        pager:false, 
        nextText:'',
        prevText:''
    });

    $('.slider-main').bxSlider({
        minSlides: 1,
        moveSlides:1,
        maxSlides: 1,
        slideMargin: 0,
        slideWidth:690,
        infiniteLoop:false,
        pager:true,
        nextText:'',
        prevText:''
    });

    /**
    * jcarusel
    */ 
    $('.jcarousel_keys').jcarousel({wrap: 'both'}).jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();

    /**
    * Flexsilder project single
    */
      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });
      
      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });

});
