import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5519936296268"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={styles.button}
    >
      <img src="/originkit/footer-02/whatsapp.svg" alt="" width={28} height={28} className={styles.icon} />
    </a>
  );
}
