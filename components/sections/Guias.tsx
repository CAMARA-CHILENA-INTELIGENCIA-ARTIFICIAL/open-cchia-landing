'use client';

import { useTranslation } from 'react-i18next';
import { Rocket, GitBranch, ListTodo, ArrowUpRight, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { LINKS } from '@/lib/links';

type Guide = {
  title: string;
  desc: string;
  status: 'soon' | 'live';
  link?: string;
};

const ICONS = [Rocket, GitBranch, ListTodo];
const HREFS = [null, LINKS.grailContributing, null];

export default function Guias() {
  const { t } = useTranslation();
  const items = t('guias.items', { returnObjects: true }) as Guide[];

  return (
    <section className="sec" id="guias">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="sh-l">
            <span className="eyebrow">{t('guias.eyebrow')}</span>
            <h2>{t('guias.h2')}</h2>
          </div>
          <p>{t('guias.p')}</p>
        </Reveal>
        <div className="guides">
          {items.map((g, i) => {
            const Icon = ICONS[i] ?? Rocket;
            const href = HREFS[i];
            const isLive = g.status === 'live';
            return (
              <Reveal className="guide" key={i} delay={(i % 3) * 0.06}>
                <div className="gic">
                  <Icon strokeWidth={2} />
                </div>
                <h4>{g.title}</h4>
                <p>{g.desc}</p>
                <span className={`badge ${isLive ? 'badge-live' : 'badge-soon'}`}>
                  <Clock size={11} />
                  {isLive ? t('guias.live') : t('guias.soon')}
                </span>
                {isLive && href && (
                  <a
                    className="glink"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {g.link} <ArrowUpRight />
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
