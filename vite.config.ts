/// <reference types="vitest" />
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/dist/config";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        globals: true,
        environmentMatchGlobs: [["**/*.dom.*", "happy-dom"]],
        exclude: [...configDefaults.exclude, "**/e2e/**"],
    },
});
