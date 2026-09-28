const page1Animation = () => {
  const tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.15,
  });

  tl.from(".center-part-1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".center-part-1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part-1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".center-part-2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 200,
    },
    "-=0.3",
  );

  tl.from(".section-bottom span", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 6,
  });
};


page1Animation();


const page2Animation = () => {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-2",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            scrub: true,
            end: "top 0%",
        }
    });

    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5,
    });
    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1,
    }, "anim-1")
    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1,
    }, "anim-1")
    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1,
    }, "anim-2")
    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1,
    }, "anim-2")
}

page2Animation();