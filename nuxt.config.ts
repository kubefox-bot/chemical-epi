import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    episuiteBaseUrl: process.env.EPISUITE_BASE_URL || "https://episuite.dev",
    public: {
      episuiteBaseUrl: process.env.EPISUITE_BASE_URL || "https://episuite.dev",
    },
  },
})
