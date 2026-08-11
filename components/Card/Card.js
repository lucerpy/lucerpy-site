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
  href = '#',
  metrics
}) {
  const isService = type === 'service';

  return (
    <Link href={href} className={`${styles.card} ${styles[type]}`}>
      {!isService && (
        <div className={styles.imageWrapper}>
           {image ? (
             <Image 
               src={image} 
               alt={title} 
               fill 
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
               className={styles.image} 
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
    </Link>
  );
}
