'use client';

import { useTranslation } from 'react-i18next';
import Reveal from '@/components/Reveal';
import LinkCopy from '@/components/LinkCopy';
import { LINKS } from '@/lib/links';

type Path = { pk: string; title: string; desc: string; btn: string };

export default function CTA() {
  const { t } = useTranslation();
  const paths = t('cta.paths', { returnObjects: true }) as Path[];
  const hrefs = [LINKS.formOpenTeam, LINKS.formColaboradores];
  const btnClass = ['btn btn-amber', 'btn btn-ghost'];

  return (
    <section className="sec" id="unirse">
      <div className="wrap">
        <Reveal className="cta">
          <span className="eyebrow">{t('cta.eyebrow')}</span>
          <h2>{t('cta.h2')}</h2>
          <p>{t('cta.p')}</p>
          <div className="cta-paths">
            {paths.map((p, i) => (
              <div className="path" key={i}>
                <div className="pk">{p.pk}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <a
                  className={btnClass[i]}
                  href={hrefs[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.btn}
                </a>
                <LinkCopy url={hrefs[i]} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
