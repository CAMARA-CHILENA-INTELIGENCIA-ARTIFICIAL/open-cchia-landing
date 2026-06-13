'use client';

import { useTranslation } from 'react-i18next';
import { Sparkles, GitBranch, CalendarClock, FileClock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

type Step = { title: string; desc: string; status: 'live' | 'soon' };
type Card = { k: string; title: string; desc: string };

const MEET_ICONS: LucideIcon[] = [CalendarClock, FileClock];

export default function Flujo() {
  const { t } = useTranslation();
  const steps = t('flujo.steps', { returnObjects: true }) as Step[];
  const cards = t('reuniones.cards', { returnObjects: true }) as Card[];

  return (
    <section className="sec" id="flujo">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="sh-l">
            <span className="eyebrow">{t('flujo.eyebrow')}</span>
            <h2>{t('flujo.h2')}</h2>
          </div>
          <p>{t('flujo.p')}</p>
        </Reveal>

        <div className="work">
          {/* Flujo de tareas */}
          <Reveal className="work-col" as="div">
            <div className="work-sub">
              <GitBranch /> {t('flujo.work_flow')}
            </div>
            <div className="wf">
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
            </div>
          </Reveal>

          {/* Reuniones y reportes */}
          <Reveal className="work-col" as="div" delay={0.08}>
            <div className="work-sub">
              <CalendarClock /> {t('flujo.work_meet')}
            </div>
            <div className="work-meet">
              {cards.map((c, i) => {
                const Icon = MEET_ICONS[i] ?? CalendarClock;
                return (
                  <div className="mcard" key={i}>
                    <div className="mk">
                      <Icon size={14} /> {c.k}
                    </div>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
