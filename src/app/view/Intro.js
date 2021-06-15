import Box from "../components/Box";
import Container from "../components/Container";
import Text from "../components/Text";
import theme from "../theme";
import Image from "../components/Image";
import firstIntro from "../assets/images/firstIntro.png";
import secondIntro from "../assets/images/secondIntro.png";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <Box className="text_box">
      <Container>
        <Text
          size={`${theme.sizes.fontLink}`}
          font={`${theme.fonts.title}`}
          padding={`0`}
        >
          <Link to="/experience">VEDI I LUOGHI ARCHEOASTRONOMICI</Link>
        </Text>
        <Text size={`${theme.sizes.fontTitle}`} font={`${theme.fonts.title}`}>
          ARCHEOASTRONOMY
        </Text>

        <Text>
          L'archeoastronomia è una combinazione di studi <b> astronomici</b> e
          <b> archeologici</b>. Rappresenta la conoscenza e comprensione che gli
          antichi abitanti della terra avevano dei
          <b> fenomeni celesti </b>, di come li hanno utilizzati ed interpretati
          e quale ruolo hanno svolto all'interno delle loro culture.
        </Text>

        <Image src={firstIntro}></Image>

        <Text>
          L'archeoastronomia considera in maniera riccamente simbolica le
          <b> interpretazioni culturali </b> dei più svariati fenomeni celesti,
          presenti in moltissime culture antiche.
        </Text>
        <Text>
          Questa disciplina è spesso gemellata con lo{" "}
          <b> studio antropologico</b> dell'osservazione del cielo nelle società
          cosiddette primitive.
        </Text>
        <Text>
          L'archeoastronomia si avvale anche dell' uso di documentazioni
          storiche, precedenti l'origine della moderna disciplina astronomica,
          per studiare
          <b> antichi eventi astronomici </b> ed è pertanto strettamente
          associata con l'astronomia storica.
        </Text>

        <Image src={secondIntro}></Image>

        <Text>
          Per favorire una migliore comprensione della documentazione storica
          l'archeoastronomia fa uso anche delle{" "}
          <b> conoscenze astronomiche attuali</b>.
        </Text>
        <Text>
          L'archeoastronomia utilizza una varietà di metodi per{" "}
          <b> rinvenire</b> le prove di pratiche del passato , tra cui
          archeologia, antropologia, astronomia, storia, statistica e calcolo
          delle probabilità.
        </Text>
        <Text>
          L'archeoastronomia può essere applicata a tutte le culture e a tutte
          le epoche. I <b> significati</b> derivanti dall'osservazione del cielo{" "}
          <b>possono variare da cultura a cultura</b>; tuttavia esistono metodi
          scientifici che possono essere applicati trasversalmente all'interno
          delle culture esaminando le antiche credenze ed attraverso i quali si
          può giungere ad <b> interpretazioni archeoastronomiche</b>.
        </Text>
        <Text
          size={`${theme.sizes.fontTitleBottom}`}
          font={`${theme.fonts.title}`}
        >
          <Link to="/experience">VEDI I LUOGHI ARCHEOASTRONOMICI</Link>
        </Text>
      </Container>
    </Box>
  );
}
