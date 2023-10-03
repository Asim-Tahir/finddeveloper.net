"use client";

import { useCallback, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { userActions } from "@/store";
import { useAppDispatch, useAppSelector } from "@/hooks";

import styles from "./styles.module.scss";

import heroBackgroundImage from "@/assets/svgs/hero-background.svg";
import logoImage from "@/assets/svgs/logo.svg";
import heroTextImage from "@/assets/svgs/hero-text.svg";
import heroSearchButtonIcon from "@/assets/svgs/hero-search-button-icon.svg";
import heroSearchInputIcon from "@/assets/svgs/hero-search-input-icon.svg";

export default function HeroSection(): JSX.Element {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  const login = useCallback(
    ({ username, password }: ReduxStore.UserStore.LoginActionPayload) =>
      dispatch(userActions.login({ username, password })),
    [dispatch]
  );

  useEffect(() => {
    (async () => {
      await login({ username: "forem", password: "dipsum" });
    })();
  }, [login]);

  function onSearchFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form: HTMLFormElement = event.target as HTMLFormElement;

    const formdata = new FormData(form);
    const searchText = formdata.get("search");

    if (!searchText || (typeof searchText === "string" && !searchText.trim())) {
      return;
    }

    console.log("searchText:", searchText);
  }

  return (
    <section
      className={styles.heroWrapper}
      style={{
        "--bg-image-url": `url(${heroBackgroundImage.src})`,
        "--bg-image-width": heroBackgroundImage.width,
        "--bg-image-height": heroBackgroundImage.height,
      }}
    >
      <div className={styles.hero}>
        <header className={styles.heroHeader}>
          {user?.loggedIn ? (
            <Link href="/profile">Merhaba, {user.currentUser.name}</Link>
          ) : (
            <>
              <Link className={styles.heroAuthButton} href="/register">
                Kayıt Ol
              </Link>
              <Link className={styles.heroAuthButton} href="/login">
                Giriş Yap
              </Link>
            </>
          )}
        </header>

        <Link href="/" className={styles.heroLogoLink}>
          <Image
            className={styles.heroLogo}
            src={logoImage.src}
            width={logoImage.width}
            height={logoImage.height}
            alt="finddeveloper.net Logo"
          />
        </Link>

        <Image
          className={styles.heroText}
          src={heroTextImage.src}
          width={heroTextImage.width}
          height={heroTextImage.height}
          alt="finddeveloper.net slogan that said 'find your teammate'"
        />

        <form className={styles.heroSearchForm} onSubmit={onSearchFormSubmit}>
          <label className={styles.heroSearchInputLabel}>
            <Image
              className={styles.heroSearchInputIcon}
              src={heroSearchInputIcon.src}
              width={heroSearchInputIcon.width}
              height={heroSearchInputIcon.height}
              alt="finddeveloper.net search input before icon"
            />
            <input
              className={styles.heroSearchInput}
              name="search"
              type="search"
              required
              autoComplete="off"
              inputMode="search"
              placeholder="İş Ara | İş, Şirket, Anahtar Kelime"
            />
          </label>

          <div className={styles.heroSearchButtonGroup}>
            <button className={styles.heroSearchButton}>
              <Image
                src={heroSearchButtonIcon.src}
                width={heroSearchButtonIcon.width}
                height={heroSearchButtonIcon.height}
                alt="finddeveloper.net search icon"
              />
            </button>

            <Link className={styles.heroSearchBottomText} href="#">
              Detaylı Arama
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
