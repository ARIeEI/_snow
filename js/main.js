var menu = $('.header');
var menu_button = $('.header__hamber-menu');
menu_button.on('click',function(){
    var menu_list = $('.header__menu');
    var menu_bar = $('.menu__center')
    menu.toggleClass('open');
    menu_bar.toggleClass('menu__active');
    menu_list.fadeToggle();

});

if($(window).width() <= 768){
    $(window).scroll(function(){
        var window_scroll = $(this).scrollTop();
        if(window_scroll >= menu.height() ){
            console.log(menu.height());
        menu.addClass('active');
    }else {
        menu.removeClass('active');
    }
   });
}