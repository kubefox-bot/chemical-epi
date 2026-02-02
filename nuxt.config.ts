import { defineNuxtConfig } from "nuxt/config";

const episuiteBaseUrl = process.env.EPISUITE_BASE_URL;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-02-03",
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  image: {
    domains: ["episuite.dev"],
  },
  runtimeConfig: {
    episuiteBaseUrl,
    public: {
      episuiteBaseUrl,
    },
  },
})
