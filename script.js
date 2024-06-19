// header




const move = document.querySelector('.movement');
const tpg = document.querySelector('.section-1');
const spg = document.querySelector('.column');
const fh1 = document.querySelector('.movement h1');

const emojis = ['🎈', '🍴', '🌐', '🎉', '🕹️', '🧶', '🎤', '🎷', '🎁', '🎧', '✂️', '✏️', '💼', '🔗', '🪚', '⛹️'];
const iconSpans = document.querySelectorAll('.emoji'); // 모든 이모티콘 span 태그 선택

window.addEventListener("scroll", movePage);

const retVal = x => x.getBoundingClientRect().top;

function movePage() {
    let tgpos = retVal(tpg);
    console.log(tgpos);
    if (tgpos <= 0 && tgpos >= -1500) {
        move.style.display = "block";
        move.style.right = -tgpos / 30 + "%";
        move.style.top = -tgpos / 30 + "%";
        fh1.style.fontSize = (-tgpos /400) + "rem";
        move.style.opacity = -tgpos / 1500;

        // 각 이모티콘을 스크롤 위치에 따라 순환
        iconSpans.forEach((span, index) => {
            let emojiIndex = (Math.abs(Math.floor(tgpos / 100)) + index) % emojis.length;
            span.textContent = emojis[emojiIndex];
        });
        
    } else if (tgpos > 0) {
        move.style.display = "none";
    } else if (-2500 <= tgpos && tgpos < -1500) {
        // 고정
        move.style.right = "50%";
        move.style.top = "50%";
        iconSpans[0].textContent = "문";
        iconSpans[1].textContent = "화";
        iconSpans[2].textContent = "아";
        iconSpans[3].textContent = "트";
        iconSpans[4].textContent = "독";
        move.style.position = "absolute";


    } else if (tgpos < -2500) {
        move.style.position = "absolute";
    }   
}

    // section-1 스크립트 끝@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
       
    
    // section-2 스크립트 시작@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Adding mouse tracking to the section-2
const section2 = document.querySelector('.section-2');
const circleVideo = document.querySelector('.circle-video');
let mouseX = 0, mouseY = 0; // 마우스 위치 저장 변수
let posX = 0, posY = 0; // 실제 요소 위치

section2.addEventListener('mousemove', (e) => {
    const rect = section2.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

section2.addEventListener('mouseenter', function(){
    circleVideo.style.opacity = 1;
    circleVideo.style.transform = 'scale(1)';
});
section2.addEventListener('mouseleave', function(){
    circleVideo.style.opacity = 0;
    circleVideo.style.transform = 'scale(0)';
});


function updatePosition() {
    // 부드러운 움직임을 위해, 현재 위치에 점진적으로 목표 위치를 접근
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;

    circleVideo.style.transform = `translate(${posX - circleVideo.offsetWidth / 2}px, ${posY - circleVideo.offsetHeight / 2}px)`;
    requestAnimationFrame(updatePosition);

}

requestAnimationFrame(updatePosition);

   const contents = document.querySelector('.contents');
   const items = document.querySelectorAll('.item');

   items.forEach(x => {
    x.style.opacity = 0;
   })
   
    document.addEventListener("scroll", function(){
        let delay = 0;
        items.forEach(x =>{
            const contentTop =  contents.getBoundingClientRect().top;
            const contentBottom = contents.getBoundingClientRect().bottom;

            if(contentTop < window.innerHeight && contentBottom >0){
            x.style.animation = `fadeIn 1s ${delay}s both`;
            // console.log("발견!")
            delay +=0.3
            
            }else{
                x.style.animation = '0';
                // console.log("사라짐!")

            }
        })

    })


    
    
    // section-2 스크립트 끝@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        
    // section-3@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    const move3 = document.querySelector('.movementY');
    const tpg3 = document.querySelector('.section-3');
    const spg3 = document.querySelector('.columnY');
    const pack = document.querySelector('.pack');
    const cards= document.querySelectorAll('.card');
    const bgtext = document.querySelector('.backtext');

    window.addEventListener("scroll", moveVertical);
    
    const retVal3 = x => x.getBoundingClientRect().top;
    
    
    function moveVertical() {
        let tgpos3 = retVal3(tpg3);
        // console.log(tgpos3);
        if (tgpos3 <= 0 && tgpos3 >= -4500) {
            move3.style.display = 'block';
            move3.style.transform = `translateX(${2000 + tgpos3 *1.4}px)`
             spg3.style.backgroundColor = "rgba(0,0,0,0.5)"
             bgtext.style.opacity = 1;

            cards.forEach(card => {
                card.style.display = 'block'
            })
        
      
        } else if(tgpos3 < -4500 && tgpos3 >= -6000){
            move3.style.display = 'block';
            move3.style.transform = `translateX(${2000 + tgpos3 *1.4}px)`   
            bgtext.style.opacity = 1;
            bgtext.style.opacity = 0;
            spg3.style.transition = "all 0.5s ease"
            cards.forEach(card => {
                card.style.display = 'block'})
        

        } else if (tgpos3 < -6000) {
            move3.style.display = 'none';

            cards.forEach(card => {
                card.style.display = 'none'})
            spg3.style.backgroundColor = "#F7F7F7"
            spg3.style.transition = "all 1s ease"



        } else if(tgpos3 > 0) {
            move3.style.display = 'none';

            cards.forEach(card => {
                card.style.display = 'none'})
            spg3.style.backgroundColor = "#F7F7F7"
            spg3.style.transition = "all 1s ease"
            bgtext.style.opacity = 0
            ;


        }
    }


    // section-3 스크립트 끝@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// section 4 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const viewer = document.querySelector('.viewer');
    const mou = document.querySelector('mouse-follower2');

    boxes.forEach((box, index) => {
      box.addEventListener('mouseenter', () => {
        viewer.style.opacity = 1;
        viewer.style.backgroundImage = `url('img/${index + 1}.png')`;
        mou.style.opacity = 1; // 마우스 follower 보이기
      });
  
      box.addEventListener('mouseleave', () => {
        viewer.style.opacity = 0;
        mou.style.opacity = 0; // 마우스 follower 숨기기
      });
  

    });
  });
   

