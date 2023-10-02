"use client";

import { useEffect, useState } from "react";
import Image, { unstable_getImgProps as getImgProps } from "next/image";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/navigation";

import { JobPostingsService } from "@/services";
import "./styles.scss";

export default function FeaturedJobPostingsSection() {
  const [jobPostings, setJobPostings] = useState<Array<JobPostings.Record>>([]);

  useEffect(() => {
    JobPostingsService.getList(2)
      .then((data) => {
        setJobPostings(data);
      })
      .catch((reason) => {
        console.error(reason);
      });
  }, []);

  return (
    <section className="featured-job-postings">
      <Swiper
        loop
        spaceBetween={22}
        slidesPerView={1}
        modules={[Virtual, Navigation]}
        virtual
        navigation
        breakpoints={{
          425: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          960: {
            slidesPerView: 5,
          },
          1140: {
            slidesPerView: 6,
          },
        }}
      >
        {jobPostings?.map((jobPosting, index) => (
          <SwiperSlide key={jobPosting.id} virtualIndex={index}>
            {(_slideData) => {
              const { props: img1xProps } = getImgProps({
                src: jobPosting.brand.logos["1x"].src,
                alt: jobPosting.brand.logos.alt,
                width: jobPosting.brand.logos["1x"].width,
                height: jobPosting.brand.logos["1x"].height,
                blurDataURL: jobPosting.brand.logos["1x"].blurDataURL,
              });

              const { props: source2xProps } = getImgProps({
                src: jobPosting.brand.logos["2x"].src,
                alt: jobPosting.brand.logos.alt,
                width: jobPosting.brand.logos["2x"].width,
                height: jobPosting.brand.logos["2x"].height,
                blurDataURL: jobPosting.brand.logos["2x"].blurDataURL,
              });

              const { props: source3xProps } = getImgProps({
                src: jobPosting.brand.logos["3x"].src,
                alt: jobPosting.brand.logos.alt,
                width: jobPosting.brand.logos["3x"].width,
                height: jobPosting.brand.logos["3x"].height,
                blurDataURL: jobPosting.brand.logos["3x"].blurDataURL,
              });

              return (
                <>
                  <div
                    className={clsx([
                      "featured-job-postings__title",
                      "line-clamp-1",
                    ])}
                  >
                    {jobPosting.title}
                  </div>

                  <div
                    className={clsx([
                      "featured-job-postings__brand-name",
                      "line-clamp-1",
                    ])}
                  >
                    {jobPosting.brand.name}
                  </div>

                  <picture className="featured-job-postings__picture">
                    <source
                      media="(min-width: 768px)"
                      srcSet={source3xProps.src}
                    />
                    <source
                      media="(min-width: 640px)"
                      srcSet={source2xProps.src}
                    />
                    <Image
                      className="featured-job-postings__image"
                      {...img1xProps}
                      alt={jobPosting.brand.logos.alt}
                    />
                  </picture>
                </>
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
