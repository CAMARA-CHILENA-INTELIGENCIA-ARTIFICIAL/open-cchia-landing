'use client';

import { useTranslation } from 'react-i18next';
import { CalendarClock, FileClock } from 'lucide-react';
import Reveal from '@/components/Reveal';

type Card = { k: string; title: string; desc: string };

const ICONS = [CalendarClock, FileClock];

export default function Reuniones() {
  const { t } = useTranslation();
  const cards = t('reuniones.cards', { returnObjects: true }) as Card[];

  return (
    <section className="sec" id="reuniones">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">{t('reuniones.eyebrow')}</span>
          <h2>{t('reuniones.h2')}</h2>
          <p>{t('reuniones.p')}</p>
        </Reveal>
        <div className="meet">
          {cards.map((c, i) => {
            const Icon = ICONS[i] ?? CalendarClock;
            return (
              <Reveal className="mcard" key={i} delay={i * 0.06}>
                <div className="mk">
                  <Icon size={14} /> {c.k}
                </div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
