'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LinkCopy({ url }: { url: string }) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const display = url.replace(/^https?:\/\//, '');

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // fallback for non-secure contexts
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch {
        /* noop */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="copyrow">
      <code className="copyrow-url" title={url}>
        {display}
      </code>
      <button
        type="button"
        className={`copybtn${copied ? ' copied' : ''}`}
        onClick={onCopy}
        aria-label={t('ui.copy')}
      >
        {copied ? <Check /> : <Copy />}
        <span>{copied ? t('ui.copied') : t('ui.copy')}</span>
      </button>
    </div>
  );
}
