import Image from "next/image";

import "./styles.scss";

import acibadem1xImage from "./assets/images/1-acibadem@1x.webp";
import acibadem2xImage from "./assets/images/1-acibadem@2x.webp";
import acibadem3xImage from "./assets/images/1-acibadem@3x.webp";

import akbank1xImage from "./assets/images/2-akbank@1x.webp";
import akbank2xImage from "./assets/images/2-akbank@2x.webp";
import akbank3xImage from "./assets/images/2-akbank@3x.webp";

import akcansa1xImage from "./assets/images/3-akcansa@1x.webp";
import akcansa2xImage from "./assets/images/3-akcansa@2x.webp";
import akcansa3xImage from "./assets/images/3-akcansa@3x.webp";

import akkim1xImage from "./assets/images/4-akkim@1x.webp";
import akkim2xImage from "./assets/images/4-akkim@2x.webp";
import akkim3xImage from "./assets/images/4-akkim@3x.webp";

import akkok1xImage from "./assets/images/5-akkok@1x.webp";
import akkok2xImage from "./assets/images/5-akkok@2x.webp";
import akkok3xImage from "./assets/images/5-akkok@3x.webp";

import aktifBank1xImage from "./assets/images/6-aktif-bank@1x.webp";
import aktifBank2xImage from "./assets/images/6-aktif-bank@2x.webp";
import aktifBank3xImage from "./assets/images/6-aktif-bank@3x.webp";

import allianz1xImage from "./assets/images/7-allianz@1x.webp";
import allianz2xImage from "./assets/images/7-allianz@2x.webp";
import allianz3xImage from "./assets/images/7-allianz@3x.webp";

import anadoluSigorta1xImage from "./assets/images/8-anadolu-sigorta@1x.webp";
import anadoluSigorta2xImage from "./assets/images/8-anadolu-sigorta@2x.webp";
import anadoluSigorta3xImage from "./assets/images/8-anadolu-sigorta@3x.webp";

import anelGroup1xImage from "./assets/images/9-anel-group@1x.webp";
import anelGroup2xImage from "./assets/images/9-anel-group@2x.webp";
import anelGroup3xImage from "./assets/images/9-anel-group@3x.webp";

import arcelik1xImage from "./assets/images/10-arcelik@1x.webp";
import arcelik2xImage from "./assets/images/10-arcelik@2x.webp";
import arcelik3xImage from "./assets/images/10-arcelik@3x.webp";

import bsh1xImage from "./assets/images/11-bsh@1x.webp";
import bsh2xImage from "./assets/images/11-bsh@2x.webp";
import bsh3xImage from "./assets/images/11-bsh@3x.webp";

import bezmialem1xImage from "./assets/images/12-bezmialem@1x.webp";
import bezmialem2xImage from "./assets/images/12-bezmialem@2x.webp";
import bezmialem3xImage from "./assets/images/12-bezmialem@3x.webp";

import ronesansHolding1xImage from "./assets/images/13-ronesans-holding@1x.webp";
import ronesansHolding2xImage from "./assets/images/13-ronesans-holding@2x.webp";
import ronesansHolding3xImage from "./assets/images/13-ronesans-holding@3x.webp";

import tav1xImage from "./assets/images/14-tav@1x.webp";
import tav2xImage from "./assets/images/14-tav@2x.webp";
import tav3xImage from "./assets/images/14-tav@3x.webp";

export default function JointEmployersSection(): JSX.Element {
  return (
    <section className="joint-employers">
      <picture className="joint-employers__picture">
        <source srcSet={acibadem3xImage.src} media="(min-width: 768px)" />
        <source srcSet={acibadem2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={acibadem1xImage}
          alt="Acıbadem Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source srcSet={akbank3xImage.src} media="(min-width: 768px)" />
        <source srcSet={akbank2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={akbank1xImage}
          alt="Akbank Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source srcSet={akcansa3xImage.src} media="(min-width: 768px)" />
        <source srcSet={akcansa2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={akcansa1xImage}
          alt="AkçanSA Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source srcSet={akkim3xImage.src} media="(min-width: 768px)" />
        <source srcSet={akkim2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={akkim1xImage}
          alt="Akkim Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source srcSet={akkok3xImage.src} media="(min-width: 768px)" />
        <source srcSet={akkok2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={akkok1xImage}
          alt="Akkök Holding Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source srcSet={aktifBank3xImage.src} media="(min-width: 768px)" />
        <source srcSet={aktifBank2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={aktifBank1xImage}
          alt="Aktif Bank Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source srcSet={allianz3xImage.src} media="(min-width: 768px)" />
        <source srcSet={allianz2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={allianz1xImage}
          alt="Allianz Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source srcSet={anadoluSigorta3xImage.src} media="(min-width: 768px)" />
        <source srcSet={anadoluSigorta2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={anadoluSigorta1xImage}
          alt="Anadolu Sigorta Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source srcSet={anelGroup3xImage.src} media="(min-width: 768px)" />
        <source srcSet={anelGroup2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={anelGroup1xImage}
          alt="Anel Group Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source srcSet={arcelik3xImage.src} media="(min-width: 768px)" />
        <source srcSet={arcelik2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={arcelik1xImage}
          alt="Arçelik Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source srcSet={bsh3xImage.src} media="(min-width: 768px)" />
        <source srcSet={bsh2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={bsh1xImage}
          alt="B/S/H Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source srcSet={bezmialem3xImage.src} media="(min-width: 768px)" />
        <source srcSet={bezmialem2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={bezmialem1xImage}
          alt="Bezmialem Foundation University Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source
          srcSet={ronesansHolding3xImage.src}
          media="(min-width: 768px)"
        />
        <source
          srcSet={ronesansHolding2xImage.src}
          media="(min-width: 640px)"
        />
        <Image
          className="joint-employers__image"
          src={ronesansHolding1xImage}
          alt="Rönesans Holding Brand Logo"
        />
      </picture>

      <picture className="joint-employers__picture">
        <source srcSet={tav3xImage.src} media="(min-width: 768px)" />
        <source srcSet={tav2xImage.src} media="(min-width: 640px)" />
        <Image
          className="joint-employers__image"
          src={tav1xImage}
          alt="TAV Airports Brand Logo"
        />
      </picture>
    </section>
  );
}
