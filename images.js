$(document).scroll(function () {
    var y = $(this).scrollTop();
    var x = $('.nextimg').position();
    var q = $('.thirdimg').position();
    var z = $('.lastimg').position();
    if (y > z.top) {
        $('.image-4-co').show();
        

    } 
    else if (y > q.top) {
        $('.image-3-co').show();
        $('.image-4-co').hide();

    } 
    else if (y > x.top) {
        $('.image-2-co').show();
        $('.image-3-co').hide();
        $('.image-4-co').hide();

    } 
    else {
        $('.image-2-co').hide();
        $('.image-3-co').hide();
        $('.image-4-co').hide();
    }

});