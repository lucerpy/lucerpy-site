'use client';

import { useEffect } from 'react';

export default function ConsoleEasterEgg() {
  useEffect(() => {
    if (window.__lucerpyEasterEggShown) return;
    window.__lucerpyEasterEggShown = true;

    console.log(
      '%cGostou do que viu? Entre em contato: lucerpy@lucerpy.com.br',
      'color:#A1A1AA; font-size:12px;'
    );
    console.log(
      '%c"O desenvolvimento de uma inteligência artificial completa pode significar o fim da raça humana."',
      'color:#FFFFFF; font-size:14px; font-style:italic;'
    );
    console.log('%c— Stephen Hawking', 'color:#A1A1AA; font-size:12px;');
  }, []);

  return null;
}
