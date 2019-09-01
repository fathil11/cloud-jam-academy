// Page Transition
$(document).ready(function () {
    $('#btn_part1').click(function () {
        toggleFullScreen()
        hidePart1()
        setTimeout(function () {
            showPart2()
        }, 2000)
    })

    $('#btn_part2').click(function () {
        hidePart2()
        showPart3()
    })

    $('#btn_next_part3').click(function () {
        hidePart3()
        showPart4()
    })

    $('#btn_back_part3').click(function () {
        hidePart3()
        showPart2()
    })

    $('#btn_next_part4').click(function () {
        hidePart4()
        showPart5()
    })

    $('#btn_back_part4').click(function () {
        hidePart4()
        showPart3()
    })

    $('#btn_next_part5').click(function () {
        hidePart5()
        showPart6()
    })

    $('#btn_back_part5').click(function () {
        hidePart5()
        showPart4()
    })

    $('#btn_next_part6').click(function () {
        hidePart6()
        showPart7()
    })

    $('#btn_back_part6').click(function () {
        hidePart6()
        showPart5()
    })

    $('#btn_next_part7').click(function () {
        hidePart7()
        showPart8()
    })

    $('#btn_back_part7').click(function () {
        hidePart7()
        showPart6()
    })

    $('#final').click(function () {
        window.location = "https://instagram.com/hmtiudinus"
        toggleFullScreen()
    })

    $('input[type="range"]').on('input propertychange', function () {
        if (this.value < 4) {
            $('#range_num').html('I want to learn it')
        } else if (this.value >= 4 && this.value < 7) {
            $('#range_num').html('I\'ve heard about it')
        } else if (this.value >= 7 && this.value < 10) {
            $('#range_num').html('Yes, I know it')
        } else if (this.value == 10) {
            $('#range_num').html('Sure, it\'s my routine')
        }
    })


})


function hidePart1() {
    $('.part1').addClass('d-none')
}

function showPart2() {
    $('.part2').removeClass('d-none')
    $('#part2_comp1').addClass('animated fadeInUp')
    $('#part2_comp2').addClass('animated fadeInDown delay-01s')
    $('#btn_part2').addClass('animated bounceIn delay-03s')
}

function hidePart2() {
    $('.part2').addClass('d-none')
    $('#part2_comp1').removeClass('animated fadeInUp')
    $('#part2_comp2').removeClass('animated fadeInDown delay-01s')
    $('#btn_part2').removeClass('animated bounceIn delay-03s')
}

function showPart3() {
    $('.part3').removeClass('d-none')
    $('#part3_comp1').addClass('animated fadeInUp')
    $('#part3_comp2').addClass('animated fadeInDown delay-01s')
    $('#btn_next_part3').addClass('animated bounceIn delay-03s')
    $('#btn_back_part3').addClass('animated fadeInDown delay-04s')
}

function hidePart3() {
    $('.part3').addClass('d-none')
    $('#part3_comp1').removeClass('animated fadeInUp')
    $('#part3_comp2').removeClass('animated fadeInDown delay-01s')
    $('#btn_next_part2').removeClass('animated bounceIn delay-03s')
    $('#btn_back_part2').removeClass('animated fadeInDown delay-04s')
}

function showPart4() {
    $('.part4').removeClass('d-none')
    $('#part4_comp1').addClass('animated fadeInUp')
    $('#part4_comp2').addClass('animated fadeInDown delay-01s')
    $('#btn_next_part4').addClass('animated bounceIn delay-03s')
    $('#btn_back_part4').addClass('animated fadeInDown delay-04s')
}

function hidePart4() {
    $('.part4').addClass('d-none')
    $('#part4_comp1').removeClass('animated fadeInUp')
    $('#part4_comp2').removeClass('animated fadeInDown delay-01s')
    $('#btn_next_part4').removeClass('animated bounceIn delay-03s')
    $('#btn_back_part4').removeClass('animated fadeInDown delay-04s')
}

function showPart5() {
    $('.part5').removeClass('d-none')
    $('#part5_comp1').addClass('animated fadeInUp')
    $('#part5_comp2').addClass('animated fadeInDown delay-01s')
    $('#btn_next_part5').addClass('animated bounceIn delay-03s')
    $('#btn_back_part5').addClass('animated fadeInDown delay-04s')
}

function hidePart5() {
    $('.part5').addClass('d-none')
    $('#part5_comp1').removeClass('animated fadeInUp')
    $('#part5_comp2').removeClass('animated fadeInDown delay-01s')
    $('#btn_next_part5').removeClass('animated bounceIn delay-03s')
    $('#btn_back_part5').removeClass('animated fadeInDown delay-04s')
}

function showPart6() {
    $('.part6').removeClass('d-none')
    $('#part6_comp1').addClass('animated fadeInUp')
    $('#part6_comp2').addClass('animated fadeIn delay-01s')
    $('#range_num').addClass('animated fadeInDown delay-02s')
    $('#btn_next_part6').addClass('animated bounceIn delay-03s')
    $('#btn_back_part6').addClass('animated fadeInDown delay-04s')
}

function hidePart6() {
    $('.part6').addClass('d-none')
    $('#part6_comp1').removeClass('animated fadeInUp')
    $('#part6_comp2').removeClass('animated fadeInDown delay-01s')
    $('#range_num').removeClass('animated fadeInDown delay-02s')
    $('#btn_next_part6').removeClass('animated bounceIn delay-03s')
    $('#btn_back_part6').removeClass('animated fadeInDown delay-04s')
}

function showPart7() {
    $('.part7').removeClass('d-none')
    $('#part7_comp1').addClass('animated fadeInUp')
    $('#part7_comp2').addClass('animated fadeIn delay-01s')
    $('#btn_next_part7').addClass('animated bounceIn delay-03s')
    $('#btn_back_part7').addClass('animated fadeInDown delay-04s')
    $('#note').addClass('animated fadeInDown delay-3s')
}

function hidePart7() {
    $('.part7').addClass('d-none')
    $('#part7_comp1').removeClass('animated fadeInUp')
    $('#part7_comp2').removeClass('animated fadeInDown delay-01s')
    $('#btn_next_part7').removeClass('animated bounceIn delay-03s')
    $('#btn_back_part7').removeClass('animated fadeInDown delay-04s')
    $('#note').removeClass('animated fadeInDown delay-3s')
}

function showPart8() {
    $('.part8').removeClass('d-none')
    $('#part8_comp1').addClass('animated bounceIn')
    $('#part8_comp2').addClass('animated fadeInDown delay-01s')
    $('#part8_comp3').addClass('animated fadeInDown delay-02s')
    $('#part8_comp4').addClass('animated fadeIn delay-03s')
    $('#final').addClass('animated fadeInDown delay-04s')
}

function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }
}