$(document).ready(function(){
    $('.menu_btn').click(function (e) { 
        e.preventDefault();
        $('.menu').toggleClass('open');
        $('.menu_btn').toggleClass('orange');
    });

});
 

