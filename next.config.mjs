/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Tried experimental.cssChunking: { type: 'graph', requestCost: 200000 }
  // to merge the home page's several small render-blocking CSS chunks into
  // fewer requests - didn't meaningfully reduce the count, and introduced a
  // real bug instead: Next started preloading a CSS chunk the route never
  // actually used (browser console: "preloaded ... but not used within a
  // few seconds"), wasting a request rather than saving one. Not worth the
  // trade - back to the default chunking behavior.
  // Content-Security-Policy is left out for now - it needs every
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
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
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
