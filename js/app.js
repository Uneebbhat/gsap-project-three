// function toggleHideMenu() {
//   const menu = document.querySelector(".navbar");
//   menu.classList.toggle("active");
//   console.log("hello");
// }

const btn = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const navItems = document.querySelector(".nav-items");

let isNavbarVisible = false;

btn.addEventListener("click", function () {
  const timeline = gsap.timeline();

  if (isNavbarVisible) {
    timeline.to(navbar, {
      y: -navbar.offsetHeight,
      duration: 0.5,
      ease: "power2.in",
    });
  } else {
    timeline.to(navbar, {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }

  isNavbarVisible = !isNavbarVisible; // Toggle the visibility flag
});

const content = document.querySelector("section");
let currentPos = window.pageYOffset;

const callDistort = function () {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.35;

  content.style.transform = "skewY(" + speed + "deg)";
  currentPos = newPos;
  requestAnimationFrame(callDistort);
};

callDistort();

gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline();

timeline.to(".main__img", {
  scrollTrigger: {
    trigger: ".main__img",
    start: "top 30%",
    end: "top 10%",
    // markers: true,
    scrub: 2,
  },
  width: "100%",
  ease: "none",
});

// Play the timeline
timeline.play();
