import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal Cloudflare setup for this portfolio.
// Add R2 caching later if you want ISR/cache persistence across deployments.
export default defineCloudflareConfig({});
