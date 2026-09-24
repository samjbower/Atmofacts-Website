/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Page URLs from the original static site, which search engines have indexed.
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about-us.html', destination: '/#story', permanent: true },
      { source: '/technology.html', destination: '/technology', permanent: true },
      { source: '/impacts.html', destination: '/impacts', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/legal.html', destination: '/legal', permanent: true },
      { source: '/schedule.html', destination: '/schedule', permanent: true },
      { source: '/newsroom-nimbus-4721.html', destination: '/blog', permanent: true }
    ];
  }
};

module.exports = nextConfig;
