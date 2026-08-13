'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Only the wordmark variants that read against our dark header/footer
// background — the black-text versions in the same set are meant for
// light surfaces and would be invisible here.
const VARIANTS = [
  '/logo/lucerpy-wordmark-white-transparent.png',
  '/logo/lucerpy-wordmark-white-lime-dot-transparent.png',
  '/logo/lucerpy-wordmark-lime-transparent.png',
];

const LogoVariantContext = createContext(VARIANTS[0]);

export function LogoVariantProvider({ children }) {
  const [variant, setVariant] = useState(VARIANTS[0]);

  useEffect(() => {
    // Picked once per page load, after mount, so header and footer (both
    // reading this same context) always show the same variant as each
    // other, and the server-rendered default never mismatches on hydration.
    setVariant(VARIANTS[Math.floor(Math.random() * VARIANTS.length)]);
  }, []);

  return (
    <LogoVariantContext.Provider value={variant}>
      {children}
    </LogoVariantContext.Provider>
  );
}

export function useLogoVariant() {
  return useContext(LogoVariantContext);
}
