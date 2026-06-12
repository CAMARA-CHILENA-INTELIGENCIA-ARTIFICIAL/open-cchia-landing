import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { dir } from 'i18next';
import i18nConfig from '@/i18nConfig';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import '@/app/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const i18nNamespaces = ['common'];

export const metadata: Metadata = {
  title: 'Comisión OpenSource LATAM · CCHIA',
  description:
    'La Comisión OpenSource LATAM desarrolla y libera herramientas, datasets y modelos de inteligencia artificial en español — construidos por y para la comunidad de la región.',
  metadataBase: new URL('https://cchia.cl'),
  openGraph: {
    title: 'Comisión OpenSource LATAM · CCHIA',
    description:
      'Código abierto para la IA de Latinoamérica. Herramientas, datasets y modelos en español.',
    type: 'website',
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <TranslationsProvider
          locale={locale}
          namespaces={i18nNamespaces}
          resources={resources}
        >
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
