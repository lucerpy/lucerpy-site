import styles from './WhatsAppButton.module.css';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={styles.button}
    >
      <img src="/originkit/footer-02/whatsapp.svg" alt="" width={28} height={28} className={styles.icon} />
    </a>
  );
}
