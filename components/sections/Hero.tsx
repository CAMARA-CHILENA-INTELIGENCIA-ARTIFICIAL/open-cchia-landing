'use client';

import { useTranslation } from 'react-i18next';
import Reveal from '@/components/Reveal';
import { LINKS } from '@/lib/links';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <header className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>
      <div className="hero-inner">
        <Reveal as="span" className="eyebrow" delay={0}>
          {t('hero.eyebrow')}
        </Reveal>
        <Reveal as="h1" delay={0.06}>
          {t('hero.title_line1')}
          <br />
          {t('hero.title_line2_pre')}
          <span className="latam">{t('hero.title_latam')}</span>
        </Reveal>
        <Reveal as="p" className="hero-sub" delay={0.12}>
          {t('hero.sub')}
        </Reveal>
        <Reveal className="hero-actions" delay={0.18}>
          <a
            className="btn btn-amber btn-lg"
            href={LINKS.projectsMaster}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('hero.cta_projects')}
          </a>
          <a className="btn btn-ghost btn-lg" href="#flujo">
            {t('hero.cta_workflow')}
          </a>
        </Reveal>
        <Reveal className="hero-meta" delay={0.24}>
          <div className="mi">
            <div className="mi-k">{t('hero.meta.leader_k')}</div>
            <div className="mi-v">
              {t('hero.meta.leader_v')} <span>{t('hero.meta.leader_org')}</span>
            </div>
          </div>
          <div className="mi">
            <div className="mi-k">{t('hero.meta.cadence_k')}</div>
            <div className="mi-v">{t('hero.meta.cadence_v')}</div>
          </div>
          <div className="mi">
            <div className="mi-k">{t('hero.meta.report_k')}</div>
            <div className="mi-v">
              {t('hero.meta.report_v')} <span>{t('hero.meta.report_note')}</span>
            </div>
          </div>
          <div className="mi">
            <div className="mi-k">{t('hero.meta.project_k')}</div>
            <div className="mi-v">{t('hero.meta.project_v')}</div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
