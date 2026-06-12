'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';

const LOCALES = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // persist preference
    const date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    const isDefault = (l: string) =>
      l === i18nConfig.defaultLocale && !i18nConfig.prefixDefault;

    if (isDefault(currentLocale)) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(
          `/${currentLocale}`,
          isDefault(newLocale) ? '' : `/${newLocale}`
        ) || '/'
      );
    }
    router.refresh();
  };

  return (
    <div className="lang" role="group" aria-label="Idioma / Language">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => handleChange(l.code)}
          className={currentLocale === l.code ? 'active' : ''}
          aria-pressed={currentLocale === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
