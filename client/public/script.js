let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//* navbar inmation */
gsap.from(".nav-text", {
  duration: 2,
  y: -95,
  ease: "bounce.out",
});
/* gsap.from("#title", { duration: 2, y: -100, ease: "bounce.out" }); */

//* hero image */
gsap.from(".image", { duration: 2, x: 1000, ease: "back.out(1.7)" });

//* the hero text animation */
gsap.from(".hero-text", {
  duration: 2,
  stagger: {
    each: 0.1,
    from: "center",
  },
  x: -1000,
});

//* about me section */
gsap.from(".about-me", {
  scrollTrigger: {
    trigger: ".about-me",
    toggleActions: "restart none restart noen",
  }, //* start the animation when ".box" enters the viewport (once)
  x: -500,
  scrub: 1,
});
gsap.from(".about-mee", {
  scrollTrigger: {
    trigger: ".about-mee",
    toggleActions: "restart none restart noen",
  }, //* start the animation when ".box" enters the viewport (once)
  x: 1050,
  duration: 1,
});

//* progect section */
gsap.from(".section-project", {
  scrollTrigger: {
    trigger: ".section-project",
    toggleActions: "restart none restart noen",
  },
  duration: 2,
  y: -200,
  ease: "bounce.out",
});

gsap.from(".project-1-desc", {
  scrollTrigger: {
    trigger: ".project-1-desc",
    toggleActions: "restart none restart noen",
  }, //* start the animation when ".box" enters the viewport (once)
  x: -500,
  scrub: 1,
});
gsap.from(".project-1-img", {
  scrollTrigger: {
    trigger: ".project-1-img",
    toggleActions: "restart none restart noen",
  }, //* start the animation when ".box" enters the viewport (once)
  x: 1050,
  duration: 1,
});
gsap.from(".project-2-desc", {
  scrollTrigger: {
    trigger: ".project-2-desc",
    toggleActions: "restart none restart noen",
  }, //* start the animation when ".box" enters the viewport (once)
  x: 1050,
  scrub: 1,
});
gsap.from(".project-2-img", {
  scrollTrigger: {
    trigger: ".project-2-img",
    toggleActions: "restart none restart noen",
  }, //* start the animation when ".box" enters the viewport (once)
  x: -500,
  duration: 1,
});
gsap.from(".project-3-desc", {
  scrollTrigger: {
    trigger: ".project-3-desc",
    toggleActions: "restart none restart noen",
  }, //* start the animation when ".box" enters the viewport (once)
  x: -500,
  scrub: 1,
});
gsap.from(".project-3-img", {
  scrollTrigger: {
    trigger: ".project-3-img",
    toggleActions: "restart none restart noen",
  }, //* start the animation when ".box" enters the viewport (once)
  x: 1050,
  duration: 1,
});

//*contact mr section*/
gsap.from(".section-contact", {
  scrollTrigger: {
    trigger: ".section-contact",
    toggleActions: "restart none restart noen",
  },
  duration: 2,
  y: -200,
  ease: "bounce.out",
});
gsap.from(".email", {
  scrollTrigger: {
    trigger: ".email",
    toggleActions: "restart none restart noen",
  }, //* start the animation when ".box" enters the viewport (once)
  x: -500,
  scrub: 1,
});
gsap.from(".text", {
  scrollTrigger: {
    trigger: ".text",
    toggleActions: "restart none restart noen",
  }, //* start the animation when ".box" enters the viewport (once)
  x: 1050,
  duration: 1,
});
//* sklls  section*/
gsap.from(".section-skills", {
  scrollTrigger: {
    trigger: ".section-skills",
    toggleActions: "restart none restart noen",
  },
  duration: 2,
  y: -200,
  ease: "bounce.out",
});

gsap
  .from(".skills-icons", {
    scrollTrigger: {
      trigger: ".skills-icons",
      toggleActions: "restart none restart noen",
    },
    opacity: 0,
    duration: 3,
  })
  .to(".skills-icons", { opacity: 1 });
