import { defineNuxtConfig } from "nuxt/config";

const episuiteBaseUrl = process.env.EPISUITE_BASE_URL;
const cacheTtl = process.env.CACHE_TTL ?? "600000";
const requestTimeout = process.env.REQ_TIMEOUT ?? "15000";

export default defineNuxtConfig({
  compatibilityDate: "2026-02-03",
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  image: {
    domains: ["episuite.dev"],
  },
  runtimeConfig: {
    episuiteBaseUrl,
    cacheTtl,
    requestTimeout,
    public: {
      episuiteBaseUrl,
      requestTimeout
    },
  },
})
