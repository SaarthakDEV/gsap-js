gsap.to(
    "#box", {
         x: 1000,
         duration: 2,
         delay: 1,
         backgroundColor: 'blue',
         borderRadius: 50
    }
)
// .from(
//     "#box", {
//          x: 1000,
//          duration: 2,
//          delay: 3,
//          backgroundColor: 'blue',
//          borderRadius: 50,
//     }
// )


// gsap.to(
//     ".box-2", {
//          x: 500,
//          y: 500,
//          duration: 2,
//          delay: 1,
//     }
// )
gsap.from(
    ".box-2", {
         x: 1000,
         y: -300,
         duration: 2,
         delay: 1,
         rotate: 90,
    }
)



gsap.from("h1", {
    color: "red",
    duration: 1,
    delay: 1,
    opacity: 0,
    y: 50,
    // stagger: 0,
    stagger: -1,
    // repeat: 3,
    yoyo: true,
})

const tl = gsap.timeline();

tl.to("#timeline-box-1", {
    x: 1000,
    rotate: 360,
    duration: 1,
    delay:2
})

tl.to("#timeline-box-2", {
    x: 1000,
    duration: 3
})
tl.to("#timeline-box-3", {
    x: 1000,
    duration: 2
})
