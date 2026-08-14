'use client';

import Script from 'next/script';

// TrustedSite's own install instructions say to place this right before
// </body> on every page - in the App Router, the root layout's <body> is
// that single template, so one instance here covers the whole site.
//
// Position/color for the floating trustmark are configured directly in the
// TrustedSite account dashboard (their inline/fixed-position badge needs a
// paid Pro plan this account doesn't have) - keep this to just the plain
// install snippet, not URL params we can't confirm actually work.
export default function TrustedSiteBadge() {
  return (
    <Script
      src="https://cdn.ywxi.net/js/1.js"
      strategy="afterInteractive"
    />
  );
}
