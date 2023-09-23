import localFont from "next/font/local";

export const markPro = localFont({
  display: "swap",
  variable: "--mark-pro",
  fallback: ["system-ui"],
  adjustFontFallback: "Arial",
  src: [
    {
      path: "./MarkPro-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./MarkPro-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./MarkPro-HeavyItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./MarkPro-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./MarkPro-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./MarkPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./MarkPro-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./MarkPro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./MarkPro-BookItalic.otf",
      weight: "450",
      style: "italic",
    },
    {
      path: "./MarkPro-Book.otf",
      weight: "450",
      style: "normal",
    },
    {
      path: "./MarkPro-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./MarkPro.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./MarkPro-LightItalic.otf",
      weight: "350",
      style: "italic",
    },
    {
      path: "./MarkPro-Light.otf",
      weight: "350",
      style: "normal",
    },
    {
      path: "./MarkPro-ExtraLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./MarkPro-ExtraLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./MarkPro-ThinItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./MarkPro-Thin.otf",
      weight: "200",
      style: "normal",
    },
  ],
});
