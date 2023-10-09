/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    trailingSlash: true,
    domains: ["res.cloudinary.com", "via.placeholder.com"], //도메인 허용하기
  },
};
module.exports = nextConfig;
