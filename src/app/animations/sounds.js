import bird from "../assets/mp3/hover/bird.mp3";
import desert from "../assets/mp3/atmospheric/desert-trim.ogg";
import deep from "../assets/mp3/atmospheric/deep-trim.ogg";
import swoop from "../assets/mp3/transitions/dry_swoop.mp3";

export const hoverSound = new Audio(`${bird}`);
export const clickSound = new Audio(`${swoop}`);
export const desertSound = new Audio(`${desert}`);
export const stonehenge = new Audio(`${deep}`);

const play = (audio) => {
  if (audio === stonehenge || audio === desertSound) audio.volume = 0.5;
  else audio.volume = 0.2;

  audio.play();
};

const stop = (audio) => {
  audio.pause();
  audio.courrentTime = 0;
};

export const hover = () => play(hoverSound);
export const click = () => play(clickSound);
export const gizaSound = () => play(desertSound);
export const stopGizaSound = () => stop(desertSound);
export const stonSound = () => play(stonehenge);
export const stopSound = () => stop(stonehenge);
