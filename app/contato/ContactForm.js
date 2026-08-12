'use client';

import { useState } from 'react';
import Button from '@/components/Button/Button';
import styles from './page.module.css';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `Contato pelo site — ${form.name}`;
    const body = `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:lucerpy@lucerpy.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
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

      <Button type="submit" variant="primary">Enviar mensagem →</Button>
      <p className={styles.formNote}>
        Ao enviar, seu aplicativo de e-mail vai abrir com a mensagem pronta para envio.
      </p>
    </form>
  );
}
