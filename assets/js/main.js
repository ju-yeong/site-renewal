// scroll top btn

$('.scroll-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
})

// us text loop

function usText1() {
    setTimeout(function () {
        $('.us-text1').css('display', 'none');
        $('.us-text2').css('display', 'block');
        usText2()
    }, 5000);
}
function usText2() {
    setTimeout(function () {
        $('.us-text2').css('display', 'none');
        $('.us-text1').css('display', 'block');
        usText1()
    }, 5000);
}

usText1();

// scroll event


let lastScrollTop = 0;
mainMove = true;

$(window).scroll(function () {

    let scrollTop = $(this).scrollTop()


    // top btn

    // console.log("scrolltop:" + scrollTop);

    if (
        (scrollTop < lastScrollTop)
        &&
        (scrollTop > 1500)
    ) {
        $(".scroll-top").css('transform', 'translateY(0)');
    } else {
        $(".scroll-top").css('transform', 'translateY(150px)');
    };

    lastScrollTop = scrollTop;


    // video text
    if (scrollTop > 90) {
        $('.video-text').fadeOut();

    } else {
        $('.video-text').fadeIn();
    }


    // move to main
    if (scrollTop < 100) {
        mainMove = true;
    }

    console.log(`스크롤: ${scrollTop}`)
    if (
        ((scrollTop > 150) && (scrollTop < 300))
        && (mainMove === true)
    ) {
        let offset = $('.us').offset();
        $('html, body').animate({ scrollTop: offset.top }, 0);
        
        mainMove = false;

        console.log(`mainMove: ${mainMove}`)
        console.log(`scrollTop: ${scrollTop}`)

        return mainMove
        // console.log('it working')
    }

    console.log(mainMove)


    // experience bg img show hide


    //상대좌표로 스크롤 제어하기
    let target1 = document.querySelector('.ex-img1');
    let target2 = document.querySelector('.ex-img2');
    let target3 = document.querySelector('.ex-img3');

    let elementTop1 = target1.getBoundingClientRect().top;
    let elementTop2 = target2.getBoundingClientRect().top;
    let elementTop3 = target3.getBoundingClientRect().top;

    // console.log(elementTop1);

    if ((elementTop1 > 100) && (elementTop1 < 500)) {
        $('.ex-img1').addClass('opacity');
    } else {
        $('.ex-img1').removeClass('opacity');
    }
    if ((elementTop2 > 100) && (elementTop2 < 500)) {
        $('.ex-img2').addClass('opacity');
    } else {
        $('.ex-img2').removeClass('opacity');
    }
    if ((elementTop3 > 100) && (elementTop3 < 500)) {
        $('.ex-img3').addClass('opacity');
    } else {
        $('.ex-img3').removeClass('opacity');
    }

})

// let lastScrollTop = 0;
// $(window).scroll(function(){
//     // top btn
//     let scrollTop = $(this).scrollTop()


//     console.log("scrolltop:" + scrollTop);

//     if (
//         (scrollTop > lastScrollTop)
//         &&
//         (scrollTop < 2000)
//      ) {
//         $(".scroll-top").css('transform', 'translateY(150px)');
//     } else {
//         $(".scroll-top").css('transform', 'translateY(0)');
//     };

//     lastScrollTop = scrollTop;
// })


// $('.video').click(function () {
//     $('.video-text').css('color','blue');

//     let offset = $('.us').offset();
//         $('html, body').animate({scrollTop : offset.top}, 400);
// })