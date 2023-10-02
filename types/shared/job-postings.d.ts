declare namespace JobPostings {
  interface Brand {
    name: string;
    logos: SampledStaticImageDataWithAlternateText;
  }

  interface Record {
    id: string;
    title: string;
    brand: Brand;
  }
}
