export const animateResult = {
  initial: {
    opacity: 0,
    transition: `transform 1s ease`,
    transform: `translateX(-50px)`,
  },
  animate: {
    opacity: 1,
    transition: `transform 1s ease`,
    transform: `translateX(0px)`,
  },
  exit: {
    opacity: 0,
    transition: `transform 1s ease`,
    transform: `translateX(-50px)`,
  },
};
