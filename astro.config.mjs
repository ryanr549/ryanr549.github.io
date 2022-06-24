import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
	site: "https://ryanr549.github.io/",
	base: "ryanr549.github.io",
});
