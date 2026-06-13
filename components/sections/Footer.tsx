'use client';

import { useTranslation } from 'react-i18next';
import { LINKS } from '@/lib/links';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cchia-white.png" alt="CCHIA" />
            <p>{t('footer.tagline')}</p>
          </div>
          <div className="foot-cols">
            <div className="fcol">
              <h5>{t('footer.col1_title')}</h5>
              <a href="#proyectos">{t('footer.col1.proyectos')}</a>
              <a href="#recursos">{t('footer.col1.recursos')}</a>
              <a href="#flujo">{t('footer.col1.flujo')}</a>
              <a href="#unirse">{t('footer.col1.unirse')}</a>
            </div>
            <div className="fcol">
              <h5>{t('footer.col2_title')}</h5>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                {t('footer.col2.github')}
              </a>
              <a
                href={LINKS.huggingface}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.col2.huggingface')}
              </a>
              <a href={LINKS.grail} target="_blank" rel="noopener noreferrer">
                {t('footer.col2.grail')}
              </a>
              <a href="#unirse">{t('footer.col2.join')}</a>
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <p>{t('footer.copyright')}</p>
          <div className="r">
            <p>{t('footer.city')}</p>
            <a href={LINKS.cchia} target="_blank" rel="noopener noreferrer">
              <p>{t('footer.site')}</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
