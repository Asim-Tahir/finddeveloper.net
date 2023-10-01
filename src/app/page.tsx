import styles from "./page.module.scss";

import Hero from "@/sections/hero";
import PopularSearches, {
  type PopularSearchRecord,
} from "@/sections/popular-searches";
import FeaturedJobPostings, {
  type JobPostingRecord,
} from "@/sections/featured-job-postings";

import popularSearches from "@/mocks/popular-searches.json";
import featuredJobPostings from "@/mocks/featured-job-postings.json";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
      <PopularSearches
        title="Popüler aramalar"
        searches={popularSearches as Array<PopularSearchRecord>}
      />
      <FeaturedJobPostings
        jobPostings={featuredJobPostings as Array<JobPostingRecord>}
      />
    </main>
  );
}
