import { gsap, Power1 } from "gsap";
gsap.registerEase(Power1);

const tl = gsap.timeline();

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

export const rotateLogo = () => {
  gsap.fromTo(
    ".home_container .logo",
    {
      opacity: 0,
    },
    {
      duration: 2,
      rotateZ: 180,
      opacity: 1,
    }
  );
};

export const rotateLogoLoader = () => {
  tl.fromTo(
    ".home_container .loader",
    {
      autoAlpha: 0,
      height: 0,
    },
    {
      duration: 3.5,
      height: 100,
      autoAlpha: 1,
    }
  );

  tl.to(".home_container .loader", {
    autoAlpha: 1,
    duration: 1,
  });
};

export const animateText = () => {
  gsap.fromTo(
    ".home_container .loader",
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 1,
    }
  );
  tl.from([".home_container .stonehenge"], {
    zIndex: 999,
  });

  tl.fromTo(
    [".home_container .stonehenge"],
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 1,
    }
  );

  tl.fromTo(
    [".home_container .title"],
    {
      autoAlpha: 0,
      y: 50,
      zIndex: 998,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 1,
    }
  );

  tl.fromTo(
    ".home_container .subtitle",
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 1,
    }
  );

  tl.to([".home_container .stonehenge"], {
    zIndex: 996,
  });

  tl.fromTo(
    ".home_container .enter_btn",
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 1,
    }
  );

  tl.fromTo(
    ".home_container .enter_btn .line",
    {
      autoAlpha: 0,
      x: -100,
    },
    {
      autoAlpha: 1,
      x: 0,
      duration: 1,
    }
  );
};

export const hoverBtn = () => {
  gsap.fromTo(
    ".home_container .enter_btn .line",
    {
      x: 0,
    },
    {
      x: 100,
    }
  );
};

export const removeHoverBtn = () => {
  gsap.fromTo(
    ".home_container .enter_btn .line",
    {
      x: 100,
    },
    {
      x: 1,
    }
  );
};
