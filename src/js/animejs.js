import { animate, utils, createAnimatable, createTimeline, stagger, splitText } from 'animejs';

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
    duration: 500,
    ease: 'inOut(2)',
  }, stagger(50, { from: 'top' }));

/*
//animation de l'étoile revert
animate('g', {
  rotate: "360deg",
  duration: 1000,
  loop: true,
  easing: 'linear',
  alternate: true,
  scale: 3
});
*/



const star = document.querySelector('.star g');


const starAnim = createAnimatable(star, {
  x: 0,
  y: 0,
  easing: 'out(4)',
});


const onMouseMove = e => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;


  starAnim.x(mouseX);
  starAnim.y(mouseY);
};


const revertButton = document.querySelector('.future-btn');
const revertAnim = () => {
  window.removeEventListener('mousemove', onMouseMove);
  starAnim.revert();
};


window.addEventListener('mousemove', onMouseMove);
revertButton.addEventListener('click', revertAnim);