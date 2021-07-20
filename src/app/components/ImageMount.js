import Logo from "../assets/svg/logo.svg";
import Logo2 from "../assets/svg/logo2.svg";
import FirstIntro from "../assets/images/firstIntro.webp";
import giza1 from "../assets/images/giza1.webp";
import giza2 from "../assets/images/giza2.webp";
import giza3 from "../assets/images/giza3.webp";
import image180 from "../assets/images/image 180.webp";
import image185 from "../assets/images/image-185.webp";
import image0 from "../assets/images/image0.webp";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.webp";
import map from "../assets/images/map.webp";
import ogMeta from "../assets/images/og-meta-tags.webp";
import rectangle49 from "../assets/images/Rectangle 49.webp";
import rectangle50 from "../assets/images/Rectangle-50.webp";
import SecondIntro from "../assets/images/secondIntro.webp";
import sfondo from "../assets/images/sfondo.webp";
import Stonehenge from "../assets/images/STONEHENGE.webp";
import stoneSelect from "../assets/images/stoneselect.webp";

export const ImageMount = () => {
  const imageList = [
    Logo,
    Logo2,
    FirstIntro,
    giza1,
    giza2,
    giza3,
    image180,
    image185,
    image0,
    image1,
    image2,
    image3,
    image4,
    map,
    ogMeta,
    rectangle49,
    rectangle50,
    SecondIntro,
    sfondo,
    Stonehenge,
    stoneSelect,
  ];
  imageList.forEach((image) => {
    const newImage = new Image();
    newImage.src = image;
    window[image] = newImage;
    console.log("fatto");
  });
};
