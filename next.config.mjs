import { fileURLToPath, URL } from "url";

/**
 * @typedef {import('next').NextConfig & {
 *   sassOptions: import('sass-loader').Options["sassOptions"] & {
 *     includePaths: import('sass').LegacySharedOptions<"sync">["includePaths"],
 *     prependData: import('sass-loader').Options["additionalData"],
 *     additionalData: import('sass-loader').Options["additionalData"]
 *   }
 * }} NextConfig
 *
 * @type {NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  /**
   * @param {import("webpack").Configuration} config
   * @returns {import("webpack").Configuration}
   */
  webpack: (config) => {
    config.resolve.alias = {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    };

    return config;
  },
  experimental: {
    turbo: {
      resolveAlias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
};

export default nextConfig;
