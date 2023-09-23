import localFont from "next/font/local";

export const nunito = localFont({
  display: "swap",
  variable: "--nunito",
  fallback: ["system-ui"],
  adjustFontFallback: "Arial",
  src: [
    {
      path: "./Nunito-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./Nunito-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Nunito-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./Nunito-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Nunito-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Nunito-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Nunito-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./Nunito-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Nunito-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Nunito-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Nunito-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Nunito-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Nunito-ExtraLightItalic.ttf",
      weight: "275",
      style: "italic",
    },
    {
      path: "./Nunito-ExtraLight.ttf",
      weight: "275",
      style: "normal",
    },
  ],
});
