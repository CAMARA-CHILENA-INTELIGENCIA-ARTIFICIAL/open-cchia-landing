'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/lib/links';
import LanguageSwitcher from './LanguageSwitcher';

export default function Nav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a className="brand" href="#top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/cchia-white.png" alt="CCHIA" />
          <span className="brand-div" />
          <span className="brand-tag">
            Comisión <b>OpenSource&nbsp;LATAM</b>
          </span>
        </a>
        <div className="nav-links">
          <a href="#recursos">{t('nav.recursos')}</a>
          <a href="#proyectos">{t('nav.proyectos')}</a>
          <a href="#flujo">{t('nav.flujo')}</a>
          <a href="#reuniones">{t('nav.reuniones')}</a>
          <a href="#guias">{t('nav.guias')}</a>
        </div>
        <div className="nav-cta">
          <LanguageSwitcher />
          <a
            className="btn btn-ghost"
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            {t('nav.github')}
          </a>
          <a
            className="btn btn-amber"
            href={LINKS.projectsMaster}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('nav.nirvai')}
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </nav>
  );
}
