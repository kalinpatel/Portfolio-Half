$(window).on("scroll touchmove", function() 
{
    if ($(document).scrollTop() >= $("#one").position().top && $(document).scrollTop() < $("#about").position().top  ) 
    {
        $('figure').css('background-image', 'url(assets/img/background.jpg)')
    };
    if ($(document).scrollTop() >= $("#about").position().top && $(document).scrollTop() < $("#service").position().top)
    {
        $('figure').css('background-image', 'url(assets/img/img_two.jpg)')
    };
   if ($(document).scrollTop() >= $("#service").position().top && $(document).scrollTop() < $("#work").position().top ) 
   {
        $('figure').css('background-image', 'url(assets/img/img_three.jpg)')
   };
   if ($(document).scrollTop() >= $("#work").position().top && $(document).scrollTop() < $("#contact").position().top ) 
   {
        $('figure').css('background-image', 'url(assets/img/img_three.jpg)')
   };
   if ($(document).scrollTop() >= $("#contact").position().top) 
   {
        $('figure').css('background-image', 'url(assets/img/img_four.jpg)')
   };

});
