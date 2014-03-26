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

    googlemap('test');

});
