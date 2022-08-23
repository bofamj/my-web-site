/* navbar inmation */
gsap.from("#title", {duration: 1, y: -100});
gsap.from(".nav-text-1", {duration: 1.5, y: -100});
gsap.from(".nav-text-2", {duration: 2, y: -100});
gsap.from(".nav-text-3", {duration: 2.5, y: -100});


const containers = gsap.utils.toArray(".fade");
containers.forEach((container) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false
      }
    });
  
    tl.from(container, {
      autoAlpha: 1
    }).to(
      container,
      {
        autoAlpha: 0
      },
      3.5
    );
  });
/* gsap.from("#about", {duration:2.5, opacity:0, stagger:0.05, ease:"power2.in"}) */


/* hero image */
gsap.from(".image", {duration: 1, x: 1000});




/* the hero text animation */
gsap.from(".hero-text-1", {duration: 1, x: -1000});
gsap.from(".hero-text-2", {duration: 1.5, x: -1000});
gsap.from(".hero-text-3", {duration: 2, x: -1000});
gsap.from(".hero-text-4", {duration: 2.5, x: -1000});
gsap.from(".hero-text-5", {duration: 3, x: -1000});
gsap.from(".hero-text-6", {duration: 3.5, x: -1000});
