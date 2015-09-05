$(function() {
    $('#sound-message').delay(1000).fadeOut(1000);

    setTimeout("slideUpCircle()", 2500);
    waitForClick();
})

function slideUpCircle() {
    var circle = $('#circle');
    $('#sound-message').remove();
    circle.animate({
        top : '-=51.5%'
    }, 3000, 'easeOutQuint');
}

function waitForClick() {
    var circle = $('#circle');
    var parent = $('#wrapper');
    var n = 0;

    circle.click(function() {

        if(!circle.is(':animated')) {

            parent.append("<div class='hollow-circle'></div>");
            var hollowCircle = $(".hollow-circle");
            n++;

            hollowCircle.animate({
                width : '+=2500px',
                height : '+=2500px',
                top : '-=1250px',
                left : '-=1250px'
            }, 2000, function() {
                n--;
                hollowCircle.remove();
            });

            if(n > 12) {
                circle.remove();
                turnWhite();
            }
        }
    })
}

function turnWhite() {
    var parent = $('#wrapper');
    parent.append("<div id='background-circle'></div>");
    var backgroundCircle = $('#background-circle');

    backgroundCircle.animate({
        width : '+=2500px',
        height : '+=2500px',
        top : '-=1250px',
        left : '-=1250px'
    }, 2000, function() {
        var body = $('body');
        body.css('background-color', 'white');
        backgroundCircle.remove();
        showFloor();
    });
}

function showFloor() {
    var parent = $('#wrapper');
    parent.append("<div id='floor'></div>");
    var floor = $('#floor');

    //animate floor
}
