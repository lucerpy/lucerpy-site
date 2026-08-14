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
      // Files under /public (logos, badges, footer icons, blog cover images)
      // aren't content-hashed like _next/static, so Next.js serves them
      // with max-age=0 by default - the browser re-validates on every
      // request even though these almost never change. 30 days balances a
      // real cache win against how long a swapped-in-place image (no
      // filename change) would take to reach repeat visitors.
      {
        source: '/:path*.(png|jpg|jpeg|webp|avif|gif|svg|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, must-revalidate' },
        ],
      },
    ];
  },
};

export default nextConfig;
