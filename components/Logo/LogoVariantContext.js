'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Only the wordmark variants that read against our dark header/footer
// background — the black-text versions in the same set are meant for
// light surfaces and would be invisible here.
export const LOGO_VARIANTS = {
  white: '/logo/lucerpy-wordmark-white-transparent.png',
  whiteDot: '/logo/lucerpy-wordmark-white-lime-dot-transparent.png',
  lime: '/logo/lucerpy-wordmark-lime-transparent.png',
};

const VARIANT_LIST = Object.values(LOGO_VARIANTS);

const LogoVariantContext = createContext({
  variant: LOGO_VARIANTS.white,
  ready: false,
});

export function LogoVariantProvider({ children }) {
  const [state, setState] = useState({
    variant: LOGO_VARIANTS.white,
    ready: false,
  });

  useEffect(() => {
    // Picked once per page load, after mount, so header and footer (both
    // reading this same context) always show the same variant as each
    // other, and the server-rendered default never mismatches on hydration.
    // `ready` flips only once the real pick lands, so Logo knows the first
    // "white" render was just the placeholder, not the actual choice — it
    // shouldn't play the reveal for that one.
    setState({
      variant: VARIANT_LIST[Math.floor(Math.random() * VARIANT_LIST.length)],
      ready: true,
    });
  }, []);

  return (
    <LogoVariantContext.Provider value={state}>
      {children}
    </LogoVariantContext.Provider>
  );
}

export function useLogoVariant() {
  return useContext(LogoVariantContext);
}
