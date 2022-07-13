//#1. 헤더공간을 구성(메뉴의 href를 통해서 사용자가 원하는 페이지를 불러올 수 있도록 구성하기 위함)
Vue.component("header-el", {
    data : () => {
        return {menuItem : [
            "about","skill","portfolio","contact"
        ]}
    },
    mounted(){
        const menuBtn = document.querySelector(".menu");
        menuBtn.addEventListener("click", function(){
        this.classList.toggle("active");});

        // const headerUl = $("header").width() + 20;
        // //console.log(portLeft);
        // $("header ul").css("width",headerUl + "px");
    },
    template : `
    <header>
        <div class="wrap">
            <div class="logo">
                <router-link to="/"><img src="./img/logo3.png" alt="메인 로고 이미지"></router-link>
            </div>
            <div class="menu">
                <span></span>
                <span></span>
                <span></span>
                <ul>
                    <li v-for="list in menuItem"><router-link :to="'/'+list">{{list}}</router-link></li>
                </ul>
            </div>
        </div>
    </header>
    `
});



const pageMain = {
    data : () => {
        return { 
            starItem : [
                "star1","star2","star3","star6"
            ]
    }
    },
    methods : {    
        loadEvt(evt){
            console.log("마우스 이벤트 발생")
            const $main = document.querySelector("#main");
            const $star = document.querySelectorAll(".star");
            console.log($star);
            for(const i in $star){
                if($main){
                    console.log(i);
                    //$main.addEventListener("mousemove",function(evt){
                        let cur_x = evt.pageX;
                        let cur_y = evt.pageY;
                    
                        console.log(cur_x);
                        console.log(cur_y);
                        console.log(evt);
                        let MoveX = cur_x * 1 / 5;
                        let MoveY = cur_y * 1 / 5;
                    if(i == 0){
                        MoveX = MoveX;
                        MoveY = MoveY;
                    }else if(i == 1){
                        MoveX = -MoveX;
                        MoveY = -MoveY;
                    }else if(i == 2){
                        MoveX = MoveX;
                        MoveY = -MoveY;
                    }else if(i == 3){
                        MoveX = -MoveX;
                        MoveY = MoveY;
                    }
                        try{
                            // console.log(MoveX);
                            // console.log(MoveY);
                            $star[i].style.transform = `translate(${MoveY}px, ${MoveX}px)`;
                        }catch(err){
            
                        }
            
                    //});
                }
                
            } 
        }
    },
    template : `
    <section id="main" @mousemove="loadEvt">
        <div class="frame">
            <div class="wrap">
                <img src="./img/circle1.png" alt="원 이미지" class="cir1">
                <h3>portfolio</h3>
                <img src="./img/stroke.png" alt="테두리 이미지" class="str1">
                <div class="stars">
                    <img :src="'./img/'+list+'.png'" alt="별 이미지" v-for="list in starItem" class="star">
                </div>
                <div class="stars2">
                    <img :src="'./img/'+list+'.png'" alt="별 이미지" v-for="list in starItem" class="star2">
                </div>
            </div>
            <div class="text1">
                <MARQUEE direction="up">Design by JIHYUN LEE Design by JIHYUN LEE</MARQUEE>
            </div>
            <div class="text2">
                <MARQUEE direction="down">Design by JIHYUN LEE Design by JIHYUN LEE</MARQUEE>
            </div>
        </div>
    </section>
    `
}
const pageAbout = {
    data : () => {
        return { 
            hashList : [
                "#열정적인","#끈기있는","#도전하는","#계획적인"
            ]
    }
    },
    template : `
    <div id="about">
        <div class="wrap">
            <div class="left">
                <div class="pic"></div>
                <img src="./img/oval.png" alt="원 애니메이션1" class="ov1">
                <img src="./img/oval4.png" alt="원 애니메이션2" class="ov2">
            </div>
            <div class="right">
                <div class="title">
                        <h3>WHO AM I ?</h3>
                        <div class="subTit">
                            <p>More passionately ,</p>
                            <p>More courageously</p>
                        </div>
                </div>
                <div class="ex">
                    
                    <p><span>도전하는 것</span>에 두려움을 느끼지 않고</p>
                    <p><span>끝없는 노력</span>으로 결실을 이루어내겠습니다.</p>

                </div>
                <div class="hash">
                    <h2 class="hashTit"> :&nbsp; KEYWORD</h2>
                    <ul>
                        <li v-for="list in hashList">{{list}}</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
    `
}
const pageSkill = {
    data : () => {
        return { 
            skillList : [
               {relNum:0, count:"90",img:"html",text:"HTML5"},
               {relNum:1, count:"90",img:"css",text:"CSS3"},
               {relNum:2, count:"80",img:"js",text:"Javascript"},
               {relNum:3, count:"70",img:"php",text:"PHP"},
               {relNum:4, count:"85",img:"photoshop",text:"PS/AI"},
            ],
            explainList : [
                {title:"HTML5", text:"HTML구조를 파악하고 적절히 활용하여 마크업 할 수 있습니다."},
                {title:"CSS3", text:"CSS3로 여러가지 효과와 레이아웃을 구현할 수 있습니다."},
                {title:"JAVASCRIPT", text:"JAVASCRIPT의 기본 문법을 이해하고 있으며 반복문과 동적 코드를 작성하여 적용할 수 있습니다."},
                {title:"PHP", text:"MYSQL를 사용하여 DB를 활용한 사이트를 구성할 수 있습니다."},
                {title:"PS/AI", text:"포토샵과 일러스트와 같은 디자인 툴을 이용하여 시안작업을 진행할 수 있습니다."},
            ]
        }
    },
    mounted(){
//        skill(){
            const interval = setInterval(() => {
                const $active = $("[href='/skill']").closest("li").hasClass("active");
                if($active){
                    gageUp();
                    //clearInterval(interval);
                }
            },500);
            function gageUp(){
                   //게이지 바 올리기
                const startCount = 0;
        
                $("#skills .box").each(function(i){
                    const count = $(this).find(".count").attr("data-limit");
                    //console.log(count);
        
                    $(this).find("circle:eq(1)").css("stroke-dashoffset",`calc(440 - 440 * ${count} / 100)`);
        
                });
        

            }
            $(".explain:eq(0)").addClass("view");
            $("#skills .box").click(function(){
                const index = $(this).index();
                console.log(index);
                $(".explain").removeClass("view");
                $(".explain").eq(index).addClass("view");
            });
            
            
        
//        }
    }, 
    methods: {
        select: function(event) {
            const targetRel = event.currentTarget.getAttribute("rel");
            console.log(event.currentTarget); // <div>
            document.querySelector(".explain h3").innerHTML = this.explainList[targetRel].title;



        }
    },

    template : `
    <section id="skills">
        <div class="frame">
            <div class="box bx1" v-for="list in skillList" >
                <div class="cont" @click="select" :rel="list.relNum">
                    <div class="top">
                        <svg>
                            <circle cx="70" cy="70" r="70"/>
                            <circle cx="70" cy="70" r="70"/>
                        </svg>
                        <div class="sk">
                            <div class="count" :data-limit="list.count"><img :src="'./img/'+list.img+'.png'" alt="프로그램 이미지"></div>
                        </div>
                    </div>
                    <div class="bottom">
                        <h2 class="cont_text">{{list.text}}</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="explain" v-for="list in explainList">
            <h3>{{list.title}}</h3>
            <p>{{list.text}}</p>
        </div>
    </section>
    `
}
const pagePortfolio = {
    data : () => {
        return { 
            menuList : [
                "publish","php","vue","develop"
            ],
            siteList : [
                ["말랑상점","PHP를 활용한 문구사이트 브랜드 제작",["html.png","css.png","js.png"],"malrang.png","http://dlwlgus.dothome.co.kr/malrang/","php",0],
                ["PORTFOLIO","vue router를 활용한 포트폴리오 사이트",["html.png","css.png","js.png"],"portfolio.png","http://dlwlgus.dothome.co.kr/malrang/","vue",1],
                ["MUSIC BOX","js를 활용한 음악사이트 제작",["html.png","css.png","js.png"],"portfolio.png","http://dlwlgus.dothome.co.kr/malrang/","develop",2],
                ["kuliner","HTML5와 CSS3를 활용한 고정형 사이트",["html.png","css.png"],"kuliner.png","https://jihyun00102.github.io/kuliner/","publish",3],
                ["cakehouse","HTML5와 CSS3를 활용한 고정형 사이트",["html.png","css.png"],"cakehouse.png","https://jihyun00102.github.io/cakehcious/","publish",4],
                ["세종병원","HTML5와 CSS3를 활용한 고정형 사이트",["html.png","css.png"],"sejong.png","https://jihyun00102.github.io/sejong-hospital/","publish",5],
                ["Wedding","HTML5와 CSS3를 활용한 고정형 사이트",["html.png","css.png"],"fixed_page1.png","https://jihyun00102.github.io/Aisle-wedding/","publish",6],
                ["B&O","HTML5와 CSS3를 활용한 고정형 사이트",["html.png","css.png"],"b&o.png","https://jihyun00102.github.io/B-O/","publish",7],
                ["cashmere","HTML5와 CSS3를 활용한 반응형 사이트",["html.png","css.png"],"cashmere.png","https://jihyun00102.github.io/cashmereSite/","publish",8],
                ["origin","HTML5와 CSS3를 활용한 반응형 사이트",["html.png","css.png"],"origin.png","https://jihyun00102.github.io/origin/","publish",9],
                ["INVESTPLAN","JAVASCRIPT와 jQuery를 활용한 고정형 사이트",["html.png","css.png","js.png"],"INVESTPLAN.png","https://jihyun00102.github.io/INVESTPLAN/","publish",10],
                ["weather App","Ajax와 Json를 활용한 날씨앱 구축",["html.png","css.png","js.png"],"weather_app.png","https://jihyun00102.github.io/weatherApp2022/","develop",11],
                ["MY CHAT","firebase를 활용한 채팅앱 구축",["html.png","css.png","js.png"],"myChat.png","http://dlwlgus.dothome.co.kr/chattingApp/","php",12],
                ["Film Maker","vue component를 이용한 영화사이트 구축",["html.png","css.png","js.png"],"vue_component_page2.png","https://jihyun00102.github.io/Flim_makers/","vue",13],
                ["National Geographic","vue router를 이용한 사이트 구축",["html.png","css.png","js.png"],"ngeo.png","https://ngeo0102.netlify.app/#/","vue",14],
               
            ]
        }
    },
    mounted(){

        const portLeft = $("#port .left .view").height() + $("#port .left .exp").height() + 50;
        console.log(portLeft);
        //$("#port .right #grid").css("height", portLeft - 28 + "px");
        $("#port .right #grid").css("height","448px");


        // function resizeImg(){
        //     const portLeft = $("#port .left .view").height() + $("#port .left .exp").height() + 50;
        //     //console.log(portLeft);
        //     $("#port .right #grid").css("height",portLeft - 28 + "px");
        // }
    
        // resizeImg();
    
        // $(window).resize(function(){
        //     resizeImg();
        // });


            
        // 로딩시 첫 번째 이미지 뜨기
        $("#grid article").eq(0).addClass("active");

        const $photo = $("#grid .photo");
        const $photoIndex = $("#grid article").index();
        let $photoUrl = $($photo).eq(0).css("background-image").replace(/^url\(['"](.+)['"]\)/, '$1');
        $(".incase").css("background-image",`url(./img/${this.siteList[0][3]})`);

        // 로딩시 설명뜨기
        $(".exp").find("h3").text(this.siteList[0][0]);
        $(".exp").find("p").text(this.siteList[0][1]);
        
        //클릭시 모니터에 연동
        const portInterver = setInterval( () => {
            let iconList = ``;

            //클릭시 모니터에 연동
            $("#grid article").click(function(){
                let grid;

                $("#grid article").removeClass("active");
                $(this).addClass("active");

                let $photoIndex = $(this).index();


                let $photoUrl = $($photo).eq($photoIndex).css("background-image").replace(/^url\(['"](.+)['"]\)/, '$1');

                $(".incase").css("background-image",`url(${$photoUrl})`);

        

            });
        }, 500);
    },
    methods : {

        clickEvt(evt){

            evt.preventDefault();

            const $article = document.querySelectorAll("article");
            const $title = document.querySelector(".exp h3");
            const $info = document.querySelector(".exp p");
            const $photo = document.querySelector(".incase");
            const $linkBtn = document.querySelector("#grid .btn a");
            const $index = evt.currentTarget.getAttribute("num");
            console.log($index);

            $title.textContent=`${this.siteList[$index][0]}`;
            $info.textContent=`${this.siteList[$index][1]}`;
            $photo.style.backgroundImage=`${this.siteList[$index][3]}`;

            const sortBtns = document.querySelectorAll(".sort_btn li");
            console.log(sortBtns);
            
            for(const v of sortBtns){
                evt.preventDefault();
                const dataSort = evt.currentTarget.querySelector("a").getAttribute("data-sort");
                console.log(dataSort);
            }

            setTimeout(() => {
                const portLeftTop = document.querySelector("#port .left .view").clientHeight;
                const portLeftBottom = document.querySelector("#port .left .exp").clientHeight;
                const portLeft = portLeftTop + portLeftBottom + 50;
                
                console.log(portLeft);
                document.querySelector("#port .right #grid").style.height = portLeft - 28 + "px";

            },0);
        },
        initEvt(evt){
            evt.preventDefault();
            const sortBtns = document.querySelectorAll(".sort_btn li");
            const $article = document.querySelectorAll("article");
            for(const v of $article){
                v.style.display = "block";
            }
            for(v of sortBtns){
                v.classList.remove("active");
            }
    
            //클릭한 곳의 버튼만 클래스명 active 부여
            sortBtns[0].classList.add("active");

        },
        sortEvt(evt){
            // let grid = ``

            // evt.preventDefault();
            // grid = new Isotope("#grid", {
            //     itemSelector : "article",
            //     transitionDuration : "0.5s"
            // });

            const sortBtns = document.querySelectorAll(".sort_btn li");
            console.log(sortBtns);
            const $article = document.querySelectorAll("article");
            
            for(v of sortBtns){
                //v.addEventListener("click", (e) => {
                    evt.preventDefault();
                    const dataSort = evt.currentTarget.querySelector("a").getAttribute("data-sort");
                    console.log(dataSort);
                    const resultSort = document.querySelectorAll(`article[data-sort=${dataSort}]`);
                    for(const v of $article){
                        v.style.display = "none";
                    }
                    for(const w of resultSort){
                        w.style.display = "block";
                    }
                    // grid.arrange({
                    //     filter : dataSort
                    // });
            
                    //전체 버튼에 클래스명 active 제거
                    for(v of sortBtns){
                        v.classList.remove("active");
                    }
            
                    //클릭한 곳의 버튼만 클래스명 active 부여
                    evt.currentTarget.classList.add("active");
                // });    
            }
        }
        
    },
    template : `
    <div id="port">
        <div class="portframe">
            <div class="wrap">
                <div class="left">
                    <div class="view">
                        <div class="case">
                            <img src="./img/macbook.png" alt="맥북 이미지">
                            <div class="incase">
                                <div class="portView"></div>
                            </div>
                        </div>
                    </div>
                    <div class="exp">
                        <h3>사이트명</h3>
                        <p>affdkaslhflj</p>
                    </div>
                </div>
                <div class="right">

                    <ul class="sort_btn">
                        <li class="active"><a data-sort="*" href="" @click="initEvt">ALL</a></li>
                        <li class="" v-for="list in menuList" @click="sortEvt"><a :data-sort="list" href="">{{list}}</a></li>
                    </ul>

                    <div id="grid">
                        <article class="" v-for="list in siteList"  :data-sort="list[5]" :num="list[6]" @click.stop="clickEvt">
                            <div class="photo" :style="'background-image:url(./img/'+list[3]+')'">
                                <div class="txt">
                                    <h3>{{list[0]}}</h3>
                                    <div class="iconList">
                                        <ul>
                                            <li v-for="item in list[2]">
                                            <img :src="'./img/'+item" alt="used 이미지">
                                            </li>
                                        </ul>
                                    </div>
                                    <p>{{list[1]}}</p>
                                    <div class="btn">
                                        <a target="_blank" :href="list[4]">VIEW</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}
const pageContact = {
    data : () => {
        return { 

        }
    },
    template : `
    <div id="contframe">
        <div id="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
            <div id="contact">
                <div class="title">
                    <img src="./img/start_quote.svg" alt="따옴표 아이콘1">
                    <h2>Contact Me</h2>
                    <img src="./img/end_quote.svg
                    " alt="따옴표 아이콘2">
                </div>
                <div class="bg">
                    <div class="img"></div>
                    <div class="img"></div>
                </div>
    
                <form class="gform form-elements" name="contactUs" method="post" action="https://script.google.com/macros/s/AKfycbySM4UyXj5FbbX7EMOqZI09cBaVL9HeEeI-gFa9D6PYozSPgaXR/exec">
                    <fieldset>
                        <div class="formlist">
                            <ul>
                                <li>
                                    <label for="name">이름 또는 회사명<sup>*</sup></label>
                                    <span class="inputbox">
                                        <input type="text" id="name" name="name" placeholder="이름 또는 회사명을 입력해주세요" required autocomplete="off">
                                    </span>
                                </li>
                                <li>
                                    <label for="email">답변받을 이메일<sup>*</sup></label>
                                    <span class="inputbox">
                                        <input type="email" id="email" name="email" placeholder="sample@email.com" required autocomplete="off">
                                    </span>
                                </li>
                                <li>
                                    <label for="message">문의내용<sup>*</sup></label>
                                    <span class="inputbox">
                                        <textarea name="message" id="message" placeholder="문의 사항을 입력해주세요" required autocomplete="off"></textarea>
                                    </span>
                                </li>
                            </ul>
                            <div class="btn">
                                <button type="submit" class="submit">문의하기</button>
                            </div>
                        </div>
    
                        <div class="thankyou_message">
                            <article>
                                <h1>작성된 내용이 모두 전송되었습니다.</h1>
                                <p>메일 확인 후 연락드리겠습니다.</p>
                                <div class="ok_btn">
                                    <router-link to="/contact">닫기</router-link>
                                </div>
                            </article>
                        </div>
                    </fieldset>
                </form>
                
            </div>
        </div>
        
    </div>
    
    `
}




const rtRoutes = [
    {
        path : "/",
        component : pageMain
    },
    {
        path : "/about",
        component : pageAbout
    },
    {
        path : "/skill",
        component : pageSkill
    },
    {
        path : "/portfolio",
        component : pagePortfolio
    },
    {
        path : "/contact",
        component : pageContact
    }
]

const router1 = new VueRouter({
    routes : rtRoutes
});


const date = new Date();
const year = date.getFullYear();

const footer = {
    template : `<footer><p>Copyrights &copy; LEE JI HYUN PORTFOLIO ${year}</p></footer>`
}

new Vue({
    el : "#portfolio",
    router : router1,
    components : {
        "footer-el" : footer
    }

});



// 메인 별이미지 마우스 이동
setTimeout(()=>{
  
    
},50);



// portfolio 높이값 동일하게
// const $left_h = document.querySelector(".left").clientHeight;
// console.log($left_h);
// const $right= document.querySelector(".right");
// $right.style.height=`${$left_h}px`;


// portfolio 버튼 제어



$(document).ready(function(){
    $(".menu ul li").click(function(){
        $(".menu ul li").removeClass("active");
        $(this).addClass("active");

    });

    const interval = setInterval(() => {
        gageUp();
    },500);
    function gageUp(){
           //게이지 바 올리기
        const startCount = 0;

        $("#skills .box").each(function(i){
            const count = $(this).find(".count").attr("data-limit");
            //console.log(count);

            $(this).find("circle:eq(1)").css("stroke-dashoffset",`calc(440 - 440 * ${count} / 100)`);

        });


    }         
    
    // 게이지 클릭시 설명
        $("#skills .box").click(function(){
            const index = $(this).index();
            console.log(index);
            $(".explain").removeClass("view");
            $(".explain").eq(index).addClass("view");
        });
    // }


    $(".sort_btn li").click(function(){
        $(".sort_btn li").removeClass("active");
        $(this).addClass("active");

        return false;
    });

    

    // function resizeImg(){
    //     const portLeft = $("#port .left .view").height() + $("#port .left .exp").height() + 50;
    //     //console.log(portLeft);
    //     $("#port .right #grid").css("height",portLeft - 28 + "px");
    // }

    // resizeImg();

    // $(window).resize(function(){
    //     resizeImg();
    // });


    const portLeft = $("#port .left .view").height() + $("#port .left .exp").height() + 50;
    $("#port .right #grid").css("height", portLeft - 28 + "px");

});












