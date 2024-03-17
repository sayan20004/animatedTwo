gsap.registerPlugin(Flip);
const navLeft = document.querySelector(".navLeft");
const navRight = document.querySelector(".navRight");
const navLinks = document.querySelector("a");
const hoverDiv = document.querySelector(".middleRight");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const image = document.querySelector(".images");
const bookNow = document.querySelector(".bookNow");
const body = document.querySelector("body");
const progressContainer = document.querySelector(".progressContainer");


function topToDown(e) {
    gsap.from(navLeft, {
        delay:(1),
        duration: 1,
        y: -100,
    })
    gsap.from(navLinks,{
        delay:(2.5),
        opacity:0
    })
}
function leftToRigh(e) {
    gsap.from(navLeft,{
        delay:(2),
        duration:1,
        width: "60px"
    })
    gsap.from(navRight, { 
        delay:(3),
        duration: 1,
        opacity:0,
        x: -150,
    })

}
function middleRightAnimationRemove(){
    one.classList.remove("one");
    two.classList.remove("two");
    one.style.transition = "all ease-in-out 1s";
    gsap.to(bookNow, {
        duration: 1,
        x: 100,
        // zIndex:2
    })
}
function middleRightAnimationAdd(){
    one.classList.add("one");
    two.classList.add("two");
    two.style.transition = "all ease-in-out 1s";
    one.style.overflow = "hidden";

    gsap.to(bookNow, {
        duration: 1,
        x: 1,
        // zIndex:0
    })
}
hoverDiv.addEventListener("mouseenter", function(){
    middleRightAnimationRemove();
});
hoverDiv.addEventListener("mouseleave", function(){
    middleRightAnimationAdd();
});


// let count = 0;
// const progressBar = document.getElementById('progressBar');
// const countElement = document.getElementById('count');

// function updateProgress() {
//     count++;
//     if (count <= 100) {
//         progressBar.style.height = `${count}vh`;
//         countElement.textContent = count.toString().padStart(3, '0');
//         setTimeout(updateProgress, 50); // Change the timeout for speed
//     }
//     if(count == 100){
//         progressContainer.style.top = "0px";
//     }
// }

// updateProgress();


const links = document.querySelectorAll(".navBar a");
const slider = document.querySelector(".slider");
const home = document.querySelector(".home");


links.forEach((link) => {
    link.addEventListener("click", function(event) {
        gsap.to(links, {
            color: 'white',
        });
        
        if(document.activeElement === link){
            gsap.to(link,{
                color:'#b3232e',
            });
            // slider.style.opacity = 1;
        }

        const state = Flip.getState(slider);
        link.appendChild(slider);

        Flip.from(state, {
            duration: 1.25,
            absolute: true,
            ease:"elastic.out(1,0.5)",
        });
    });
});

topToDown()
leftToRigh()

