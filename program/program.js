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
});

new fullpage('#fullpage', {
autoScrolling: true,
scrollHorizontally: true,
onLeave: function(origin, destination, direction){
const section = destination.item;
const animElements = section.querySelector('.small-container');
const animElements2 = section.querySelector('#container2');
const animElements3 = section.querySelector('#div1-1');
const animElements4 = section.querySelector('#div1-2');
const animElements5 = section.querySelector('#div1-3');
const animElements6 = section.querySelector('#div2-1');
const animElements7 = section.querySelector('#div2-2');
const animElements8 = section.querySelector('#div2-3');
const animElements9 = section.querySelector('#div3-1');
const animElements10 = section.querySelector('#div3-2');

gsap.fromTo(animElements, 
    { y: 50, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 1.5,
        ease: "power2.inOut"
    });

gsap.fromTo(animElements2, 
    { y: 50, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 1.5,
        ease: "power2.inOut"
    });

gsap.fromTo(animElements3, 
    { y: -25, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 0.75,
        ease: "power2.inOut"
    });

gsap.fromTo(animElements4, 
    { y: -50, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power2.inOut"
    });

gsap.fromTo(animElements5, 
    { y: -75, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 1.25,
        ease: "power2.inOut"
    });

gsap.fromTo(animElements6, 
    { y: -25, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 0.5,
        ease: "power2.inOut"
    });

gsap.fromTo(animElements7, 
    { y: -50, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
    });

gsap.fromTo(animElements8, 
    { y: -75, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 1.5,
        ease: "power2.inOut"
    });

gsap.fromTo(animElements9, 
    { y: 50, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 1.5,
        ease: "power2.inOut"
    });

gsap.fromTo(animElements10, 
    { y: 50, opacity: 0 }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 1.5,
        ease: "power2.inOut"
    });


if (destination.isLast) {
    const footerHeight = document.querySelector('footer').offsetHeight;
    gsap.to(window, {scrollTo: {y: window.scrollY + footerHeight}, duration: 1});
}
}
});