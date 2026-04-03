import { useState, useRef } from 'react';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

interface ContactFormProps {
  locale: Locale;
}

export function ContactForm({ locale }: ContactFormProps) {
  const translations = t(locale);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useScrollReveal(formRef);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`${translations.contact.subjectPrefix} ${name}`);
    const body = encodeURIComponent(`${translations.contact.nameLabel}: ${name}\n${translations.contact.emailLabel}: ${email}\n\n${message}`);
    window.location.href = `mailto:felipe@felipeness.dev?subject=${subject}&body=${body}`;
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-xl space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
          {translations.contact.nameLabel}
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-subtle text-text-primary placeholder:text-text-muted focus:border-orange focus:outline-none transition-colors"
          placeholder={translations.contact.namePlaceholder}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
          {translations.contact.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-subtle text-text-primary placeholder:text-text-muted focus:border-orange focus:outline-none transition-colors"
          placeholder={translations.contact.emailPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
          {translations.contact.messageLabel}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-subtle text-text-primary placeholder:text-text-muted focus:border-orange focus:outline-none transition-colors resize-none"
          placeholder={translations.contact.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        className="px-8 py-3.5 rounded-xl bg-orange text-white font-medium text-sm hover:bg-orange-hover transition-colors shadow-lg shadow-orange/20"
      >
        {translations.contact.sendButton}
      </button>
    </form>
  );
}
