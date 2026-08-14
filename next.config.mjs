/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Strict-Transport-Security and X-Content-Type-Options already come from
  // the host. Content-Security-Policy is left out for now - it needs every
  // third-party origin the site loads (Silktide, Google Tag Manager,
  // TrustedSite, jsdelivr, Google Fonts) allow-listed first, or it'll break
  // them instead of just tightening security.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