// section 4 끝@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


document.addEventListener("DOMContentLoaded", function() {
    var animations = [
        {id: 'cam', path: 'json/cam.json'},
        {id: 'tennis', path: 'json/tenis.json'},
        {id: 'cake', path: 'json/cake.json'},
        {id: 'picture', path: 'json/picture.json'},
        {id: 'plant2', path: 'json/plant2.json'},
        {id: 'ploging', path: 'json/ploging.json'},
        {id: 'cook', path: 'json/cook.json'},
        {id: 'triangle', path: 'json/triangle.json'},
        {id: 'sing', path: 'json/sing.json'},
        {id: 'book', path: 'json/book.json'},
        {id: 'hat', path: 'json/hat.json'},
        {id: 'plant', path: 'json/plant.json'},
        {id: 'cut', path: 'json/cut.json'},
    ];

    animations.forEach(function(anim) {
        var animation = lottie.loadAnimation({
            container: document.getElementById(anim.id),
            renderer: 'svg',
            loop: false, // Stop looping to ensure it only plays once
            autoplay: false, // Set autoplay to false initially
            path: anim.path
        });

        // Add mouseover event listener to start animation
        document.getElementById(anim.id).addEventListener('mouseover', function() {
            if (animation.isPaused) {
                animation.play(); // Play the Lottie animation from current frame
            }
        });

        // Add mouseout event listener to allow animation to finish
        document.getElementById(anim.id).addEventListener('mouseout', function() {
            if (!animation.isPaused) {
                animation.addEventListener('complete', function() {
                    animation.stop(); // Stop the animation after it completes
                });
            }
        });
    });
});

// 스크롤 애니메이션

