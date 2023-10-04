import Hero from "@/sections/hero";
import PopularSearches, {
  type PopularSearchRecord,
} from "@/sections/popular-searches";
import FeaturedJobPostings from "@/sections/featured-job-postings";
import ActionCards from "@/sections/action-cards";
import JointEmployers from "@/sections/joint-employers";

import Footer from "@/partials/footer";

import popularSearches from "@/mocks/popular-searches.json";

import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main className={styles.homepage}>
      <Hero />
      <PopularSearches
        title="Popüler aramalar"
        searches={popularSearches as Array<PopularSearchRecord>}
      />
      <FeaturedJobPostings />
      <ActionCards />
      <JointEmployers />

      <Footer />
    </main>
  );
}
