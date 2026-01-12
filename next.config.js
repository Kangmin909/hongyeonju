/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false, // URL 끝에 /를 붙이지 않도록 통일 (SEO 최적화)
};

module.exports = nextConfig;