const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const navmenu = document.querySelector('.navbar-menu');
const util = document.querySelector('.utility');

  $(document).ready(function() {
    console.log(window.scrollY)

    var isScrolling = false; // 스크롤 중 상태 플래그
    
    var scrollTop =  window.scrollY;

    if(scrollTop>=1600){
        header.style.background = 'rgba(255,255,255,1)';
        header.style.pointerEvents =  'all';
        navbar.style.maxWidth= '1280px';
        navmenu.style.opacity = 1;
        navmenu.style.pointerEvents= 'all';
        util.style.opacity = 1;
        util.style.pointerEvents = 'all';
    }else{
        header.style.background = 'rgba(255,255,255,0)';
        header.style.pointerEvents =  'none';
        navbar.style.maxWidth= '90%';
        navmenu.style.opacity = 1;
        navmenu.style.pointerEvents= 'all';
        util.style.opacity = 1;
        util.style.pointerEvents = 'all';
    }


    document.addEventListener('touchstart', function(event) {
        event.preventDefault();
    }, { passive: false });
    



    
$(window).on('wheel', function(e) {
    if (isScrolling) {
        e.preventDefault(); // 애니메이션 중 추가 스크롤 이벤트 방지
        return;
    }

    var deltaY = e.originalEvent.deltaY;
    console.log(window.scrollY)

    var scrollTop = $(window).scrollTop();
    if(scrollTop>=50){
        header.style.background = 'rgba(255,255,255,1)';
        header.style.pointerEvents =  'all';
        navbar.style.maxWidth= '1280px';
        navmenu.style.opacity = 1;
        navmenu.style.pointerEvents= 'all';
        util.style.opacity = 1;
        util.style.pointerEvents = 'all';
    }else{
        header.style.background = 'rgba(255,255,255,0)';
        header.style.pointerEvents =  'none';
        navbar.style.maxWidth= '90%';
        navmenu.style.opacity = 1;
        navmenu.style.pointerEvents= 'all';
        util.style.opacity = 1;
        util.style.pointerEvents = 'all';
    }
    
    
    var $bgInner = $('.bg-inner');
    var $section1 = $('.section-1');

    if (scrollTop >= $bgInner.offset().top && scrollTop < $section1.offset().top && deltaY > 0) {
        e.preventDefault();
        isScrolling = true;
        header.style.background = 'rgba(255,255,255,1)';
        header.style.pointerEvents =  'all';
        navbar.style.maxWidth= '1280px';
        navmenu.style.opacity = 1;
        navmenu.style.pointerEvents= 'all';
        util.style.opacity = 1;
        util.style.pointerEvents = 'all';

        $('html, body').animate({
            scrollTop: $section1.offset().top
        }, 1000, function() {
            isScrolling = false; // 애니메이션이 완료되면 스크롤 잠금 해제

        });
    } else if (scrollTop > $bgInner.offset().top && scrollTop <= $section1.offset().top && deltaY < 0) {
        e.preventDefault();
        isScrolling = true;
        header.style.background = 'rgba(255,255,255,0)';
        header.style.pointerEvents =  'none';
        navbar.style.maxWidth= '90%';
        navmenu.style.opacity = 1;
        navmenu.style.pointerEvents= 'all';
        util.style.opacity = 1;
        util.style.pointerEvents = 'all';
        $('html, body').animate({
            scrollTop: $bgInner.offset().top
        }, 1000, function() {
            isScrolling = false;
           
        });
    }
});



// 배경 분리
$('.bg-inner').on('mousemove', function(e) { 
    const width = $(window).width();
    const height = $(window).height();
    const moveX = (e.pageX - width / 2) / width;
    const moveY = (e.pageY - height / 2) / height;
    const backMoveX = -moveX * 100;
    const backMoveY = -moveY * 60;

    // .backBg 이미지와 .movingImg <div>에만 변형을 적용
    $('.backBg, .movingImg').css({
        transform: `translate(${backMoveX}px, ${backMoveY}px)`,
        transition: `0.5s ease-out`
    });

    $('.mouse-follower').css({
        transform: `translate(${e.pageX - window.innerWidth / 2}px, ${e.pageY - window.innerHeight / 2}px)`, // 마우스 중앙에 위치
        display: 'block',
        opacity: 1, // CSS에서 투명도는 0에서 1 사이의 값을 사용
        padding: '30px' // 패딩에 단위 추가4
        
    });
    }).on('mouseleave', function() {
        // 화면에서 나가면 원 사라지게하기
        $('.mouse-follower').css({
            opacity: 0,

        });
    });

    // a태그에 마우스 올렸을때, 애니메이션
    $('.movingImg').mouseenter(function() {
    var description = $(this).attr('data-description'); // 이 요소의 data-description 값을 가져옵니다.
    $('.mouse-follower .text-container').text(description);  // 텍스트 컨테이너에 설명 삽입
    $('.mouse-follower .icon').css('opacity', '1');  // 아이콘 보이기
    $('.mouse-follower').css({
        "background-color": "rgba(255,255,255,0.5)", // 배경색을 흰색으로 설정
        "background-image": "none", // 배경 이미지 제거
        "text-align": "center",
        "line-height": "20px",
        // "transition": "0.7s !all ease-in",
        "border-radius": "10%",
        "width": "120px",
        "height": "120px",
 
    });
}).mouseleave(function() {
    $('.mouse-follower .icon').css('opacity', '0');  // 아이콘 숨기기
    $('.mouse-follower').css({
        "background-color": "rgba(0,0,0,0.3)", // 배경색을 반투명으로 변경
        "background-image": "url('img/mouse.svg')", // 원래의 배경 이미지를 복원
        "border-radius": "100%",
        // "transition": "0.3s ease-out",   
        "width": "50px",
        "height": "50px"
    });
    $('.mouse-follower .text-container').empty();  // 텍스트 컨테이너 내용 비우기
});





});
