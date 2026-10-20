/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the site is plain HTML/CSS/JS and runs on any host
  // (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Тільки для превʼю на claude.ai. На Vercel не використовується.
  ...(process.env.PREVIEW_BUILD ? { assetPrefix: "./site" } : {}),
}

export default nextConfig
