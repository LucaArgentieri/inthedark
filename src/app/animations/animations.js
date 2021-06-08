import { gsap, Power1 } from "gsap";
gsap.registerEase(Power1);

export const selectOver = (el) => {
  gsap.to(el.target, {
    duration: 0.3,
    width: "90%",
  });
};

export const removeOver = (el) => {
  gsap.to(el.target, {
    duration: 0.3,
    width: "50%",
  });
};
