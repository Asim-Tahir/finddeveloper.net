"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import heroBackgroundImage from "@/assets/svgs/hero-background.svg";
import logoImage from "@/assets/svgs/logo.svg";
import heroTextImage from "@/assets/svgs/hero-text.svg";

export default function Hero(): JSX.Element {
  function onSearchFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formdata = new FormData(event.target as HTMLFormElement);
    const searchText = formdata.get("search");

    console.log("searchText:", searchText);
  }

  return (
    <section
      className={styles.hero}
      style={{
        "--bg-image-url": `url(${heroBackgroundImage.src})`,
        "--bg-image-width": heroBackgroundImage.width,
        "--bg-image-height": heroBackgroundImage.height,
        "--bg-image-blur-data-url": `url(${heroBackgroundImage.blurDataURL})`,
      }}
    >
      <header className={styles.heroHeader}>
        <Link className={styles.heroAuthButton} href="/profile">
          Kayıt Ol
        </Link>
        <Link className={styles.heroAuthButton} href="/profile">
          Giriş Yap
        </Link>
      </header>

      <Link href="/">
        <Image
          className={styles.heroLogo}
          src={logoImage.src}
          width={logoImage.width}
          height={logoImage.height}
          blurDataURL={logoImage.blurDataURL}
          alt="finddeveloper.net Logo"
        />
      </Link>

      <Image
        className={styles.heroText}
        src={heroTextImage.src}
        width={heroTextImage.width}
        height={heroTextImage.height}
        blurDataURL={heroTextImage.blurDataURL}
        alt="finddeveloper.net slogan that said 'find your teammate'"
      />

      <form className={styles.heroSearchForm} onSubmit={onSearchFormSubmit}>
        <input
          className={styles.heroSearchInput}
          name="search"
          type="search"
          inputMode="search"
          placeholder="İş Ara | İş, Şirket, Anahtar Kelime"
        />
        <div className={styles.heroSearchButtonGroup}>
          <button className={styles.heroSearchButton}>
            Find{/* TODO: this should be image */}
          </button>
          <Link className={styles.heroSearchBottomText} href="#">
            Detaylı Arama
          </Link>
        </div>
      </form>
    </section>
  );
}
