'use client';

import Script from 'next/script';

// TrustedSite's own install instructions say to place this right before
// </body> on every page - in the App Router, the root layout's <body> is
// that single template, so one instance here covers the whole site.
export default function TrustedSiteBadge() {
  return (
    <Script
      src="https://cdn.ywxi.net/js/1.js"
      strategy="afterInteractive"
    />
  );
}
