const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let tl = gsap.timeline();

// tl.to("#main div",{
//     y:"100vh",
//     scale:0.6,
//     duration:0,
// })

// tl.to("#main div",{
//     y:"10vh",
//     duration:1,
//     delay:1,

// })
// tl.to("#main div",{
//     y:"vh",
//     rotate:360,
//     duration:0.8,
//     scale:1,

// })
tl.to("#page1", {
  y: "100vh",
  scale: 0.6,
  duration: 0,
});

tl.to("#page1", {
  y: "-20vh",
  duration: 1,
  delay: 1,
});
tl.to("#page1", {
  y: "vh",
  rotation: -360,

  duration: 1.3,
  scale: 1,
});
