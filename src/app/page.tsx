import Hero from "@/sections/hero";
import PopularSearches, {
  type PopularSearchRecord,
} from "@/sections/popular-searches";
import FeaturedJobPostings from "@/sections/featured-job-postings";
import ActionCards from "@/sections/action-cards";
import JointEmployers from "@/sections/joint-employers";

import Footer from "@/partials/footer";

import topLeftBgImage from "@/assets/svgs/home/top-left-bg.svg";
import midRightBgImage from "@/assets/svgs/home/mid-right-bg.svg";
import bottomLeftBgImage from "@/assets/svgs/home/bottom-left-bg.svg";

import popularSearches from "@/mocks/popular-searches.json";

import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main
      className={styles.homepage}
      style={{
        backgroundImage: `url(${topLeftBgImage.src}), url(${midRightBgImage.src}), url(${bottomLeftBgImage.src})`,
        backgroundRepeat: `no-repeat, no-repeat, no-repeat`,
        backgroundPosition: `top 668px left, bottom 653px right, bottom 203px left`,
        backgroundSize: `${topLeftBgImage.width}px ${topLeftBgImage.height}px, ${midRightBgImage.width}px ${midRightBgImage.height}px, ${bottomLeftBgImage.width}px ${bottomLeftBgImage.height}px`,
      }}
    >
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
