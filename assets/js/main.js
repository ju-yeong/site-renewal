// us text loop

function usText1() {
    setTimeout(function () {
        $('.us-text1').css('display','none');
        $('.us-text2').css('display','block');
        usText2()
    }, 3500);
}
function usText2() {
    setTimeout(function () {
        $('.us-text2').css('display','none');
        $('.us-text1').css('display','block');
        usText1()
    }, 3500);
}

// usText1();

// scroll event

let lastScroll = 0,
        delta = 10,
        mainMove = true;


$(window).scroll(function () {
    let scrollTop = $(this).scrollTop()

    // console.log(scrollTop);

    if(scrollTop > 90){
        $( '.video-text' ).fadeOut();

    } else {
        $( '.video-text' ).fadeIn();
    }
    

    
    // setInterval(() => {
    //     lastScroll = scrollTop;
    // }, 1);

    // if(
    //     (scrollTop > 200) && (scrollTop < 230)
    //     // Math.abs(lastScroll - scrollTop) <= delta
    //     ) {


    //         if(
    //             scrollTop > lastScroll
                
    //             // Math.abs(lastScroll - scrollTop) <= delta
                
    //             ){

    //         let offset = $('.us').offset();

    //         $('html, body').animate({scrollTop : offset.top}, 400);


            
    //         console.log(`lastScroll: ${lastScroll}`)
    //         console.log(`scrollTop: ${scrollTop}`)
    //     }
    // }


    if(scrollTop < 70){
        mainMove = true;
    }
    
    if((scrollTop > 80) && (mainMove === true)){
        let offset = $('.us').offset();
        $('html, body').animate({scrollTop : offset.top}, 400);

        mainMove = false;
        console.log('it working')
    }

    console.log(`mainMove: ${mainMove}`)
    console.log(`scrollTop: ${scrollTop}`)

})


// $('.video').click(function () {
//     $('.video-text').css('color','blue');

//     let offset = $('.us').offset();
//         $('html, body').animate({scrollTop : offset.top}, 400);
// })