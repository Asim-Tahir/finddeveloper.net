import styles from "./page.module.scss";

import Hero from "@/sections/hero";
import PopularSearches, { SearchRecord } from "@/sections/popular-searches";

import popularSearches from "@/mocks/popular-searches.json";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
      <PopularSearches
        title="Popüler aramalar"
        searches={popularSearches as Array<SearchRecord>}
      />
    </main>
  );
}
