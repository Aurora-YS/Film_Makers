$(document).ready(function(){

    ///////////////////// main part /////////////////////
    const $slideImg = ["visual_01.png", "visual_02.png", "visual_03.png"];
    
    const $list = `<li class="slide"></li>`;

    for(i in $slideImg){
        $("main ul.slides").append($list);
    }

    $("main ul.slides .slide").each(function(n){
        $(this).css("background-image", "url(./img/"+ $slideImg[n] +")");
        $(this).addClass("slide"+(n+1))
    });

    setInterval(function(){
        const $first = $("main ul.slides .slide").first();
        $("main ul.slides").stop().animate({"margin-left":"-100%"}, 1000, function(){
            $("main ul.slides").append($first).css("margin-left", "0%");
        });
    },5000);


    ////////////////// section_01 part //////////////////
    const $movie_arr = [
        ["cont_01.png", "죄 많은 소녀 (After My Death, 2019)"],
        ["cont_02.jpeg", "소공녀 (Microhabitat, 2020)"],
        ["cont_03.jpg", "벌새 (House of Hummingbird, 2018)"],
    ];
    
    const $movie_box = `
        <div class="movie_box">
            <div class="movie_img">
                <div class="dark">
                    <button class="play_btn"></button>
                </div>
            </div>
            <p class="movie_title"></p>
        </div>
    `;

    for(i=0; i<$movie_arr.length; i++){
        $("#section_01 > .wrap > .cont").append($movie_box);
    }

    $("#section_01 > .wrap > .cont > .movie_box").each(function(n){
        $(this).find(".movie_img").css("background-image", "url(./img/"+ $movie_arr[n][0] +")");
        $(this).find("p.movie_title").text($movie_arr[n][1]);
    });

    $("#section_01 .movie_box .play_btn").click(function(){
        const $idx = $(this).closest(".movie_box").index();
        $("#section_01 .dark_bg, #section_01 .movie_popup").addClass("active");
        $("body").addClass("openPop");
        $("#section_01 .movie_popup").css("background-image", "url(./img/"+ $movie_arr[$idx][0] +")");
    });

    $("#section_01 .dark_bg, #section_01 .close_btn").click(function(){
        $("#section_01 .dark_bg, #section_01 .movie_popup").removeClass("active");
        $("body").removeClass("openPop");
    });


    
    ////////////////// section_02 part //////////////////
    const $actor_arr = [
        ["yeobeen.png", "전여빈"],
        ["saebyeok.png", "김새벽"],
        ["sanghee.png", "이상희"],
        ["yeeun.png", "김예은"],
        ["hakju.png", "이학주"],
        ["jungmin.png", "박정민"],
    ];

    const $actor_box = `
        <div class="actor_box">
            <div class="actor_info">
                <p class="name"></p>
                <button class="filmograph_btn">필모그래프</button>
            </div>
        </div>
    `;

    for(i=0; i<$actor_arr.length; i++){
        $("#section_02 > .wrap > .cont").append($actor_box);
    }

    $("#section_02 > .wrap > .cont > .actor_box").each(function(n){
        $(this).css("background-image", "url(./img/"+$actor_arr[n][0]+")");
        $(this).find("p.name").text($actor_arr[n][1]);
    });


    ////////////////// section_03 part //////////////////
    const $review_arr = [
        ["review1.jpg", "1차 오디션 합격 후, 감독님과의 직접 오디션을 보는 소중한 기회를 얻게 되었습니다. 감독님께서 제시하신 키워드에 맞게 준비한 연기를 보여드렸습니다. 연기가 끝나고 감독님께서는 호흡, 발음, 발성, 집중력 등 다각도에서 꼼꼼한 평을 해주셨습니다. 연기뿐만 아니라 프로필 사진에 대해서도 조언을 해주셨고, 제가 미처 생각하지 못했던 부분을 짚어주셔서 큰 도움을 받게 되었습니다.", "김지수"],
        ["review2.jpg", "오디션장에 들어가서 간단하게 자기소개를 하고 프로필에 나와있는 것들로 간단히 대화를 한 뒤 독백을 했습니다. 그 후 감독님이 얘기해주신 몇가지 상황들로 즉흥연기를 하고 작품의 내용을 간단히 듣고 마쳤습니다. 딱딱한 오디션이 아닌 대화하면서 긴장도 풀어주시고 편한 분위기의 오디션장이었습니다. 감사합니다.", "이영수"],
        ["review3.jpg", "필름메이커스에서 독립영화, 상업영화 등의 정보들과 직접적인 오디션을 볼 수 있는 연결 등이 특별하게 느껴지는 이 곳에 이제 가입한지 1주일 밖에 안 되었음에도 오디션을 볼 좋은 기회가 주어졌습니다. 오디션 영상을 찍으며 연기 외적으로도 고민 할 수 있게 되었습니다.", "박수현"],
    ];

    const $review_box = `
        <div class="review_box">
            <p class="review_txt"></p>
            <div class="circle_img"></div>
            <p class="name"></p>
        </div>
    `;

    for(i=0; i<$review_arr.length; i++){
        $("#section_03 > .wrap > .cont").append($review_box);
    }

    $("#section_03 > .wrap > .cont > .review_box").each(function(n){
        $(this).find(".circle_img").css("background-image", "url(./img/"+ $review_arr[n][0] +")");
        $(this).find("p.review_txt").text($review_arr[n][1]);
        $(this).find("p.name").text($review_arr[n][2]);
    });

    // 페이드 슬라이드
    const $fade_slide = $("#section_03 .wrap .cont .review_box");
    $fade_slide.first().addClass("show");

    // 공용 함수
    function commonFade(){
        const $current_idx = $("#section_03 .wrap .cont .review_box.show").index();

        $("#section_03 .wrap ol.list_btn li").removeClass("active");
        $("#section_03 .wrap ol.list_btn li").eq($current_idx).addClass("active");

    }

    // 페이드
    setInterval(function(){
        const $hover = $("#section_03").hasClass("hover");
        
        if($hover == true){
            
        }else{
            const $show = $("#section_03 .wrap .cont .review_box.show").index();
            $fade_slide.removeClass("show");

            if($show == $fade_slide.length-1){
                $fade_slide.first().addClass("show");
            }else{
                $fade_slide.eq($show).next().addClass("show");
            }

            commonFade();
        }
    }, 5000);

    // 마우스 오버 시 정지
    $("#section_03").hover(function(){
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    });

    // 하단부 버튼 클릭 시 페이지 이동
    $("#section_03 .wrap ol.list_btn li").click(function(){
        const $idx = $(this).index();
        // console.log($idx);
        $("#section_03 .wrap ol.list_btn li").removeClass("active");
        $(this).addClass("active");

        $fade_slide.removeClass("show");
        $fade_slide.eq($idx).addClass("show");
    });



});