'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Star,
  GitFork,
  Github,
  ArrowUpRight,
  Boxes,
  KanbanSquare,
  ListChecks,
  Users,
  Gauge,
  ShieldCheck,
  GraduationCap,
  Stethoscope,
  Plug,
  Search,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { LINKS, GRAIL_REPO } from '@/lib/links';
import { getRepoStats, type RepoStats } from '@/lib/github';

type Track = { tag: string; title: string; desc: string; link: string };
type Roster = { name: string; desc: string; lead: string };

export default function Proyectos() {
  const { t } = useTranslation();
  const tracking = t('proyectos.tracking', { returnObjects: true }) as Track[];
  const roster = t('proyectos.roster', { returnObjects: true }) as Roster[];
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

  const trackHref = [LINKS.projectsMaster, LINKS.kanban, LINKS.teamPublic];
  const trackIcon = [ListChecks, KanbanSquare, Users];
  const rosterIcon: LucideIcon[] = [
    Gauge,
    ShieldCheck,
    GraduationCap,
    Stethoscope,
    Plug,
    Search,
  ];

  return (
    <section className="sec" id="proyectos">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="sh-l">
            <span className="eyebrow">{t('proyectos.eyebrow')}</span>
            <h2>{t('proyectos.h2')}</h2>
          </div>
          <p>{t('proyectos.p')}</p>
        </Reveal>

        {/* Acceso rápido — vistas Nirvai */}
        <div className="access">
          {tracking.map((tk, i) => {
            const Icon = trackIcon[i] ?? ListChecks;
            return (
              <Reveal className="track" key={i} delay={i * 0.05}>
                <div className="tk-row">
                  <div className="tk-ic">
                    <Icon strokeWidth={2} />
                  </div>
                  <div className="tk">{tk.tag}</div>
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

        {/* Proyectos activos */}
        <div className="roster-head">
          <span className="rh-tag">{t('proyectos.roster_tag')}</span>
          <h3>{t('proyectos.roster_h')}</h3>
          <p>{t('proyectos.roster_p')}</p>
        </div>
        <div className="roster">
          {roster.map((r, i) => {
            const Icon = rosterIcon[i] ?? Boxes;
            const isGrail = i === 0;
            return (
              <Reveal
                className={`rost${isGrail ? ' rost-grail' : ''}`}
                key={i}
                delay={(i % 3) * 0.05}
              >
                <div className="ric">
                  <Icon strokeWidth={2} />
                </div>
                <div className="rname">
                  <h5>{r.name}</h5>
                  {isGrail && (
                    <span className="badge badge-live">
                      {t('proyectos.grail_badge')}
                    </span>
                  )}
                </div>
                <p>{r.desc}</p>
                {isGrail && stats && (
                  <div className="rstats">
                    <span className="rstat">
                      <Star /> <b>{stats.stars}</b> {t('proyectos.stat_stars')}
                    </span>
                    <span className="rstat">
                      <GitFork /> <b>{stats.forks}</b>{' '}
                      {t('proyectos.stat_forks')}
                    </span>
                  </div>
                )}
                <div className="lead">
                  <Users size={13} /> {t('proyectos.roster_lead')}{' '}
                  <b>{r.lead}</b>
                </div>
                {isGrail && (
                  <div className="rlinks">
                    <a
                      className="rlink"
                      href={LINKS.grail}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github /> {t('proyectos.feature_code')}
                    </a>
                    <a
                      className="rlink"
                      href={LINKS.grailContributing}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('proyectos.feature_contribute')} <ArrowUpRight />
                    </a>
                  </div>
                )}
              </Reveal>
            );
          })}
          <Reveal className="rost rost-soon" delay={0.1}>
            <div className="ric">
              <Boxes strokeWidth={2} />
            </div>
            <h5>{t('proyectos.roster_soon')}</h5>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
