import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FirstIntro from "../assets/images/firstIntro.webp";
import SecondIntro from "../assets/images/secondIntro.webp";
import { animateHomeText } from "../animations/animations";
export default function IntroText() {
  useEffect(() => {
    animateHomeText();
  }, []);
  return (
    <div className="intro_main">
      <div className="introtext_title flex flex_center flex_column">
        <p className="nobleman italic fs-103 ">Archeoastronomy</p>
      </div>
      <p className="sub nobleman fs-96">A welcome into a world yet unknown</p>

      <div className="introtext_column flex">
        <div className="flex flex_hcenter">
          <p className="fs-30 noblemantext">
            L'archeoastronomia è una combinazione di studi astronomici e
            archeologici. Rappresenta la conoscenza e comprensione che gli
            antichi abitanti della terra avevano dei fenomeni celesti, di come
            li hanno utilizzati ed interpretati e quale ruolo hanno svolto
            all'interno delle loro culture.
            <br /> L'archeoastronomia considera in maniera riccamente simbolica
            le interpretazioni culturali dei più svariati fenomeni celesti,
            presenti in moltissime culture antiche. Questa disciplina è spesso
            gemellata con lo studio antropologico dell'osservazione del cielo
            nelle società cosiddette primitive. L'archeoastronomia si avvale
            anche dell'uso di documentazioni storiche, precedenti l'origine
            della moderna disciplina astronomica, per studiare antichi eventi
            astronomici ed è pertanto strettamente associata con l'astronomia
            storica.
          </p>
        </div>
        <div className="flex flex_column flex_hcenter">
          <img src={FirstIntro} alt="" />
          <img src={SecondIntro} alt="" />
        </div>
      </div>
      <div className="introtext_column2">
        <p className="fs-30 noblemantext"></p>
      </div>
      <div className="introtext_column tre flex flex_reverse">
        <div className="flex flex_hcenter ">
          <p className="fs-30 noblemantext">
            Per favorire una migliore comprensione della documentazione storica
            l'archeoastronomia fa uso anche delle conoscenze astronomiche
            attuali. L'archeoastronomia utilizza una varietà di metodi per
            rinvenire le prove di pratiche del passato, tra cui archeologia,
            antropologia, astronomia, storia, statistica e calcolo delle
            probabilità.
          </p>
        </div>
        <div className="flex flex_column flex_hcenter ">
          <img src={FirstIntro} alt="" />
        </div>
      </div>
      <div className="introtext_column2 quattro">
        <p className="fs-30 noblemantext">
          L'archeoastronomia può essere applicata a tutte le culture e a tutte
          le epoche. I significati derivanti dall'osservazione del cielo possono
          variare da cultura a cultura; tuttavia esistono metodi scientifici che
          possono essere applicati trasversalmente all'interno delle culture
          esaminando le antiche credenze ed attraverso i quali si può giungere
          ad interpretazioni archeoastronomiche.
        </p>
        <Link className="flex flex_center introbtn" to="/experience">
          <button className="fs-24 nobleman">
            Archeoastronomy <br /> sites
          </button>
        </Link>
      </div>
    </div>
  );
}
