$("img.enter").animate({"left": "0px"}, 500, function() {
    setTimeout(function() {
        $("img.bg").css("visibility", "visible");
        $("img.bg").addClass('animate');
        $('img.stop').animate({"left": "-400px"}, 900);
        $("img.leave").animate({"left": "800px"}, 600);
        setTimeout(function() {

            let ms = 0;
            $('.text').each(function(index, element) {
                setTimeout(function() {
                    $(element).slideToggle("slow");
                }, ms);
                ms += 200;
            })

        }, 650);
    }, 500)
});