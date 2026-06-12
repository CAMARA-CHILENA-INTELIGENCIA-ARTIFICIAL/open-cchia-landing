'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, GitFork, Github, ArrowUpRight, Boxes, KanbanSquare, ListChecks } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { LINKS, GRAIL_REPO } from '@/lib/links';
import { getRepoStats, type RepoStats } from '@/lib/github';

type Track = { tag: string; title: string; desc: string; link: string };

export default function Proyectos() {
  const { t } = useTranslation();
  const tracking = t('proyectos.tracking', { returnObjects: true }) as Track[];
  const [stats, setStats] = useState<RepoStats | null>(null);

  useEffect(() => {
    let active = true;
    getRepoStats(GRAIL_REPO).then((s) => {
      if (active) setStats(s);
    });
    return () => {
      active = false;
    };
  }, []);

  const trackHref = [LINKS.projectsMaster, LINKS.kanban];
  const trackIcon = [ListChecks, KanbanSquare];

  return (
    <section className="sec" id="proyectos">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">{t('proyectos.eyebrow')}</span>
          <h2>{t('proyectos.h2')}</h2>
          <p>{t('proyectos.p')}</p>
        </Reveal>

        <div className="proj">
          {/* Featured project — GRAIL */}
          <Reveal className="proj-feature">
            <div className="ftag">
              <Boxes size={15} /> {t('proyectos.feature_tag')}
            </div>
            <h3>{t('proyectos.feature_title')}</h3>
            <p>{t('proyectos.feature_desc')}</p>
            <div className="proj-stats">
              {stats && (
                <>
                  <span className="proj-stat">
                    <Star /> <b>{stats.stars}</b> {t('proyectos.stat_stars')}
                  </span>
                  <span className="proj-stat">
                    <GitFork /> <b>{stats.forks}</b> {t('proyectos.stat_forks')}
                  </span>
                </>
              )}
              <span className="proj-stat">{t('proyectos.stat_public')}</span>
            </div>
            <div className="proj-actions">
              <a
                className="btn btn-amber"
                href={LINKS.grail}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github /> {t('proyectos.feature_code')}
              </a>
              <a
                className="btn btn-ghost"
                href={LINKS.grailContributing}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('proyectos.feature_contribute')}
              </a>
            </div>
          </Reveal>

          {/* Tracking views — Nirvai */}
          <div className="proj-side">
            {tracking.map((tk, i) => {
              const Icon = trackIcon[i] ?? ListChecks;
              return (
                <Reveal className="track" key={i} delay={i * 0.06}>
                  <div className="tk">
                    <Icon size={14} /> {tk.tag}
                  </div>
                  <h4>{tk.title}</h4>
                  <p>{tk.desc}</p>
                  <a
                    className="link"
                    href={trackHref[i]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tk.link} <ArrowUpRight />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal
          as="p"
          style={{
            marginTop: 24,
            fontSize: 13.5,
            color: 'var(--faint)',
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            lineHeight: 1.6,
          }}
        >
          {t('proyectos.note')}
        </Reveal>
      </div>
    </section>
  );
}
