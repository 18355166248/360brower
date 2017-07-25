$(window).ready(function () {
    $(".contener").fullpage({
        verticalCentered:false,
        loopBottom:true,
        loopTop:true,
        afterLoad: function (vam,i) {
            $(".section").removeClass("now");
            setTimeout(function() {
                $(".section").eq(i-1).addClass('now');
            },200)
        }
    });
});