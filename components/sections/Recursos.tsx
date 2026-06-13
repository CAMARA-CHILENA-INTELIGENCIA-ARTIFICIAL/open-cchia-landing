'use client';

import { useTranslation } from 'react-i18next';
import { Github, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { LINKS } from '@/lib/links';

type Item = { title: string; desc: string; link: string };

export default function Recursos() {
  const { t } = useTranslation();
  const items = t('recursos.items', { returnObjects: true }) as Item[];
  const hrefs = [LINKS.github, LINKS.huggingface];

  return (
    <section className="sec" id="recursos">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="sh-l">
            <span className="eyebrow">{t('recursos.eyebrow')}</span>
            <h2>{t('recursos.h2')}</h2>
          </div>
          <p>{t('recursos.p')}</p>
        </Reveal>
        <div className="infra">
          {items.map((inf, i) => {
            const href = hrefs[i];
            const logo =
              i === 0 ? <Github /> : <span style={{ fontSize: 21 }}>🤗</span>;
            return (
              <Reveal className="inf" key={i} delay={i * 0.06}>
                <div className="ihead">
                  <div className="ilogo">{logo}</div>
                  <h4>{inf.title}</h4>
                </div>
                <p>{inf.desc}</p>
                <a
                  className="link"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inf.link} <ArrowUpRight />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
