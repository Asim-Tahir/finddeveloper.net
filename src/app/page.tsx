import Hero from "@/sections/hero";
import PopularSearches, {
  type PopularSearchRecord,
} from "@/sections/popular-searches";
import FeaturedJobPostings, {
  type JobPostingRecord,
} from "@/sections/featured-job-postings";
import ActionCards from "@/sections/action-cards";

import popularSearches from "@/mocks/popular-searches.json";
import featuredJobPostings from "@/mocks/featured-job-postings.json";

import "./page.scss";

export default function HomePage() {
  return (
    <main className="homepage">
      <Hero />
      <PopularSearches
        title="Popüler aramalar"
        searches={popularSearches as Array<PopularSearchRecord>}
      />
      <FeaturedJobPostings
        jobPostings={featuredJobPostings as Array<JobPostingRecord>}
      />
      <ActionCards />
    </main>
  );
}
