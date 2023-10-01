import "./styles.scss";

import ActionCard from "./card";

import jobSeeker3xImage from "./assets/images/job-seeker@3x.webp";
import jobSeeker2xImage from "./assets/images/job-seeker@2x.webp";
import jobSeeker1xImage from "./assets/images/job-seeker@1x.webp";

import employer3xImage from "./assets/images/employer@3x.webp";
import employer2xImage from "./assets/images/employer@2x.webp";
import employer1xImage from "./assets/images/employer@1x.webp";

export default function ActionCardsSection(): JSX.Element {
  return (
    <section className="action-cards">
      <ActionCard
        image={{
          "1x": jobSeeker1xImage,
          "2x": jobSeeker2xImage,
          "3x": jobSeeker3xImage,
          alt: "Job seeker shaking the employer's hand for a job interview",
        }}
        links={[
          {
            id: "118",
            label: "İş Ara",
            url: "#is-ara",
          },
          {
            id: "121",
            label: "Profilini Oluştur",
            url: "#profile-olustur",
          },
        ]}
      />
      <ActionCard
        image={{
          "1x": employer1xImage,
          "2x": employer2xImage,
          "3x": employer3xImage,
          alt: "Employer listening to the job seeker at the job interview",
        }}
        links={[
          {
            id: "76",
            label: "İş Veren Çözümleri",
            url: "#is-veren-cozumleri",
          },
        ]}
      />
    </section>
  );
}
