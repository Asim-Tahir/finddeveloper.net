import type { StaticImageData } from "next/image";

declare global {
  declare type StaticImageSampleRate = "1x" | "2x" | "3x";

  declare type SampledStaticImageData = Record<
    StaticImageSampleRate,
    StaticImageData
  >;

  declare interface SampledStaticImageDataWithAlternateText
    extends SampledStaticImageData {
    alt: string;
  }
}
