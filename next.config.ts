import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The CV route reads the profile photo from disk, so ship it with that function
  outputFileTracingIncludes: {
    "/cv": ["./public/images/my-profile.jpeg"],
  },
};

export default nextConfig;
