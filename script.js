gsap.to("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
  backgroundColor: "blue",
  borderRadius: 50,
});
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
gsap.from(".box-2", {
  x: 1000,
  y: -300,
  duration: 2,
  delay: 1,
  rotate: 90,
});

// gsap.from("h1", {
//     color: "red",
//     duration: 1,
//     delay: 1,
//     opacity: 0,
//     y: 50,
//     // stagger: 0,
//     stagger: -1,
//     // repeat: 3,
//     yoyo: true,
// })

const tl = gsap.timeline();

tl.to("#timeline-box-1", {
  x: 1000,
  rotate: 360,
  duration: 1,
  delay: 2,
});

tl.to("#timeline-box-2", {
  x: 1000,
  duration: 3,
});
tl.to("#timeline-box-3", {
  x: 1000,
  duration: 2,
});

gsap.from("#page-1 #page-box", {
  rotate: 360,
  scale: 0,
  delay: 1,
  duration: 2,
});

// gsap.from( "#page-2 #page-box", {
//     rotate: 360,
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page-2 #page-box",
//         scroller: "body",
//         markers: true,
//         start: "top 50% "
//     }
// })

gsap.from("#page-2 #page-box", {
  opacity: 0,
  scale: 0,
  rotate: 720,
  duration: 1,
  scrollTrigger: {
    trigger: "#page-2 #page-box",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    // end: "top 30%",
    scrub: true,
    pin: true,
  },
});

// gsap.from( "#page-1 #page-box", {
//     rotate: 360,
//     scale: 0,
//     delay: 1,
//     duration: 2,
// })

gsap.to("#h-scroll-2 h1", {
  transform: "translate(-200%)",
  scrollTrigger: {
    trigger: "#h-scroll-2",
    scroller: "body",
    scrub: true,
    pin: true,
    markers: true,
    start: "top 0%",
    end: "top -100%",
  },
});

// const initialPath = "M 0 0 Q 150 0 300 0";

// const string = document.querySelector("#string")

// string.addEventListener("mousemove", (e) => {
//     console.log(e.offsetX, e.x);
//     // console.log(string.getBoundingClientRect())
//     const path = `M 0 10 Q 150 ${e.y} 300 10`;
//     gsap.to("svg path", {
//         attr: {
//             d: path
//         },
//         duration: 0.2,
//         ease: 'power3.out',
//     })
// });

// string.addEventListener("mouseleave", () => {
//     gsap.to("svg path", {
//         attr: {
//             d: initialPath,
//         },
//         duration: 1.5,
//         ease: "elastic.out(1, 0.2)"
//     })
// })

// const cursor = document.querySelector("#cursor");
// console.log(document);
// console.log(cursor);
// document.addEventListener("mousemove", (e) => {
//     console.log("first")
//     gsap.to(cursor, {
//         x: e.x-8,
//         y: e.y-8,
//         duration: 0.1,
//     })
// })

// const image = document.querySelector("#image");

// image.addEventListener("mouseenter", (e) => {
//     console.log("first")
//     gsap.to(cursor, {
//         scale: 4
//     })
// })
// image.addEventListener("mouseleave", (e) => {
//     console.log("leave")
//     gsap.to(cursor, {
//         scale: 1
//     })
// })

// const tln = gsap.timeline({ paused: true });

// tln.to("#full", {
//   right: 0,
//   // duration: 1,
// });

// tln.from("#full h4", {
//   x: 100,
//   opacity: 0,
//   // duration: 1,
//   // stagger: 1
// });

// tln.from("#full #ic", {
//   opacity: 0,
// });

// const openBtn = document.querySelector("#i.open").addEventListener("click", () => {
//     tln.play();
// })
// // console.log(document.querySelector("#full #ic.close"))
// const closeBtn = document.querySelector("#full #ic.close").addEventListener("click", () => {
//     console.log("first")
//     tln.reverse();
// })

// const h1Ele = document.querySelector("h1");
// const h1 = h1Ele.textContent;

// const splittedText = h1.split("");

// let clutter = "";
// h1.split(" ").forEach((word) => {
//     const length = Math.floor(word.length / 2);
//   word.split("").forEach((char, index) => {
//     clutter += `<span class=${index < length ? "f" : "s"}>${char}</span>`;
//   });
//   clutter += ` `
// });

// h1Ele.innerHTML = clutter;

// gsap.from("h1 span.f ", {
//   y: 100,
//   duration: 1,
//   stagger: 0.3,
//   opacity: 0,
// });
// gsap.from("h1 span.s ", {
//   y: 100,
//   duration: 1,
//   stagger: -0.3,
//   opacity: 0,
// });



window.addEventListener("wheel", (e) => {
    if(e.deltaY > 0){
        gsap.to(
            ".marque", {
                transform: "translateX(0%)",
                duration: 2,
                repeat: -1,
                ease: "none",
            }
        )
        gsap.to(".marque span", {
            rotate: 0
        })
    }else{
        gsap.to(
            ".marque", {
                transform: "translateX(-200%)",
                duration: 2,
                repeat: -1,
                ease: "none",
            }
        )
        gsap.to(".marque span", {
            rotate: 180
        })
    }
})
