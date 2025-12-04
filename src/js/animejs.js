import { animate, utils, createAnimatable, createTimeline, stagger, splitText } from 'animejs';

// animation des sliders

animate(".dot", {
  height: [10, 410, 10],
  duration: 1300,
  loop: true,
  ease: 'easeInOutSine',
  delay: () => utils.random(2, 2000)
});

animate(".dott", {
  height: [10, 410, 10],
  duration: 1000,
  loop: true,
  ease: 'outInCirc',
  delay: 400,
});

animate(".dottt", {
  height: [10, 410, 10],
  duration: 800,
  loop: true,
  easing: 'linear',
});

// animation du texte clone

const { chars } = splitText('p', {
  chars: {
    wrap: 'clip',
    clone: 'bottom'
  },
});

createTimeline()
  .add(chars, {
    y: '-100%',
    loop: true,
    loopDelay: 300,
    duration: 350,
    ease: 'inOut(2)',
  }, stagger(50, { from: 'top' }));



// Étoile + Bouton
const starWrapper = document.querySelector(".star-wrapper");
const deactivateBtn = document.querySelector("button");
const rect = starWrapper.getBoundingClientRect();

let centerX = rect.left + rect.width / 2;
let centerY = rect.top + rect.height / 2;

const starAnim = createAnimatable(starWrapper, {
  x: 400,
  y: 400,
  ease: "out(4)"
});

const onMouseMove = (e) => {
  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;
  starAnim.x(dx); 
  starAnim.y(dy);
};


window.addEventListener("resize", () => {
  centerX = window.innerWidth / 2;
  centerY = window.innerHeight / 2;
  starAnim.revert();
});

document.querySelector(".star-wrapper").addEventListener("click", () => {
  window.addEventListener("mousemove", onMouseMove);
});

deactivateBtn.addEventListener("click", () => {
  window.removeEventListener("mousemove", onMouseMove);
  starAnim.x(0);
  starAnim.y(0);
});

