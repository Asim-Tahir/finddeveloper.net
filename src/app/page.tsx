import styles from "./page.module.css";

import Hero from "@/sections/hero";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
