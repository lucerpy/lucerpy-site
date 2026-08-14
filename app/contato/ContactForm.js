'use client';

import { useState } from 'react';
import Button from '@/components/Button/Button';
import { submitHubspotForm, HUBSPOT_FORMS } from '@/lib/hubspot';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import styles from './page.module.css';

const FORM_ERROR_WHATSAPP_MESSAGE = 'Olá! Tentei preencher o formulário do site mas não consegui enviar. Gostaria de falar sobre o meu projeto.';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // Bots tend to auto-fill every field, including ones a real visitor
    // never sees - if this one has a value, silently drop the submission.
    if (honeypot) {
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      await submitHubspotForm(HUBSPOT_FORMS.contact, {
        firstname: form.name,
        email: form.email,
        message: form.message,
      });
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className={styles.form}>
        <p className={styles.formSuccess}>
          Mensagem enviada! Entraremos em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Seu nome"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Conte um pouco sobre o seu projeto"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

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

      <Button type="submit" variant="primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando...' : 'Enviar mensagem →'}
      </Button>

      {status === 'error' && (
        <p className={styles.formError}>
          Não foi possível enviar sua mensagem. Tente novamente ou fale pelo{' '}
          <a href={buildWhatsAppUrl(FORM_ERROR_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
        </p>
      )}
    </form>
  );
}
