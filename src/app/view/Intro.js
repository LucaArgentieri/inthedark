import Box from "../components/Box";
import Container from "../components/Container";
import Text from "../components/Text";
import theme from "../theme";
import Image from "../components/Image";
import firstIntro from "../assets/images/firstIntro.png";
import secondIntro from "../assets/images/secondIntro.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function Intro() {
  const tl = gsap.timeline();

  window.addEventListener("scroll", (evt) => {
    tl.to(".text_box .title", {
      scrollTrigger: ".text_box .title",
      opacity: 1,
      duration: 0.5,
    });
    tl.to(".text_box .text1", {
      scrollTrigger: ".text_box .text1",
      opacity: 1,
      duration: 0.5,
    });
    tl.to(".text_box .img1", {
      scrollTrigger: ".text_box .img1",
      opacity: 1,
      duration: 0.5,
    });
    tl.to(".text_box .text2", {
      scrollTrigger: ".text_box .text2",
      opacity: 1,
      duration: 0.5,
    });
    tl.to(".text_box .text3", {
      scrollTrigger: ".text_box .text3",
      opacity: 1,
      duration: 0.5,
    });
    tl.to(".text_box .text4", {
      scrollTrigger: ".text_box .text4",
      opacity: 1,
      duration: 0.5,
    });
    tl.to(".text_box .img2", {
      scrollTrigger: ".text_box .img2",
      opacity: 1,
      duration: 0.5,
    });
    tl.to(".text_box .text5", {
      scrollTrigger: ".text_box .text5",
      opacity: 1,
      duration: 0.5,
    });
    tl.to(".text_box .text6", {
      scrollTrigger: ".text_box .text6",
      opacity: 1,
      duration: 0.5,
    });
    tl.to(".text_box .text7", {
      scrollTrigger: ".text_box .text7",
      opacity: 1,
      duration: 0.5,
    });
    tl.to(".text_box .text8", {
      scrollTrigger: ".text_box .text8",
      opacity: 1,
      duration: 0.5,
    });
  });
  return (
    <Box className="text_box">
      <Container>
        <Text
          className="title"
          size={`${theme.sizes.fontTitle}`}
          font={`${theme.fonts.title}`}
        >
          ARCHEOASTRONOMY
        </Text>
        <Text className="text1">
          L'archeoastronomia è una combinazione di studi <b> astronomici</b> e
          <b> archeologici</b>. Rappresenta la conoscenza e comprensione che gli
          antichi abitanti della terra avevano dei
          <b> fenomeni celesti </b>, di come li hanno utilizzati ed interpretati
          e quale ruolo hanno svolto all'interno delle loro culture.
        </Text>
        <Image className="img1" src={firstIntro}></Image>
        <Text className="text2">
          L'archeoastronomia considera in maniera riccamente simbolica le
          <b> interpretazioni culturali </b> dei più svariati fenomeni celesti,
          presenti in moltissime culture antiche.
        </Text>
        <Text className="text3">
          Questa disciplina è spesso gemellata con lo{" "}
          <b> studio antropologico</b> dell'osservazione del cielo nelle società
          cosiddette primitive.
        </Text>
        <Text className="text4">
          L'archeoastronomia si avvale anche dell' uso di documentazioni
          storiche, precedenti l'origine della moderna disciplina astronomica,
          per studiare
          <b> antichi eventi astronomici </b> ed è pertanto strettamente
          associata con l'astronomia storica.
        </Text>
        <Image className="img2" src={secondIntro}></Image>
        <Text className="text5">
          Per favorire una migliore comprensione della documentazione storica
          l'archeoastronomia fa uso anche delle{" "}
          <b> conoscenze astronomiche attuali</b>.
        </Text>
        <Text className="text6">
          L'archeoastronomia utilizza una varietà di metodi per{" "}
          <b> rinvenire</b> le prove di pratiche del passato , tra cui
          archeologia, antropologia, astronomia, storia, statistica e calcolo
          delle probabilità.
        </Text>
        <Text className="text7">
          L'archeoastronomia può essere applicata a tutte le culture e a tutte
          le epoche. I <b> significati</b> derivanti dall'osservazione del cielo{" "}
          <b>possono variare da cultura a cultura</b>; tuttavia esistono metodi
          scientifici che possono essere applicati trasversalmente all'interno
          delle culture esaminando le antiche credenze ed attraverso i quali si
          può giungere ad <b> interpretazioni archeoastronomiche</b>.
        </Text>
        <Text
          className="text8"
          size={`${theme.sizes.fontTitleBottom}`}
          font={`${theme.fonts.title}`}
        >
          <Link to="/experience">VEDI I LUOGHI ARCHEOASTRONOMICI</Link>
        </Text>
      </Container>
    </Box>
  );
}
