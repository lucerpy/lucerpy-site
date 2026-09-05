'use client';

import { useRef, useState } from 'react';
import Button from '@/components/Button/Button';
import styles from './CtaMarquee.module.css';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// Scrambles in place on hover instead of a plain color swap - matches the
// neo-brutalist offset-shadow Button but gives the final CTA of the page
// one extra bit of "alive" feedback before the click.
function useScramble(text) {
  const [display, setDisplay] = useState(text);
  const running = useRef(false);

  const scramble = () => {
    if (running.current) return;
    running.current = true;
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplay(text);
        running.current = false;
      }
      iteration += 1 / 2;
    }, 30);
  };

  return [display, scramble];
}

function MarqueeRow({ images, reverse, speed }) {
  return (
    <div className={styles.marquee} style={{ '--duration': `${speed}s` }}>
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className={`${styles.track} ${reverse ? styles.reverse : ''}`}
          aria-hidden={copy === 1 || undefined}
        >
          {images.map((img, i) => (
            <div className={styles.tile} key={i}>
              <img src={img.src} alt={copy === 0 ? img.alt : ''} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function CtaMarquee({
  id = 'contato',
  title,
  description,
  buttonText,
  buttonHref,
  secondaryText,
  secondaryHref,
  action,
  imagesTop,
  imagesBottom,
}) {
  const [display, scramble] = useScramble(buttonText || '');
  const lines = Array.isArray(description) ? description : [description];

  return (
    <section className={styles.section} id={id}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {description && (
            <div className={styles.description}>
              {lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}
          {action || (
            <div className={styles.actions}>
              <Button
                href={buttonHref}
                variant="primary"
                onMouseEnter={scramble}
                className={styles.button}
              >
                {display}
              </Button>
              {secondaryText && (
                <Button href={secondaryHref} variant="link">
                  {secondaryText}
                </Button>
              )}
            </div>
          )}
        </div>

        {imagesTop?.length > 0 && (
          <div className={styles.visual}>
            <MarqueeRow images={imagesTop} reverse speed={30} />
            {imagesBottom?.length > 0 && <MarqueeRow images={imagesBottom} speed={34} />}
          </div>
        )}
      </div>
    </section>
  );
}
