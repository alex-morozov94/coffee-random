import { svelte } from "@sveltejs/vite-plugin-svelte"

import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [svelte()],
  test: {
		environment: "jsdom",
	},
	resolve: process.env.VITEST
		? {
				conditions: ["browser"]
			}
		: undefined
});