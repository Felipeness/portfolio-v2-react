import { createFileRoute } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { SectionHeader } from '~/shared/components/SectionHeader';
import { ContactForm } from '~/features/contact/ContactForm';

export const Route = createFileRoute('/$locale/contact')({
  head: () => ({
    meta: [
      { title: 'Contact | Felipe Soares' },
      {
        name: 'description',
        content:
          "Get in touch with Felipe Soares. Let's build something meaningful together.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { locale } = Route.useParams();
  const translations = t(locale as Locale);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <SectionHeader
        tag={translations.sections.contact.tag}
        title={translations.sections.contact.title}
        description={translations.sections.contact.description}
      />
      <ContactForm />
    </section>
  );
}
