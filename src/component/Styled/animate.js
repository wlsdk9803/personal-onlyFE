export const animate = {
  initial: {
    opacity: 0,
    transition: `transform 1s ease`,
    transform: `translateX(10%)`,
  },
  animate: {
    opacity: 1,
    transition: `transform 1s ease`,
    transform: `translateX(0%)`,
  },
  exit: {
    opacity: 0,
    transition: `transform 1s ease`,
    transform: `translateX(-10%)`,
  },

  initial2: {
    opacity: 0,
    transition: `transform 1s ease`,
  },
  animate2: {
    opacity: 1,
    transition: `transform 1s ease`,
  },
  exit2: {
    opacity: 0,
    transition: `transform 1s ease`,
  },
};
