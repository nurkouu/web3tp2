import { animate, utils } from 'animejs';

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



import { createTimeline, stagger, splitText } from 'animejs';

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
