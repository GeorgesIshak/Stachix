import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
    // Clean and modern way to run TS seeds
    seed: "tsx prisma/seed.ts", 
  },

  datasource: {
    url: env("DATABASE_URL"),
    // Only needed if you don't have full permissions on your primary DB
    shadowDatabaseUrl: env("SHADOW_DATABASE_URL"),
  },
});
