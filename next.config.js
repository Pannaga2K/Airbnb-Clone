/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "www.jsonkeeper.com"]
  },
  env: {
    MAPBOXKEY: "pk.eyJ1IjoicGFubngiLCJhIjoiY2xhcWV1ZmJ3MWo1dzNwbzJrZHVuMmx3aiJ9.ST98xJZp_NzhCiJXNv9OPw"
  }
}

module.exports = nextConfig
