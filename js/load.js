
$(function() {
    slideUpCircle();    
    waitForClick();    
})

function slideUpCircle() {
    var circle = $('#circle');    
    circle.animate({
        top : '-=50%'
    }, 3000, 'easeOutQuint');
}

function waitForClick() {    
    var circle = $('#circle');
    var parent = $('#centre-wrapper');
    var n = 0;

    circle.click(function() {        
        n++;

        parent.append("<div class='hollow-circle'></div>");
        var hollowCircle = $(".hollow-circle");

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

    })
}

function turnWhite() {

}