/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [{
    source: "/logout",
    destination: "auth/logout",
    permanent: true
  }]
};

export default nextConfig;
