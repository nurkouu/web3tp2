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
