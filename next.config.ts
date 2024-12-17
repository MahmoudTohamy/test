import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    prependData: `
    @import "./src/styles/_mixins.scss";
    @import "./src/styles/_placeholders.scss";
    `,
  },
};

export default nextConfig;
