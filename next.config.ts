import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The CV route reads the profile photo from disk, so ship it with that function
  outputFileTracingIncludes: {
    "/cv": ["./public/images/my-profile.jpeg"],
  },

  // Old Vercel address forwards to the real domain (keeps path + query, e.g. /cv?lang=de)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "stachix.vercel.app" }],
        destination: "https://www.georgesishak.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
