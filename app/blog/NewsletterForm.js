'use client';

import { useState } from 'react';
import Button from '@/components/Button/Button';
import { submitHubspotForm, HUBSPOT_FORMS } from '@/lib/hubspot';
import styles from './page.module.css';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(event) {
    event.preventDefault();

    if (honeypot) {
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      await submitHubspotForm(HUBSPOT_FORMS.newsletter, { email });
      setStatus('sent');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return <p className={styles.newsletterSuccess}>Inscrição confirmada! Fique de olho no seu e-mail.</p>;
  }

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Seu melhor e-mail"
        className={styles.input}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />

      <Button type="submit" variant="secondary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando...' : 'Assinar newsletter →'}
      </Button>

      {status === 'error' && (
        <p className={styles.newsletterError}>Não foi possível concluir a inscrição. Tente novamente.</p>
      )}
    </form>
  );
}
