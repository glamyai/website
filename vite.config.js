import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  root: "src",
  base: "/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        privacyEn: resolve(__dirname, "src/en/privacy/index.html"),
        privacyTr: resolve(__dirname, "src/tr/privacy/index.html"),
        privacyIt: resolve(__dirname, "src/it/privacy/index.html"),
        marketOpportunity: resolve(__dirname, "src/research/market-opportunity/index.html"),
        marketOpportunityEn: resolve(__dirname, "src/en/research/market-opportunity/index.html"),
        marketOpportunityTr: resolve(__dirname, "src/tr/research/market-opportunity/index.html"),
        marketOpportunityIt: resolve(__dirname, "src/it/research/market-opportunity/index.html"),
        financialModel: resolve(__dirname, "src/research/financial-model/index.html"),
        financialModelEn: resolve(__dirname, "src/en/research/financial-model/index.html"),
        financialModelTr: resolve(__dirname, "src/tr/research/financial-model/index.html"),
        financialModelIt: resolve(__dirname, "src/it/research/financial-model/index.html")
      }
    }
  }
});
