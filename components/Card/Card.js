'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Card({
  type = 'service', // 'service' | 'project' | 'post'
  number,
  tag,
  title,
  description,
  image,
  imagePlaceholder,
  href,
  metrics
}) {
  const isService = type === 'service';
  // Cards without a real destination (service cards, concept projects with
  // no case page) render as a plain div — a card that looks clickable but
  // leads to "#" is a false affordance, not a real link.
  const Wrapper = href ? Link : 'div';
  const wrapperProps = href ? { href } : {};
  const [loaded, setLoaded] = useState(false);

  // next/image's native loading="lazy" still lets the browser fetch well
  // ahead of the viewport on a fast connection - fine most of the time, but
  // it competes with the hero's own background load for bandwidth/priority
  // right after navigation. This IntersectionObserver gate means the <img>
  // (and its network request) doesn't exist in the DOM at all until the
  // card is actually about to scroll into view.
  const [inView, setInView] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (inView) return;
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <Wrapper {...wrapperProps} className={`${styles.card} ${styles[type]}`}>
      {!isService && (
        <div ref={wrapperRef} className={styles.imageWrapper}>
           {image && inView ? (
             <Image
               src={image}
               alt={title}
               fill
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               // scale, not opacity: an opacity:0 start makes Chrome skip
               // the element as an LCP candidate on first paint (bit us on
               // the hero h1 already) - transform doesn't touch layout size,
               // so it's paint-safe while still giving the pop-in motion.
               className={`${styles.image} ${loaded ? styles.imagePopped : ''}`}
               onLoad={() => setLoaded(true)}
             />
           ) : (
             <div className={styles.imagePlaceholder} style={{ background: imagePlaceholder || 'linear-gradient(to bottom right, #1a1c23, #0C0D11)' }}></div>
           )}
        </div>
      )}
      
      <div className={styles.content}>
        {isService && number && <span className={styles.number}>{number}</span>}
        {!isService && tag && <span className={styles.tag}>{tag}</span>}
        
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {metrics && (
          <div className={styles.metrics}>
            {metrics.map((metric, i) => (
              <div key={i} className={styles.metric}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
}
