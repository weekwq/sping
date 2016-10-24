
$(document).ready(function(){
    

    
    $('.title-name>span').click(function(event) {

        // $(this).children().css('color', '#21e2c3');
        // $(this).siblings().children().css('color', 'white');
    });
    $('.title-name>span').mouseout(function(event) {
        // alert(1);
    });
    var m=0;
    function move(){
        if(m==100){
            m=-24;
        }
        // console.log(m);
        m++;
        $('.ani-f').css('marginTop', -m+'px');
        if(m%24==0){
            clearInterval(time);
            var time1=setTimeout(function(){
                time=setInterval(move, 20);
            }, 1000)  
        } 
    }
    var time=setInterval(move, 30);


    $('.section-content>div').mousemove(function(event) {
        // $(this).children().first().css('top', '0');
        // $(this).children().css('border', 'none');
        // $(this).find('img').css('transform', 'rotate(360deg)');
    });
    $('.section-content>div').mouseout(function(event) {
        // $(this).children().first().css('top', '100%');
        // $(this).children().eq(1).css('border', '2px solid white');
        // // $(this).children().css('color', '#7dcfff');
        // $(this).find('img').css('transform', 'rotate(-360deg)');
    });

    $(".section3-1").each(function(i){
            $(this).shows($(".inner").eq(i));
        });


    //第七页面交互
    $('.section-le-con>li').click(function(event) {
        $('.section-le-con>li').removeClass();
        if($(this).index()==1){
            $(this).addClass('a');
            $('#section7-2').addClass('b');
            $('#section7-3').addClass('c');
            $('.section-ri-swiper').animate({'marginLeft': '0'}, 500);
            $('.section7-img1').attr('src', 'img/ridus2.png');
            $('.section7-img1').siblings().attr('src', 'img/ridus1.png');
        }
        if($(this).index()==2){
            $(this).addClass('a');
            $('#section7-1').addClass('c');
            $('#section7-3').addClass('b');
            $('.section-ri-swiper').animate({'marginLeft': '-100%'}, 500);
            $('.section7-img2').attr('src', 'img/ridus2.png');
            $('.section7-img2').siblings().attr('src', 'img/ridus1.png');
        }
        if($(this).index()==3){
            $(this).addClass('a');
            $('#section7-2').addClass('c');
            $('#section7-1').addClass('b');
            $('.section-ri-swiper').animate({'marginLeft': '-200%'}, 500);
            $('.section7-img3').attr('src', 'img/ridus2.png');
            $('.section7-img3').siblings().attr('src', 'img/ridus1.png');
        }

    });

    $('.section-ri-ridus>img').click(function(event) {
        $('.section-le-con>li').removeClass();
        $(this).attr('src', 'img/ridus2.png');
        $(this).siblings().attr('src', 'img/ridus1.png');
        if($(this).index()==0){
            $('.section-ri-swiper').animate({'marginLeft': '0%'}, 500);
            $('#section7-1').addClass('a');
            $('#section7-2').addClass('b');
            $('#section7-3').addClass('c');
        }if($(this).index()==1){
            $('.section-ri-swiper').animate({'marginLeft': '-100%'}, 500);
            $('#section7-2').addClass('a');
            $('#section7-1').addClass('c');
            $('#section7-3').addClass('b');
        }if($(this).index()==2){
            $('.section-ri-swiper').animate({'marginLeft': '-200%'}, 500);
            $('#section7-3').addClass('a');
            $('#section7-2').addClass('c');
            $('#section7-1').addClass('b');
        }   
         
        
        
        
    });

    

});