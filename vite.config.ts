/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/dist/config";

export default defineConfig({
    test: {
        globals: true,
        environmentMatchGlobs: [["**/*.dom.*", "happy-dom"]],
        exclude: [...configDefaults.exclude, "**/e2e/**"],
    },
});
