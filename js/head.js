$('.yijidaohang').mouseenter(function() {

    $(this).find('.erjidaohang').stop().show();

});
$('.yijidaohang').mouseleave(function() {

    $(this).find('.erjidaohang').stop().hide();

});