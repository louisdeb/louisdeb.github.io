
$(function() {
    slideUpCircle();    
    waitForClick();    
})

function slideUpCircle() {
    console.log('slideUpCircle called');

    var circle = $('#circle');    
    circle.animate({
        marginTop : '-=30%'
    }, 3000, 'easeOutQuint');
}

function waitForClick() {
    console.log('waitForClick called');

    var circle = $('#circle');
    var n = 0;
    circle.click(function() {
        console.log('clicked' + n);
        n++;
    })
}