'use client';

import Script from 'next/script';

// TrustedSite's own install instructions say to place this right before
// </body> on every page - in the App Router, the root layout's <body> is
// that single template, so one instance here covers the whole site.
//
// The static/inline trustmark (a fixed-position badge instead of a floating
// one) requires TrustedSite's paid Pro plan, which this account doesn't
// have - so this is the free floating trustmark instead, pinned to the
// bottom-left with an offset from the edge (their recommended value) so
// it's less obtrusive and doesn't collide with the WhatsApp button, which
// sits bottom-right (see WhatsAppButton.module.css). If these query params
// turn out not to be honored, the same position/offset can be set directly
// in the TrustedSite account dashboard instead.
export default function TrustedSiteBadge() {
  return (
    <Script
      src="https://cdn.ywxi.net/js/1.js?position=bottomLeft&offset=15"
      strategy="afterInteractive"
    />
  );
}
