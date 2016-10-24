(function(){
    var path = document.getElementById('path'),
        segment = new Segment(path),
        begin = document.getElementById('begin'),
        end = document.getElementById('end'),
        duration = document.getElementById('duration'),
        easing = document.getElementById('easing'),
        draw = document.getElementById('draw'),
        random = document.getElementById('random'),
        length = path.getTotalLength(),
        randomBegin,
        randomEnd;
        // segment.draw('0%', '100%',0, {easing: ease.ease('ease')});
        // segment.draw(0, 0,1, {easing: ease.ease('ease')});
    // draw.onclick = function(){
    //     segment.draw(0, '50%', 0.5, {easing: ease.ease('ease')});
    // };
    // $('.myanimate').mousemove(function(event) {
    //     // segment.draw('50%', '50%',0.3, {easing: ease.ease('ease')});
    //     $(this).children().first().animate({'top': '0'}, 500);
    //     // $('#s1img').animate({'marginLeft': '-100%'}, 500);
    // });
    // $('.myanimate').mouseout(function(event) {
    //     alert(1);
    //     // segment.draw('100%', '0%',0.3, {easing: ease.ease('ease')});
    //     $(this).children().first().css('top', '100%');;
    //     // $('#s1img').animate({'marginLeft': '0'}, 500);
    // });
    $(".myanimate1").hover(function (){  
            segment.draw('50%', '50%',0.3, {easing: ease.ease('ease')});
             $(this).children().first().stop().delay(500).animate({'top': '0'}, 500); 
             $('#s1img').animate({'marginLeft': '-100%'}, 500);
        },function (){  
            segment.draw('100%', '0%',0.3, {easing: ease.ease('ease')});
            $(this).children().first().stop().animate({'top' : '100%'},500);
            $('#s1img').animate({'marginLeft': '0'}, 500);
        }); 


})();
(function(){
    var path = document.getElementById('path1'),
        segment = new Segment(path),
        begin = document.getElementById('begin'),
        end = document.getElementById('end'),
        duration = document.getElementById('duration'),
        easing = document.getElementById('easing'),
        draw = document.getElementById('draw'),
        random = document.getElementById('random'),
        length = path.getTotalLength(),
        randomBegin,
        randomEnd;
        // segment.draw('0%', '100%',0, {easing: ease.ease('ease')});
        // segment.draw(0, 0,1, {easing: ease.ease('ease')});
    // draw.onclick = function(){
    //     segment.draw(0, '50%', 0.5, {easing: ease.ease('ease')});
    // };
    $(".myanimate2").hover(function (){  
            segment.draw('50%', '50%',0.3, {easing: ease.ease('ease')});
             $(this).children().first().stop().delay(500).animate({'top': '0'}, 500); 
             $('#s2img').animate({'marginLeft': '-100%'}, 500);
        },function (){  
            segment.draw('100%', '0%',0.3, {easing: ease.ease('ease')});
            $(this).children().first().stop().animate({'top' : '100%'},500);
            $('#s2img').animate({'marginLeft': '0'}, 500);
        }); 


})();
(function(){
    var path = document.getElementById('path2'),
        segment = new Segment(path),
        begin = document.getElementById('begin'),
        end = document.getElementById('end'),
        duration = document.getElementById('duration'),
        easing = document.getElementById('easing'),
        draw = document.getElementById('draw'),
        random = document.getElementById('random'),
        length = path.getTotalLength(),
        randomBegin,
        randomEnd;
        // segment.draw('0%', '100%',0, {easing: ease.ease('ease')});
        // segment.draw(0, 0,1, {easing: ease.ease('ease')});
    // draw.onclick = function(){
    //     segment.draw(0, '50%', 0.5, {easing: ease.ease('ease')});
    // };
   $(".myanimate3").hover(function (){  
            segment.draw('50%', '50%',0.3, {easing: ease.ease('ease')});
             $(this).children().first().stop().delay(500).animate({'top': '0'}, 500); 
             $('#s3img').animate({'marginLeft': '-100%'}, 500);
        },function (){  
            segment.draw('100%', '0%',0.3, {easing: ease.ease('ease')});
            $(this).children().first().stop().animate({'top' : '100%'},500);
            $('#s3img').animate({'marginLeft': '0'}, 500);
        }); 


})();
(function(){
    var path = document.getElementById('path3'),
        segment = new Segment(path),
        begin = document.getElementById('begin'),
        end = document.getElementById('end'),
        duration = document.getElementById('duration'),
        easing = document.getElementById('easing'),
        draw = document.getElementById('draw'),
        random = document.getElementById('random'),
        length = path.getTotalLength(),
        randomBegin,
        randomEnd;
        // segment.draw('0%', '100%',0, {easing: ease.ease('ease')});
        // segment.draw(0, 0,1, {easing: ease.ease('ease')});
    // draw.onclick = function(){
    //     segment.draw(0, '50%', 0.5, {easing: ease.ease('ease')});
    // };
    $(".myanimate4").hover(function (){  
            segment.draw('50%', '50%',0.3, {easing: ease.ease('ease')});
             $(this).children().first().stop().delay(500).animate({'top': '0'}, 500); 
             $('#s4img').animate({'marginLeft': '-100%'}, 500);
        },function (){  
            segment.draw('100%', '0%',0.3, {easing: ease.ease('ease')});
            $(this).children().first().stop().animate({'top' : '100%'},500);
            $('#s4img').animate({'marginLeft': '0'}, 500);
        }); 


})();
(function(){
    var path = document.getElementById('path4'),
        segment = new Segment(path),
        begin = document.getElementById('begin'),
        end = document.getElementById('end'),
        duration = document.getElementById('duration'),
        easing = document.getElementById('easing'),
        draw = document.getElementById('draw'),
        random = document.getElementById('random'),
        length = path.getTotalLength(),
        randomBegin,
        randomEnd;
        // segment.draw('0%', '100%',0, {easing: ease.ease('ease')});
        // segment.draw(0, 0,1, {easing: ease.ease('ease')});
    // draw.onclick = function(){
    //     segment.draw(0, '50%', 0.5, {easing: ease.ease('ease')});
    // };
    $(".myanimate5").hover(function (){  
            segment.draw('50%', '50%',0.3, {easing: ease.ease('ease')});
             $(this).children().first().stop().delay(500).animate({'top': '0'}, 500); 
             $('#s5img').animate({'marginLeft': '-100%'}, 500);
        },function (){  
            segment.draw('100%', '0%',0.3, {easing: ease.ease('ease')});
            $(this).children().first().stop().animate({'top' : '100%'},500);
            $('#s5img').animate({'marginLeft': '0'}, 500);
        }); 


})();