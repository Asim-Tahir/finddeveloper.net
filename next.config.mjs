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
};

export default nextConfig;
