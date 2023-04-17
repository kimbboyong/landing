$(document).ready(function () {

    $('.ready a').click(function () {
        $('.ready').remove();
    })

    // var scrollLeft = 0;

    $('.container .inner').scroll(function () {
        scrollLeft = $('.container .inner').scrollLeft();

        // if ($('.section_02').offset().left < 200) {
        //     $('.section_02 .wrap').addClass('on');
        // } else {
        //     $('.section_02 .wrap').removeClass('on');
        // }

        // if ($('.section_03').offset().left < 200) {
        //     $('.section_03 .wrap').addClass('on');
        // } else {
        //     $('.section_03 .wrap').removeClass('on');
        // }

        // if ($('.section_04').offset().left < 200) {
        //     $('.section_04 .wrap').addClass('on');

        // } else {
        //     $('.section_04 .wrap').removeClass('on');
        // }

        // if ($('.section_05').offset().left < 200) {
        //     $('.section_05 .wrap').addClass('on');

        // } else {
        //     $('.section_05 .wrap').removeClass('on');
        // }
    });

    $(document).keydown(function (e) {
        var left = parseInt($('.gif_img').css('left'));

        // if (e.keyCode === 39 || e.keyCode === 37) $('.gif_img').addClass(`on ${e.keyCode === 37 && 'reverse'}`);


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
        // // 방향키 눌렸을 때
        // if (e.keyCode >= 37 && e.keyCode <= 40) {
        //     $('.gif_img').addClass('on');
        //     if (left >= 1600) {
        //       
        //     }
        //     if (scrollLeft >= 7520 && left < 1600) {
        //         
        //     }
        // }
    });

    $(document).keyup(function (e) {
        var left = parseInt($('.gif_img').css('left'));

        scrollLeft = $('.container .inner').scrollLeft()

        $('.gif_img').removeClass('on reverse');
        if ($('.gif_img').offset().left >= $('.section_05').width() / 2) {
            $('.gif_back').removeClass('on');

        }
        // 방향키에서 손 떼었을 때
        // if (e.keyCode >= 37 && e.keyCode <= 40) {
        //     $('.gif_img').removeClass('on');
        //     $('.gif_back').removeClass('on');
        // } if (left >= 1600) {
        //     $('.gif_stop').css('display', 'none');
        //     $('.gif_back').addClass('on');
        // }
    });
})
