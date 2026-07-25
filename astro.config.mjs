// @ts-check
import { defineConfig } from 'astro/config';

// Static-first config: everything is pre-rendered to plain HTML at build time.
// Interactive widgets (future simulators) will be added as hydrated islands.
export default defineConfig({
  site: 'https://open-fiches.github.io',
});
