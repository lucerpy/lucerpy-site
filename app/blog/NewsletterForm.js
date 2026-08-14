'use client';

import { useState } from 'react';
import Button from '@/components/Button/Button';
import { submitHubspotForm, HUBSPOT_FORMS } from '@/lib/hubspot';
import styles from './page.module.css';

export default function NewsletterForm({ compact = false }) {
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
    <form
      className={styles.newsletterForm}
      onSubmit={handleSubmit}
      // The blog CTA's own CSS switches to a side-by-side row at 768px
      // *viewport* width, assuming a wide, roomy section. In compact spots
      // (a narrow flex column, like the footer) that same 768px viewport
      // can still mean a container far too tight for input + button side
      // by side - forcing a column stack here overrides that regardless of
      // viewport, since inline styles win over the stylesheet's media query.
      //
      // margin is also overridden: the base CSS's `margin: 0 auto` (meant
      // to center the form in the blog's wide section) has an auto
      // cross-axis margin, which per the flexbox spec opts the form OUT of
      // its flex-column parent's stretch behavior - the form shrinks to its
      // content's width instead of filling the parent, no matter how wide
      // that parent grows. Zeroing the margin (and setting width: 100%)
      // lets it actually stretch to fill, capped by maxWidth.
      style={compact ? { flexDirection: 'column', maxWidth: '440px', width: '100%', margin: 0 } : undefined}
    >
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
