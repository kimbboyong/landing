$(document).ready(function () {

    $('.ready a').click(function () {
        $('.ready').remove();
    })

    $(document).keydown(function (e) {
        var left = parseInt($('.gif_img').css('left'));

        if (e.keyCode === 39 || e.keyCode === 37) {
            if (e.keyCode === 37) {
                $('.gif_img').addClass('on reverse');
            } else {
                $('.gif_img').addClass('on');
            }
        }
        if ($('.section_05').offset().left === 20) {

            if ($('.gif_img').offset().left >= $('.section_05').width() / 2) {
                $('.gif_back').addClass('on');
            } else {
                $('.gif_img').css('left', '+=' + '10px');
            }
        }
    });

    $(document).keyup(function (e) {
        var left = parseInt($('.gif_img').css('left'));

        scrollLeft = $('.container .inner').scrollLeft()

        $('.gif_img').removeClass('on reverse');
        if ($('.gif_img').offset().left >= $('.section_05').width() / 2) {
            $('.gif_back').removeClass('on');
        }
    });
})
