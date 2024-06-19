document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".anim-typewriter");
    const text = textElement.textContent;
    textElement.innerHTML = text.split("").map(char => `<span>${char}</span>`).join("");
    textElement.style.visibility = "visible";
   

    let tl = gsap.timeline();

    tl.from(".anim-typewriter span", {
        duration: 0.05,
        opacity: 0,
        ease: "Linear.easeNone",
        stagger: 0.05
    });

    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
        onLeave: function(origin, destination, direction){
            const section = destination.item;
            const animElements = section.querySelector('#div2-1');
            const animElements2 = section.querySelector('#div2-2');
            const animElements3 = section.querySelector('#div2-3');
            const animElements4 = section.querySelector('#div2-4');

            gsap.fromTo(animElements, 
                { x: 50, opacity: 0.5 }, 
                { 
                    x: 0, 
                    opacity: 1, 
                    duration: 0.75,
                    ease: "power2.inOut"
                });

            gsap.fromTo(animElements2, 
                { x: 40, opacity: 0.5 }, 
                { 
                    x: 0, 
                    opacity: 1, 
                    duration: 1,
                    ease: "power2.inOut"
                });

            gsap.fromTo(animElements3, 
                { x: 30, opacity: 0.5 }, 
                { 
                    x: 0, 
                    opacity: 1, 
                    duration: 1.25,
                    ease: "power2.inOut"
                });

            gsap.fromTo(animElements4, 
                { x: 20, opacity: 0.5 }, 
                { 
                    x: 0, 
                    opacity: 1, 
                    duration: 1.5,
                    ease: "power2.inOut"
                });

            if(destination.index === 1) {
                animateBird();
            }

            if (destination.isLast) {
                const footerHeight = document.querySelector('footer').offsetHeight;
                gsap.to(window, {scrollTo: {y: window.scrollY + footerHeight}, duration: 1});
            }
        }
    });

    const hoverItems = [
        { id: "div2-1", imageId: "hover-image-1" },
        { id: "div2-2", imageId: "hover-image-2" },
        { id: "div2-3", imageId: "hover-image-3" },
        { id: "div2-4", imageId: "hover-image-4" }
    ];

    hoverItems.forEach(item => {
        const div = document.getElementById(item.id);
        const image = document.getElementById(item.imageId);

        div.addEventListener("mouseenter", () => {
            image.style.display = "block";
        });

        div.addEventListener("mouseleave", () => {
            image.style.display = "none";
        });
    });

    const shapeContainer = document.querySelector('.shape-container');
    const bird = document.createElement('div');
    bird.classList.add('shape');
    shapeContainer.appendChild(bird);

    gsap.registerPlugin(MotionPathPlugin);

    function animateBird() {
        gsap.to(bird, {
            duration: 5,
            repeat: -1,
            motionPath: {
                path: [
                    {x: 100, y: 0},
                    {x: 2000, y: 500},
                   
                ],
                curviness: 1.25,
                autoRotate: true
            },
            ease: "none"
        });
    }
});