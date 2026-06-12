'use client';

import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';

type Step = { title: string; desc: string; status: 'live' | 'soon' };

export default function Flujo() {
  const { t } = useTranslation();
  const steps = t('flujo.steps', { returnObjects: true }) as Step[];

  return (
    <section className="sec" id="flujo">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">{t('flujo.eyebrow')}</span>
          <h2>{t('flujo.h2')}</h2>
          <p>{t('flujo.p')}</p>
        </Reveal>
        <Reveal className="wf">
          {steps.map((s, i) => {
            const future = s.status === 'soon';
            return (
              <div className={`wf-step${future ? ' future' : ''}`} key={i}>
                <div className="wf-n">{i + 1}</div>
                <div>
                  <h4>
                    {s.title}
                    {future && (
                      <span className="badge badge-soon">
                        <Sparkles size={11} />
                        {t('flujo.soon')}
                      </span>
                    )}
                  </h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
