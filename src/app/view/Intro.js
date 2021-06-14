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
        <Text size={`${theme.sizes.fontTitle}`} font={`${theme.fonts.title}`}>
          ARCHEOASTRONOMY
        </Text>
        <Text>
          L'archeoastronomia è una combinazione di studi <b>astronomici</b> e
          <b>archeologici</b>. Rappresenta la <b>conoscenza e comprensione</b>{" "}
          che gli antichi abitanti della terra avevano dei{" "}
          <b>fenomeni celesti</b>, di come li hanno utilizzati ed interpretati e
          quale ruolo hanno svolto all'interno delle loro culture.
        </Text>

        <Image src={firstIntro}></Image>

        <Text>
          L'archeoastronomia considera in maniera riccamente simbolica le
          <b>interpretazioni culturali</b> dei più svariati fenomeni celesti,
          presenti in moltissime culture antiche.
        </Text>
        <Text>
          Questa disciplina è spesso{" "}
          <b>
            gemellata con lo studio antropologico dell'osservazione del cielo
            nelle società cosiddette primitive.
          </b>
        </Text>
        <Text>
          L'archeoastronomia si avvale anche dell'
          <b>uso di documentazioni storiche</b>, precedenti l'origine della
          moderna disciplina astronomica,{" "}
          <b>per studiare antichi eventi astronomici</b> ed è pertanto{" "}
          <b>strettamente associata con l'astronomia storica</b>.
        </Text>

        <Image src={secondIntro}></Image>

        <Text>
          Per favorire una{" "}
          <b>
            migliore comprensione della documentazione storica
            l'archeoastronomia fa uso anche delle conoscenze astronomiche
            attuali
          </b>
          .
        </Text>
        <Text>
          L'archeoastronomia utilizza una{" "}
          <b>
            varietà di metodi per rinvenire le prove di pratiche del passato
          </b>
          , tra cui archeologia, antropologia, astronomia, storia, statistica e
          calcolo delle probabilità.
        </Text>
        <Text>
          L'archeoastronomia può essere applicata a tutte le culture e a tutte
          le epoche. I <b>significati</b> derivanti dall'osservazione del cielo{" "}
          <b>possono variare da cultura a cultura</b>; tuttavia esistono metodi
          scientifici che possono essere applicati trasversalmente all'interno
          delle culture esaminando le antiche credenze ed{" "}
          <b>
            attraverso i quali si può giungere ad interpretazioni
            archeoastronomiche
          </b>
          .
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
