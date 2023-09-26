import styles from "./page.module.scss";

import Hero from "@/sections/hero";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
